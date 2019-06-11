import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-library-nav',
  templateUrl: './library-nav.component.html',
  styleUrls: ['./library-nav.component.less']
})
export class LibraryNavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getUsername(): string {
    return this.authService.getUserInfo()['sub'];
  }

}
