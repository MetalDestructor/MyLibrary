import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getGenres();
  }
}
