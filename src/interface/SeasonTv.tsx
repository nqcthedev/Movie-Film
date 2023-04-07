export interface RootObjectSeasonTV {
  seasons: any;
  _id:           string;
  air_date:      Date;
  episodes:      Episode[];
  id:            number;
  name:          string;
  overview:      string;
  poster_path:   string;
  season_number: number;
 }
 
 export interface Episode {
  poster_path: any;
  air_date:        Date;
  crew:            any[];
  episode_number:  number;
  guest_stars:     any[];
  id:              number;
  name:            string;
  overview:        string;
  production_code: string;
  runtime:         null;
  season_number:   number;
  show_id:         number;
  still_path:      null;
  vote_average:    number;
  vote_count:      number;
 }
 