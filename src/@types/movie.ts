// ----------------------------------------------------------------------

import { CustomFile } from "@/components/upload/types";

export type IMovieFilter = {
  category: string;
  rating: string;
  sortBy: string;
};

export type IMoviePostComment = {
  id?:any;
  movieId:string;
  avatarUrl:string;
  message:string;
  postedAt:any;
  userId:string;
  userName:string;
  replyComment?:any;
  // users: {
  //   id:string;
  //   name:string;
  //   avatarUrl:string;
  // }[];
  replies?: any[];
  reactions: any[]
}



export type IMovieNewPost = {
  title: string;
  description: string;
  content: string;
  cover: CustomFile | string | null;
  tags: string[];
  publish: boolean;
  comments: boolean;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
};

export type IMoviePost = {
  id: string;
  cover: string;
  title: string;
  description: string;
  createdAt: Date | string | number;
  view: number;
  comment: number;
  share: number;
  favorite: number;
  author: {
    name: string;
    avatarUrl: string;
  };
  tags: string[];
  body: string;
  favoritePerson: {
    name: string;
    avatarUrl: string;
  }[];
  comments: IMoviePostComment[];
};


export type ImovieReactions = {
  userId?: string;
  nameReaction?: string;
}[]
