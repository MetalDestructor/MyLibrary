import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    token_key: string;
  constructor() {
      this.token_key = environment.token_key;
  }

  private getToken(): string {
    const token = localStorage.getItem(this.token_key);
    return token;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.getToken();
    if (!token) {
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`
      }
    });

    return next.handle(request);
  }
}
