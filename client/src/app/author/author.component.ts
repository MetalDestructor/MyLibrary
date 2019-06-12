import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.less']
})
export class AuthorComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  author: any;
  booksByAuthor: any = [];

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.apiService.getAuthor(id).subscribe(data => (this.author = data));
    this.apiService.getBookByAuthor(id).subscribe(data => {
      this.booksByAuthor = data;
    });
  }

  formatDate(date: Date) {
    return formatDate(date, 'dd/MM/yyyy', 'en');
  }
}
