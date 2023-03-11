import LoginPhoneNumber from '@/sections/auth/LoginPhoneNumber';
import React from 'react';
import { Helmet } from 'react-helmet-async'

const LoginPhoneNumberPage = () => {
  return (
    <>
    <Helmet>
      <title>Login | 4K Movile</title>
    </Helmet>

    <LoginPhoneNumber/>
    </>
  )
}

export default LoginPhoneNumberPage