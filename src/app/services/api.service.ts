import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../pages/profile-page/profile.model';
import { registerUserURl, userProfileUrl } from '../environment.config';

@Injectable()
export class ApiService {
  success: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  registerUserInput() {
    this.httpClient.get<{ success: boolean }>(registerUserURl).subscribe({
      next: this.handleRegisterResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  getProfileData() {
    return this.httpClient.get<Profile>(userProfileUrl);
  }

  handleRegisterResponse(response: { success: boolean }) {
    if (response.success) {
      this.success = response.success;
      this.router.navigate(['profile']);
    }
  }

  handleError(error: HttpErrorResponse) {
    alert('An Error Occurred! ' + error.statusText);
  }
}
