export interface Movies {
  genreIdOrCategoryName?: string | number;
  page?:number;
  searchQuery?:string;
}

export interface Movie {
  id:string| number
}



// Week Movies
export interface RootObject {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
 }
 
 export interface Result {
  type: string;
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  media_type:        MediaType;
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
 
 export enum MediaType {
  Movie = "movie",
 }
 
 export enum OriginalLanguage {
  En = "en",
  Nl = "nl",
 }


 // Now Playing

 
 
 