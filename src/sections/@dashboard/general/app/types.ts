
interface IObjectKeys {
  [key: string]: string | number | boolean ;
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