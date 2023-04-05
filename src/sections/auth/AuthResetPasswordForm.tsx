import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// @mui
import { Alert, Stack } from "@mui/material";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
// routes
import { PATH_AUTH } from "@/routes/path";
// components
import FormProvider, { RHFTextField } from "@/components/hook-form";

import { ResetPasswordSchema } from "@/utils/SchemaYup";
import { useAuthContext } from "@/auth/useAuthContext";
import { useSnackbar } from "@/components/snackbar";

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  afterSubmit?: string;
};

const AuthResetPasswordForm = () => {
  const { forgot } = useAuthContext();

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ResetPasswordSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      if (forgot) {
        await forgot(data.email);
      }
      setTimeout(() => {
        enqueueSnackbar("Request success please check email you!", {
          variant: "success",
        });
        navigate(PATH_AUTH.login);
      }, 500);
    } catch (error: any) {
      enqueueSnackbar(error, { variant: "error" });
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message || error,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="email" label="Email address" />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 3 }}
      >
        Send Request
      </LoadingButton>
    </FormProvider>
  );
};

export default AuthResetPasswordForm;
