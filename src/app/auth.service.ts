import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { STORAGE_KEY } from './app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((response) => {
          localStorage.setItem(STORAGE_KEY, response.token);
        })
      );
  }

  logout() {
    localStorage.removeItem(STORAGE_KEY);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(STORAGE_KEY);
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
