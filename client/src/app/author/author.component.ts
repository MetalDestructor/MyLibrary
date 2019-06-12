import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.less']
})
export class AuthorComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  author: any;

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.apiService.getAuthor(id).subscribe(data => this.author = data);
  }

  formatDate(date:Date){
    return formatDate(date, 'dd/MM/yyyy', 'en');
  }
}
