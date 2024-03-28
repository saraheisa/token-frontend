import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isLoggedIn = false;
  currentRoute: string;

  routes = [
    { path: '/info', label: 'Info' },
    { path: '/update', label: 'Update', isLoggedInRequired: true },
    { path: '/login', label: 'Login', isLoggedInRequired: false },
  ];

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn();

    this.currentRoute = this.router.url;

    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isActiveRoute(route: string): boolean {
    // Check if the provided route matches the current route
    return this.currentRoute === route;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
