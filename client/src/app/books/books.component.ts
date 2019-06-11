import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {


  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getBooks();
  }

}
