import Register from '@/sections/auth/Register'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const RegisterPage = () => {
  return (
    <>
    <Helmet>
      <title>Register | 4K Movile</title>
    </Helmet>

    <Register/>
    </>
  )
}

export default RegisterPage