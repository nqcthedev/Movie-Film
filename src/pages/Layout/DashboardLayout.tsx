import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { BoxContainer, BoxWrapper } from './DashboardLayoutStyled'

const DashboardLayout = () => {
  return (
    <BoxContainer>
      <Navbar/>
      <BoxWrapper>
        <Outlet/>
      </BoxWrapper>
    </BoxContainer>
  )
}

export default DashboardLayout