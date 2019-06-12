import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  token_key: string;
  path: string;
  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem(environment.token_key);
    this.path = environment.path;
    this.token_key = environment.token_key;
  }

  registerUser(userData) {
    this.http.post(this.path + '/register', userData).subscribe(res => {
      this.token = res[this.token_key];
      localStorage.setItem(this.token_key, res[this.token_key]);
      this.router.navigate(['/']);
    });
  }

  loginUser(userData) {
    this.http.post(this.path + '/login', userData).subscribe(res => {
      this.token = res[this.token_key];
      localStorage.setItem(this.token_key, res[this.token_key]);
      this.router.navigate(['/']);
    });
  }

  getToken(): string {
    const token = localStorage.getItem(this.token_key);
    return token;
  }

  isAuthenticated(): boolean {
    if (!this.token) {
      return false;
    } else {
      return true;
    }
  }

  getUserInfo() {
    const webToken = jwt_decode(this.token);
    return webToken;
  }

  logout() {
    if (confirm('Are you sure you want to logout ?')) {
      this.removeToken();
    }
  }

  private removeToken() {
    localStorage.removeItem(this.token_key);
    this.token = null;
  }
}
