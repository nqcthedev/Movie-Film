import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../custom-input/CustomTextField";
import Iconify from "../iconify/Iconify";
import SearchNotFound from "../search-not-found/SearchNotFound";
// @mui
import { Link, Typography, Autocomplete, InputAdornment } from "@mui/material";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import Image from "../image/Image";
import { PATH_DASHBOARD } from "@/routes/path";
import { useGetListMoviesWithSearchQuery } from "@/services/apiStore";
import { TMDB_IMAGE } from "@/utils/urlImage";

// -----------------------------------------------------------------------------

// type Props = {
//   url: string;
// };

const MovieListSearch = () => {
  const navigate = useNavigate();

  const [searchMovies, setSearchMovies] = useState<string>("");

  // const [id, setId] = useState<number>(0)
  // const [type, setType] = useState<string>("")

  const handleChangeSearch = (value: string) => {
    setSearchMovies(value);
  };

  const { data } = useGetListMoviesWithSearchQuery({ searchMovies });

  const handleGotoMovie = (id: number, media_type: string) => {
    navigate(PATH_DASHBOARD.detail.view(id, media_type));
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // if(id && type) {
      // return  navigate(PATH_DASHBOARD.detail.view(id, type));
      // }
    }
  };

  return (
    <Autocomplete
      size="small"
      autoHighlight
      popupIcon={null}
      options={data}
      onInputChange={(event, value) => handleChangeSearch(value)}
      getOptionLabel={(movie: any) => movie.name || movie.title}
      noOptionsText={<SearchNotFound query={searchMovies} />}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      componentsProps={{
        popper: {
          sx: {
            width: `280px !important`,
          },
        },
        paper: {
          sx: {
            "& .MuiAutocomplete-option": {
              px: `8px !important`,
            },
          },
        },
      }}
      renderInput={(params) => (
        <CustomTextField
          {...params}
          width={220}
          placeholder="Search..."
          onKeyUp={handleKeyUp}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ ml: 1, color: "text.disabled" }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, movie, { inputValue }) => {
        const { name, title, backdrop_path, id, media_type } = movie;
        const matches = match(title || name, inputValue);
        const parts = parse(title || name, matches);
        // setType(media_type)
        // setId(id)
        return (
          <li {...props}>
            <Image
              alt={title || name}
              src={`${TMDB_IMAGE}${backdrop_path}`}
              sx={{
                width: 48,
                height: 48,
                borderRadius: 1,
                flexShrink: 0,
                mr: 1.5,
              }}
            />

            <Link
              underline="none"
              onClick={() => handleGotoMovie(id, media_type)}
            >
              {parts.map((part, index) => (
                <Typography
                  key={index}
                  component="span"
                  variant="subtitle2"
                  color={part.highlight ? "primary" : "textPrimary"}
                >
                  {part.text}
                </Typography>
              ))}
            </Link>
          </li>
        );
      }}
    />
  );
};

export default MovieListSearch;
