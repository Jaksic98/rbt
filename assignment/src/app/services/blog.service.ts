import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private categoriesUrl =
    'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/categories';
  private moviesUrl =
    'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<any> {
    return this.httpClient.get(this.categoriesUrl);
  }

  getMovies(): Observable<any> {
    return this.httpClient.get(this.moviesUrl);
  }

  getMovie(id: number): Observable<any> {
    return this.httpClient.get(this.moviesUrl + '/' + id);
  }

  getComments(id: number): Observable<any> {
    return this.httpClient.get(this.moviesUrl + '/' + id + '/comments');
  }

  postComment(comment: Comment): Observable<any> {
    return this.httpClient.post(
      this.moviesUrl + '/' + comment.movieId + '/comments',
      comment,
    );
  }
}
