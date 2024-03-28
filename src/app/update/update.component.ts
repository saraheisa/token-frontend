import { Component } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  standalone: true,
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  constructor(private apiService: APIService) {}

  updateTokenData() {
    this.apiService.updateTokenData().subscribe(
      (response) => {
        // Handle successful update
      },
      (error) => {
        console.error('Failed to update token data:', error);
        // Handle update failure
      }
    );
  }
}
