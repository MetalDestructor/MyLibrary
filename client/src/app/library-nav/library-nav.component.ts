import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-library-nav',
  templateUrl: './library-nav.component.html',
  styleUrls: ['./library-nav.component.less']
})
export class LibraryNavComponent implements OnInit {
  userData: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userData = this.authService.getUserInfo();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getUsername(): string {
    return this.userData.username;
  }
}
