import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  registerData = {}
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  post() {
    this.apiService.registerNewUser(this.registerData);
  }

}
