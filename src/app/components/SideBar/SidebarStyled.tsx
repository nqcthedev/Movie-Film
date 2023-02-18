import styled from "@emotion/styled";
import { ListItemButton } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const BoxContainer = styled(ListItemButton)(({theme}: any) => ({
    display:'flex',
    alignItem:'center',
    justifyContent:'space-between',
    padding:'15px 30px',
    marginBottom:'11px',
    "&.active" : {
      background:
      "linear-gradient(90deg, #D9F8FC 23.46%, rgba(217, 248, 252, 0) 100%)",
    "& .MuiTypography-root": {
      color: '#001d6e',
      fontWeight: "600",
    },
    }
}))


export const BoxLink= styled(Link)(({ theme }: any) => ({
  display:'flex',
  justifyContent:'center',
  padding:'10%, 0',
  textDecoration: 'none',
}));

export const BoxImage = styled('img')(({ theme }: any) => ({
  width:'100%'
}))

export const BoxLinkTitle = styled(NavLink)(({ theme }: any) =>({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}))