import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginData = {}
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  post() {
    this.apiService.loginUser(this.loginData);
  }
}
