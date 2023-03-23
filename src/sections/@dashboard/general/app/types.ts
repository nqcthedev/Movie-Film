
interface IObjectKeys {
  [key: string]: string | number | boolean | number[] | Date;
}

export interface ItemPropsData extends IObjectKeys {
  adult: boolean,
  backdrop_path: string,
  id: number,
  title: string,
  original_language: string,
  original_title: string,
  overview: string,
  poster_path: string,
  media_type: string,
  popularity: number,
  release_date: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}



export interface RootObject {
  dates:         Dates;
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
 }
 
 export interface Dates {
  maximum: Date;
  minimum: Date;
 }
 
 export interface Result extends IObjectKeys {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguage;
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
 
 export enum OriginalLanguage {
  De = "de",
  En = "en",
  Es = "es",
 }