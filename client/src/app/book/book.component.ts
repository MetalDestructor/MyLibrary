import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  book: any;

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.apiService.getBook(id).subscribe(data => {
      this.book = data;
    });
  }

  delete() {
    if (confirm(`Are you sure you want to delete ${this.book.title} ?`)) {
      this.apiService.deleteBook(this.book._id).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
