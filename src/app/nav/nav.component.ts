import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

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
export class NavComponent implements OnDestroy {
  isLoggedIn = false;
  currentRoute: string;
  private authSubscription: Subscription;

  routes = [
    { path: '/info', label: 'Info', icon: 'info' },
    {
      path: '/update',
      label: 'Update',
      isLoggedInRequired: true,
      icon: 'sync',
    },
    {
      path: '/login',
      label: 'Login',
      isLoggedInRequired: false,
      icon: 'fingerprint',
    },
  ];

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn();

    this.currentRoute = this.router.url;

    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });

    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => {
        this.isLoggedIn = isAuthenticated;
      }
    );
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  isActiveRoute(route: string): boolean {
    return this.currentRoute === route;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
