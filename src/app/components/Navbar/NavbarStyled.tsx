import styled from "@emotion/styled";
import { Box, IconButton, Toolbar } from "@mui/material";

const drawerWidth = 300;

export const BoxToolBar = styled(Toolbar)(({ theme }: any) => ({
    height:'120px',
    display: 'flex',
    justifyContent:'space-between',
    marginLeft:'250px',
    [theme.breakpoints.down('sm')]: {
      marginLeft:0,
      flexWrap:'wrap'
    }
}));

export const BoxIconButton = styled(IconButton)(({ theme }: any) => ({
  outline:'none',
  marginRight:theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    display:'none',
  }
}))

export const BoxIconButtonDark = styled(IconButton)(({ theme }: any) => ({
  marginLeft:'16px',
  
}))