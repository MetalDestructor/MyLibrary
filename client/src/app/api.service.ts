import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  public genres: any = [];

  constructor(private http: HttpClient) {}

  getGenres() {
    this.http.get('http://localhost:3000/genres').subscribe(res => {
      this.genres = res;
    });
  }
}
