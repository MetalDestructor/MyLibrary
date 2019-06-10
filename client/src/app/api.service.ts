import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  public genres: any = [];
  public authors: any = [];

  constructor(private http: HttpClient) {}

  getGenres() {
    this.http.get('http://localhost:3000/genres').subscribe(res => {
      this.genres = res;
    });
  }

  getAuthors() {
    this.http.get('http://localhost:3000/authors').subscribe(res => {
      this.authors = res;
    });
  }

  postAuthor(author) {
    this.http.post('http://localhost:3000/authors', author).subscribe(res => {
      console.log(res);
    });
  }

  getProfile(id) {
    return this.http.get('http://localhost:3000/authors/' + id);
  }
}
