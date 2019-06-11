import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  public genres: any = [];
  public authors: any = [];
  path: string;

  constructor(private http: HttpClient) {
    this.path = environment.path;
  }

  getGenres() {
    this.http.get(this.path + '/genres').subscribe(res => {
      this.genres = res;
    });
  }

  getAuthors() {
    this.http.get(this.path + '/authors').subscribe(res => {
      this.authors = res;
    });
  }

  postAuthor(author) {
    this.http.post(this.path + '/authors', author).subscribe(res => {
      console.log(res);
    });
  }

  getProfile(id) {
    return this.http.get(this.path + '/authors/' + id);
  }
}
