import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  books: any = [];

  constructor(private apiService:ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.apiService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

}
