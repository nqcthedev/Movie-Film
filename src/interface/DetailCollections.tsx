export interface RootObjectCollection {
  backdrop_path: string;
  id:            number;
  name:          string;
  overview:      string;
  parts:         Part[];
  poster_path:   string;
 }
 
 export interface Part {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  media_type:        string;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
 }
 