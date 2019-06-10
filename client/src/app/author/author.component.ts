import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.less']
})
export class AuthorComponent implements OnInit {

  authorData = {}

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  submit(){
    this.apiService.postAuthor(this.authorData);
  }

}
