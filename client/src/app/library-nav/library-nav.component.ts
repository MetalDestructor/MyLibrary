import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-library-nav',
  templateUrl: './library-nav.component.html',
  styleUrls: ['./library-nav.component.less']
})
export class LibraryNavComponent implements OnInit {
  currentUser: any;

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const id = this.authService.getUserInfo()['sub'];
    this.apiService.getUser(id).subscribe(data => (this.currentUser = data));
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getUsername(): string {
    return this.currentUser.username;
  }
}
