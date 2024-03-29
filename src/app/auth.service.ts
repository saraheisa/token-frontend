import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { STORAGE_KEY } from './app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.isLoggedIn()
  );

  // Observable stream of authentication state changes
  isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((response) => {
          localStorage.setItem(STORAGE_KEY, response.token);
          this.updateAuthenticationState(true);
        })
      );
  }

  logout() {
    localStorage.removeItem(STORAGE_KEY);
    this.updateAuthenticationState(false);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(STORAGE_KEY);
    return !!token;
  }

  // Method to update authentication state and emit changes
  private updateAuthenticationState(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
}
