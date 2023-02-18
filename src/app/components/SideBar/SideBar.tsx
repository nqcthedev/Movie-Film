import { useGetGenresQuery } from "@/app/redux/apiStore";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import {
  Box,
  List,
  ListItemButton,
  ListSubheader,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React, { FC, Fragment, useEffect } from "react";

import genresIcon from "../../../assets/genres"
import path from "@/app/routes/path";
import classNames from "classnames";
import {  useLocation, useNavigate } from "react-router-dom";
import {  BoxImage, BoxLink } from "./SidebarStyled";
interface SideBarProps {
  setMobileOpen: any;
}


const MenuItem = styled(ListItemButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  margin-bottom: 11px;
  position:relative;
  &.active {
    p {
      font-weight: 600;
      color: #D91F27;
    }
  &.active::before {
    content:'';
    position:absolute;
    top:10px;
    right:0px;
    width:6px;
    height:45px;
    background: linear-gradient(
      180deg,
      
      #D6272E 30%,
      #D6272E 100%
    );
  }
`;


const redLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const blueLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
const SideBar: FC<SideBarProps> = ({ setMobileOpen }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetGenresQuery();
  const { genreIdOrCategory } = useAppSelector(
    (state: RootState) => state.currentGenreOrCategory
  );
  const Icons: any = genresIcon
  console.log(Icons)
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategory]);


  const categories = [
    { label: 'Popular', value: 'popular',  path: path.popular, },
    { label: 'Top Rated', value: 'top_rated',   path: path.topRate, },
    { label: 'Upcoming', value: 'upcoming', path: path.upComming, },
  ];

  return (
    <>
      <BoxLink to="/">
        <BoxImage src={theme.palette.mode === "light" ? redLogo : blueLogo} />
      </BoxLink>
      <List>
        <ListSubheader sx={{fontWeight:'600'}}>Categories</ListSubheader>
        <List>
          {categories.map((tab) => (
            <Fragment key={tab.value}>
              <MenuItem
                className={classNames({
                  active: location.pathname.includes(tab.path as string),
                })}
                onClick={() => {
                  navigate(tab.path)
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                <img src={Icons[tab.label.toLowerCase()]} height={30} />
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"20px"}
                    paddingLeft={'12px'}
                    color="#9EA9B7"
                    fontWeight={'600'}
                  >
                    {tab.label}
                  </Typography>
                </Box>
              </MenuItem>
            </Fragment>
          ))}
        </List>
      </List>
    </>
  );
};

export default SideBar;
