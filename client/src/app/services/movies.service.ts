import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
    return this.http.get('/api/movies/genres');
  }
  getAllMovies(): Observable<any> {
    return this.http.get('/api/movies');
  }

  selectedGenre: String;
  title: String;
  length: Number;
  poster: String;

  assigner(selectedGenre, title, length, poster) {
    this.selectedGenre = selectedGenre;
    this.title = title;
    this.length = length;
    this.poster = poster;
  }

  postMovie(): Observable<any> {
    return this.http.post('/api/movies', {
      genre: this.selectedGenre,
      title: this.title,
      length: this.length,
      image: this.poster
    }, httpOptions);
  }

  deleteMov(id): Observable<any> {
    return this.http.delete('/api/movies/'+id)
  }

  putMov(id): Observable<any> {
    return this.http.put('/api/movies/'+id, {
      genre: this.selectedGenre,
      title: this.title,
      length: this.length,
      image: this.poster
    }, httpOptions);
  }
}
