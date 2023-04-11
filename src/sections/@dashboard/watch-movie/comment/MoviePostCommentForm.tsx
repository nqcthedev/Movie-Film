import React, { useMemo } from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Avatar, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from "../../../../components/hook-form";
import { useAuthContext } from "@/auth/useAuthContext";
import { addDoc, collection } from "firebase/firestore";
import { DB } from "@/auth/FireBaseContext";
import { useSnackbar } from "notistack";
import { IMoviePostComment } from "@/@types/movie";

// ----------------------------------------------------------------------

type FormValuesProps = {
  comment: string;
};

type Props = {
  movieId: any;
};

const MoviePostCommentForm = ({ movieId }: Props) => {
  const { user } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const CommentSchema = Yup.object().shape({
    comment: Yup.string().required("Comment is required"),
  });

  const defaultValues = {
    comment: "",
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(CommentSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const newComment: IMoviePostComment = {
        replyComment: null,
        movieId: movieId,
        userId: user?.uid,
        userName: user?.displayName,
        avatarUrl: user?.photoURL,
        message: data.comment,
        reactions: [],
        postedAt: Date.now(),
      };
      const res = await addDoc(collection(DB, "comments"), newComment);
      enqueueSnackbar("Bình luận thành công", { variant: "success" });
      reset();
      console.log("DATA", res);
      return {
        ...newComment,
        id: res.id,
      };
    } catch (err: any) {
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {user ? (
        <Stack spacing={3} alignItems="flex-end">
          <RHFTextField
            name="comment"
            placeholder="Write some of your comments..."
            multiline
            rows={3}
          />

          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Post comment
          </LoadingButton>
        </Stack>
      ) : (
        <Stack direction="row" alignItems="center">
          <Avatar sx={{ mr: 2, width: 48, height: 48 }} />
          <Typography   color="text.secondary"
              variant="body2"
              fontWeight="bold">Bạn cần đăng nhập để bình luận!</Typography>
        </Stack>
      )}
    </FormProvider>
  );
};

export default MoviePostCommentForm;
