import React, { useEffect, useMemo } from 'react'
import NProgress from 'nprogress';
import StyledProgressBar from './styles';
const ProgressBar = () => {
  NProgress.configure({showSpinner:false});

  useMemo(() => {
    NProgress.start()
  }, []);

  useEffect(() => {
    NProgress.done()
  }, []);
  return (
   <StyledProgressBar/>
  )
}

export default ProgressBar