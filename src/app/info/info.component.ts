import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-info',
  imports: [NgIf, MatCardModule, MatIconModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  tokenData: any;

  constructor(private apiService: APIService) {
    this.fetchTokenData();
  }

  fetchTokenData() {
    this.apiService.getTokenData().subscribe({
      next: (response) => {
        this.tokenData = response;
      },
      error: (error) => {
        console.error('Failed to fetch token data:', error);
      },
    });
  }
}
