import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.less']
})
export class AuthorComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute, private authService:AuthService, private router:Router) {}

  author: any;
  booksByAuthor: any = [];

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.apiService.getAuthor(id).subscribe(data => (this.author = data));
    this.apiService.getBookByAuthor(id).subscribe(data => {
      this.booksByAuthor = data;
    });
  }

  delete(){
    console.log(this.author);
    this.apiService.deleteAuthor(this.author._id).subscribe(() => {
      this.router.navigate(['/authors']);
    });
  }
}
