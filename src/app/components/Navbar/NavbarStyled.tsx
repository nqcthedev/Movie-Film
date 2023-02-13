import styled from "@emotion/styled";
import { Box, Toolbar } from "@mui/material";

export const BoxToolBar = styled(Toolbar)(({ theme }: any) => ({
    height:'80px',
    display: 'flex',
    justifyContent:'space-between',
    marginLeft:'240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft:0,
      flexWrap:'wrap'
    }
}));