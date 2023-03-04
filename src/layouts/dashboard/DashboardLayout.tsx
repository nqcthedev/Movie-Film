import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
// @mui
import { Box } from '@mui/material'
//components
import { useSettingsContext } from '@/components/settings'
// hooks
import useResponsive from '@/hooks/useResponsive'
//
import Header from './header'
import Main from './Main'



const DashboardLayout = () => {
  const {themeLayout} = useSettingsContext();

  const isDesktop = useResponsive("up", "lg");

  const [open, setOpen] = useState<boolean>(false);

  const isNavHorizontal = themeLayout === "horizontal";

  const isNavMini = themeLayout === "mini";

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose}/>

  return ( 
   <>
   <Header onOpenNav={handleOpen}/>

   <Box sx={{
    display:{lg:"flex"},
    minHeight:{lg:1},
   }}>
    {renderNavVertical}
    <Main>
      <Outlet/>
    </Main>
   </Box>
   </>
  )
}

export default DashboardLayout