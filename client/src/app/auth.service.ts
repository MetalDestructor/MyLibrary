import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(userData) {
    this.http.post('http://localhost:3000/register', userData).subscribe(res => {
      console.log('YES');
    });
  }

  loginUser(userData) {
    this.http.post('http://localhost:3000/login', userData).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res['token']);
    });
  }
}
