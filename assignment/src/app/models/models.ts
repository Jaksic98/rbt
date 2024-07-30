export interface Movie {
  id: number;
  categoryId: number;
  imdbId: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Comment {
  id?: number;
  movieId?: number;
  movieImdbId?: string;
  comment?: string;
  createdAt?: string;
  text?: string;
  userId?: number;
  username?: string;
  isAnon?: boolean;
}
