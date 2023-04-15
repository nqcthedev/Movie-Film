import React from "react";

import * as Yup from "yup";
// form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
  Stack,
  Button,
  Rating,
  Dialog,
  Typography,
  DialogTitle,
  DialogProps,
  DialogActions,
  DialogContent,
  FormHelperText,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from "@/components/hook-form";
import useLocales from "@/locales/useLocales";
import {
  usePostRatingMutation,
  useCreateGuestSessionQuery,
} from "@/services/apiStore";
import { useSnackbar } from "@/components/snackbar";
import { ReviewSchema } from "@/utils/SchemaYup";

// ----------------------------------------------------------------------

type FormValuesProps = {
  rating: number | string | null;
  review: string;
  name: string;
  email: string;
};

interface Props extends DialogProps {
  onClose: VoidFunction;
  id: any;
}

const MovieDetailsNewReviewForm = ({ onClose, id, ...other }: Props) => {
  const { translate } = useLocales();

  const { enqueueSnackbar } = useSnackbar();

  const defaultValues = {
    rating: null,
    review: "",
    name: "",
    email: "",
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ReviewSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const [postRating, { data, isLoading, isSuccess, isError }] =
    usePostRatingMutation();

  const { data: guestSession, isSuccess: successGuest } =
    useCreateGuestSessionQuery();

    

  const onSubmit = async (data: FormValuesProps) => {
    try {
      // const req = {
      //   id: id,
      //   value:data.rating,
      //   guest_session_id: guestSession.guest_session_id
      // };
      // postRating(req);
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar(`${translate("reviewSuccess")}`, { variant: "success" });
      reset();
      onClose();
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
  };

  const onCancel = () => {
    onClose();
    reset();
  };

  return (
    <Dialog onClose={onClose} {...other}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{`${translate("addReview")}`}</DialogTitle>

        <DialogContent>
          <Stack
            direction="row"
            flexWrap="wrap"
            alignItems="center"
            spacing={1.5}
          >
            <Typography variant="body2">{`${translate(
              "yourReview"
            )}`}</Typography>

            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <Rating
                  {...field}
                  value={Number(field.value)}
                  precision={0.1}
                />
              )}
            />
          </Stack>

          {!!errors.rating && (
            <FormHelperText error> {errors.rating?.message}</FormHelperText>
          )}

          <RHFTextField
            name="review"
            label="Review *"
            multiline
            rows={3}
            sx={{ mt: 3 }}
          />

          <RHFTextField name="name" label="Name *" sx={{ mt: 3 }} />

          <RHFTextField name="email" label="Email *" sx={{ mt: 3 }} />
        </DialogContent>

        <DialogActions>
          <Button color="inherit" variant="outlined" onClick={onCancel}>
            Cancel
          </Button>

          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Post review
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default MovieDetailsNewReviewForm;
