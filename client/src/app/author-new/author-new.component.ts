import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.less']
})
export class AuthorNewComponent implements OnInit {

  authorData = {}

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  submit(){
    this.apiService.postAuthor(this.authorData);
  }

}
