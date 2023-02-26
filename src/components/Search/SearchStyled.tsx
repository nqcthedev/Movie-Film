import styled from "@emotion/styled";
import { Box } from "@mui/material";




export const BoxContainer = styled(Box)(({ theme }: any) => ({
  border:'1px solid #A3AFBA',
  padding:'15px 30px',
  borderRadius:'9999px',
  [theme.breakpoints.down('lg')]: {
    display:'flex',
    justifyContainer:'center',
    width:'100%',
}}));



