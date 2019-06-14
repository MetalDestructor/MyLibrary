import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.less']
})
export class GenresComponent implements OnInit {
  genres: any = [];
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getGenres().subscribe(data => {
      this.genres = data;
    });
  }
}
