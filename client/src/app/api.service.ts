import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  path: string;

  constructor(private http: HttpClient) {
    this.path = environment.path;
  }

  getGenres() {
    return this.http.get(this.path + '/genres');
  }

  getBooks() {
    return this.http.get(this.path + '/books');
  }

  getBook(id: string) {
    return this.http.get(this.path + '/books/' + id);
  }

  getBookByAuthor(id: string) {
    return this.http.get(this.path + '/books/author/' + id);
  }

  getBookByUser(id: string) {
    return this.http.get(this.path + '/books/user/' + id);
  }

  postBook(book:any) {
    return this.http.post(this.path + '/books', book);
  }

  getAuthors() {
    return this.http.get(this.path + '/authors');
  }

  postAuthor(author:any) {
    return this.http.post(this.path + '/authors', author);
  }

  getAuthor(id: string) {
    return this.http.get(this.path + '/authors/' + id);
  }

  deleteAuthor(id: string) {
    return this.http.delete(this.path + '/authors/' + id);
  }

  getUser(id: string) {
    return this.http.get(this.path + '/users/' + id);
  }

  formatDate(date: Date) {
    return formatDate(date, 'dd/MM/yyyy', 'en');
  }
}
