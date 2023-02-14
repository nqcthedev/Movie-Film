
import { searchMovie } from "@/feature/currentGenreOrCategory";
import { useAppDispatch } from "@/store/store";
import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { BoxContainer } from "./SearchStyled";

const Search = () => {
  const [isQuery, setIsQuery] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleQuery = (e: any) => {
    setIsQuery(e.target.value);
  };
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      dispatch(searchMovie(isQuery));
    }
  };
  return (
    <BoxContainer>
      <TextField
        onKeyPress={handleKeyPress}
        value={isQuery}
        onChange={handleQuery}
        variant="standard"
        placeholder="Search everything"
        sx={{width:'400px'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </BoxContainer>
  );
};
export default Search;
