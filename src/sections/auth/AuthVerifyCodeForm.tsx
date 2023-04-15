
import * as Yup from "yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { VerifyCodeSchema } from "@/utils/SchemaYup";
import { PATH_AUTH } from "@/routes/path";
import FormProvider from "@/components/hook-form/FormProvider";
import RHFCodes from "@/components/hook-form/RHFCodes";
import { FormHelperText, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "@/components/snackbar";

type FormValuesProps = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
};

const AuthVerifyCodeForm = () => {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar("Verify success!");
      navigate(PATH_AUTH.login);
    } catch (error: any) {
      enqueueSnackbar(error, { variant: "success" });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFCodes
          keyName="code"
          inputs={["code1", "code2", "code3", "code4", "code5", "code6"]}
        />

        {(!!errors.code1 ||
          !!errors.code2 ||
          !!errors.code3 ||
          !!errors.code4 ||
          !!errors.code5 ||
          !!errors.code6) && (
          <FormHelperText error sx={{ px: 2 }}>
            Code is required
          </FormHelperText>
        )}

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Verify
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
};

export default AuthVerifyCodeForm;
