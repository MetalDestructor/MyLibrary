import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  book: any;

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.apiService.getBook(id).subscribe(data => {
      this.book = data;
    });
  }
}
