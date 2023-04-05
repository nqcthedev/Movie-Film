export interface RootObjectReview {
  id:            number;
  page:          number;
  results:       ResultReviews[];
  total_pages:   number;
  total_results: number;
 }
 
 export interface ResultReviews {
  results: any;
  author:         string;
  author_details: AuthorDetails;
  content:        string;
  created_at:     Date;
  id:             string;
  updated_at:     Date;
  url:            string;
 }
 
 export interface AuthorDetails {
  avatar_path: null | string;
  name:        string;
  rating:      number;
  username:    string;
 }
 