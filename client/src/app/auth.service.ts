import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  TOKEN_KEY = 'token';
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem(this.TOKEN_KEY);
  }

  registerUser(userData) {
    this.http
      .post('http://localhost:3000/register', userData)
      .subscribe(res => {
        console.log('YES');
      });
  }

  loginUser(userData) {
    this.http.post('http://localhost:3000/login', userData).subscribe(res => {
      console.log(res);
      localStorage.setItem(this.TOKEN_KEY, res[this.TOKEN_KEY]);
    });
  }

  getToken(): string {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token;
  }

  isAuthenticated(): boolean {
    if (!this.token) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    if (confirm('Are you sure you want to logout ?')) {
      this.removeToken();
    }
  }

  private removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.token = null;
  }
}
