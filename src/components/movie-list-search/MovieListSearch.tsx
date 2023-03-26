import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../custom-input/CustomTextField";
import Iconify from "../iconify/Iconify";
import SearchNotFound from "../search-not-found/SearchNotFound";
// @mui
import { Link, Typography, Autocomplete, InputAdornment } from "@mui/material";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import Image from "../image/Image";
import { paramCase } from "change-case";
import { PATH_DASHBOARD } from "@/routes/path";

// -----------------------------------------------------------------------------

type Props = {
  url: string;
};

const MovieListSearch = ({ url }: Props) => {
  const navigate = useNavigate();

  const [searchMovies, setSearchMovies] = useState<string>("");

  const [searchResults, setSearchResults] = useState([]);

  const handleChangeSearch = (value: string) => {};

  const handleGotoMovie = (name: string) => {
    // navigate(PATH_DASHBOARD.{url}.view(paramCase(name as string)));
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleGotoMovie(searchMovies);
    }
  };

  return (
    <Autocomplete
      size="small"
      autoHighlight
      popupIcon={null}
      options={searchResults}
      onInputChange={(event: any, value: string) => handleChangeSearch(value)}
      getOptionLabel={(product: any) => product.name}
      noOptionsText={<SearchNotFound query={searchMovies} />}
      isOptionEqualToValue={(option: any, value: any) => option.id === value.id}
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
      renderInput={(params: any) => (
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
        const { name, cover } = movie;
        const matches = match(name, inputValue);
        const parts = parse(name, matches);

        return (
          <li {...props}>
            <Image
              alt={cover}
              src={cover}
              sx={{
                width: 48,
                height: 48,
                borderRadius: 1,
                flexShrink: 0,
                mr: 1.5,
              }}
            />

            <Link underline="none" onClick={() => handleGotoMovie(name)}>
              {parts.map((part, index) => (
                <Typography
                  key={index}
                  component="span"
                  variant="subtitle2"
                  color={part.highlight ? "primary" : "textPrimary"}
                ></Typography>
              ))}
            </Link>
          </li>
        );
      }}
    ></Autocomplete>
  );
};

export default MovieListSearch;
