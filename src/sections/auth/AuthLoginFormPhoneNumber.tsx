import * as Yup from "yup";
// context
import { useAuthContext } from '@/auth/useAuthContext';
// hook-form
import FormProvider from '@/components/hook-form/FormProvider';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// component
import React, {  useState } from 'react'
import { LoginByNumberSchema } from "@/utils/SchemaYup";

import { Alert, Stack } from "@mui/material";
import { RHFTextField } from "@/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { PATH_AUTH } from "@/routes/path";
import { useSnackbar } from "@/components/snackbar";

// ------------------------------------------------------------

type FormValuesProps = {
  phone: string;
  afterSubmit?: string;
}

const AuthLoginFormPhoneNumber = () => {
  const navigate = useNavigate()

  const {  loginByPhoneNumber } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const [isPhone, setIsPhone] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const APPVERIFIER_RECAP = window.recaptchaVerifier;

  const defaultValues = {
   phone:""
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginByNumberSchema),
    defaultValues,
  });


  // const onCaptchVerify = useCallback(() => {
  //   window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  //     'size': 'normal',
  //     'callback': (response: any) => {
  //       onSignUp()
  //     },
  //     'expired-callback': () => {
  //     }
  //   }, AUTH);
  // }, [])

  // const onSignUp = useCallback( async () => {
  //   console.log("runnn")
  //   setIsLoading(true)
  //   try {
  //     onCaptchVerify();
    
  //     const formatPhone = "+" + isPhone
  //     const confirmationResult = await signInWithPhoneNumber(AUTH, formatPhone, APPVERIFIER_RECAP)
  //     window.confirmationResult = confirmationResult;
  //     setIsLoading(false)
  //     enqueueSnackbar("OTP sended successfully!", { variant: "success" });
  //   } catch(error) {}
  // }, [])



  const onSubmit = async (data: FormValuesProps) => {
    try {
      setIsPhone(data.phone)
      // onSignUp()
      await new Promise((resolve) => setTimeout(resolve, 500));
      sessionStorage.setItem('email-recovery', data.phone);
      navigate(PATH_AUTH.verify);
      setTimeout(() => {
        enqueueSnackbar("OTP sended successfully!", { variant: "success" });
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

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
       <Stack spacing={2.5}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="phone" label="Phone number" />
        
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
        sx={{ mt: 3 }}
      >
        Login
      </LoadingButton>
    </FormProvider>
  )
}

export default AuthLoginFormPhoneNumber