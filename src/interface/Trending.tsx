export interface RootObject {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
 }
 
 export interface Result {
  adult:             boolean;
  backdrop_path:     string;
  first_air_date?:   Date;
  genre_ids:         number[];
  id:                number;
  media_type:        MediaType;
  name?:             string;
  origin_country?:   string[];
  original_language: string;
  original_name?:    string;
  original_title?:   string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date?:     Date;
  title?:            string;
  video?:            boolean;
  vote_average:      number;
  vote_count:        number;
 }
 
 export enum MediaType {
  Movie = "movie",
  Tv = "tv",
 }