import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  public genres: any = [];
  public authors: any = [];
  public books: any = [];
  path: string;

  constructor(private http: HttpClient) {
    this.path = environment.path;
  }

  getGenres() {
    this.http.get(this.path + '/genres').subscribe(res => {
      this.genres = res;
    });
  }

  getBooks() {
    this.http.get(this.path + '/books').subscribe(res => {
      console.log(res);
      this.books = res;
    });
  }

  getBook(id: string) {
    return this.http.get(this.path + '/books/' + id);
  }

  getAuthors() {
    this.http.get(this.path + '/authors').subscribe(res => {
      this.authors = res;
    });
  }

  postAuthor(author:any) {
    this.http.post(this.path + '/authors', author).subscribe(res => {
      console.log(res);
    });
  }

  getAuthor(id: string) {
    return this.http.get(this.path + '/authors/' + id);
  }
}
