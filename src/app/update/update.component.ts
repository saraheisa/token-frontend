import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-update',
  imports: [MatButton],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  constructor(
    private apiService: APIService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  updateTokenData() {
    this.apiService.updateTokenData().subscribe({
      next: (response) => {
        this.snackBar.open('Token data updated successfully', 'Close');
        this.router.navigate(['/info']);
      },
      error: (error) => {
        console.error('Failed to update token data:', error);
        this.snackBar.open(
          error.message || 'Failed to update token data',
          'Close'
        );
      },
    });
  }
}
