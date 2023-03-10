import Login from '@/sections/auth/Login'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const LoginPage = () => {
  return (
    <>
    <Helmet>
      <title>Login | 4K Movile</title>
    </Helmet>

    <Login/>
    </>
  )
}

export default LoginPage