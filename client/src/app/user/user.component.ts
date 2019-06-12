import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  user: any;

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.apiService.getUser(id).subscribe(data => (this.user = data));
  }

}
