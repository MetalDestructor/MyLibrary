import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  profile: any;

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.apiService.getProfile(id).subscribe(data => this.profile = data);
  }
}
