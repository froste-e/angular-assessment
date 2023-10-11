import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  profileData?: Profile;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProfileData().subscribe({
      next: this.handleProfileData.bind(this),
      error: this.apiService.handleError.bind(this),
    });
  }

  handleProfileData(data: Profile) {
    this.profileData = data;
  }
}
