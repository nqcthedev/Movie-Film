export interface Movies {
  genreIdOrCategoryName: string | number;
  page:number;
  searchQuery:string;
}

export interface Movie {
  id:string| number
}