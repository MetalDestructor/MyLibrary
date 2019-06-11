import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  registerData = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  submit() {
	this.authService.registerUser(this.registerData);
  }
}
