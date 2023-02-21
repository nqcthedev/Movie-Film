import { useGetGenresQuery } from "@/app/redux/apiStore";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListSubheader,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React, { FC, Fragment, useEffect, useMemo } from "react";

import genresIcon from "../../../assets/genres";
import path from "@/app/routes/path";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { BoxImage, BoxLink } from "./SidebarStyled";
import { blueLogo, redLogo } from "@/utils/logoDarkMode";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
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
    top:15px;
    right:0px;
    width:6px;
    height:60px;
    background: linear-gradient(
      180deg,
      
      #D6272E 30%,
      #D6272E 100%
    );
  }
`;

const SideBar: FC<SideBarProps> = ({ setMobileOpen }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetGenresQuery();
  const { genreIdOrCategory } = useAppSelector(
    (state: RootState) => state.currentGenreOrCategory
  );
  const Icons: any = genresIcon;
  console.log(Icons);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategory]);

  const categories = useMemo(() => {
    return [
      {
        label: "Popular",
        value: "popular",
        path: path.popular,
        icon: (
          <LiveTvIcon
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
        ),
      },
      {
        label: "Top Rated",
        value: "top_rated",
        path: path.topRate,
        icon: (
          <StarHalfIcon
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
        ),
      },
      {
        label: "Upcoming",
        value: "upcoming",
        path: path.upComming,
        icon: (
          <PersonalVideoIcon
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
        ),
      },
    ];
  }, []);

  return (
    <>
      <BoxLink to="/">
        <BoxImage src={theme.palette.mode === "light" ? redLogo : blueLogo} />
      </BoxLink>
      <List>
        <ListSubheader sx={{ fontWeight: "600", fontSize: "15px" }}>
          Categories
        </ListSubheader>
        <List>
          {categories.map((tab) => (
            <Fragment key={tab.value}>
              <MenuItem
                className={classNames({
                  active: location.pathname.includes(tab.path as string),
                })}
                onClick={() => {
                  navigate(tab.path);
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <IconButton
                    sx={{
                      color: theme.palette.mode === "dark" ? "#e81818" : "",
                    }}
                  >
                    {tab.icon}
                  </IconButton>
                  <Typography
                    fontSize={"18px"}
                    lineHeight={"20px"}
                    paddingLeft={"12px"}
                    color="#9EA9B7"
                    fontWeight={"600"}
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
