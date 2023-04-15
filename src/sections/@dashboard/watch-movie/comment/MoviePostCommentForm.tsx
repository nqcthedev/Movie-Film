import React, { useMemo } from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Avatar, Link, Stack, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { useAuthContext } from "@/auth/useAuthContext";
import { addDoc, collection } from "firebase/firestore";
import { DB } from "@/auth/FireBaseContext";
import { useSnackbar } from "notistack";
import { IMoviePostComment } from "@/@types/movie";
import { PATH_AUTH } from "@/routes/path";
import {  Link as RouterLink } from "react-router-dom";

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

  const theme = useTheme();

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
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ mr: 2, width: 48, height: 48 }} />
          <Typography color="text.secondary" variant="body2" fontWeight="bold">
            Vui lòng
          </Typography>
        

          <Link
            component={RouterLink}
            to={PATH_AUTH.login}
            variant="body2"
            color="inherit"
            fontWeight={"900"}
            underline="none"
            sx={{ color: theme.palette.primary.main }}
          >
            Đăng nhập
          </Link>
          <Typography
            color="text.secondary"
            variant="body2"
            fontWeight="bold"
          >
            tài khoản để sử dụng Bình luận
          </Typography>
        </Stack>
      )}
    </FormProvider>
  );
};

export default MoviePostCommentForm;
