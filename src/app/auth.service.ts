import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const url = `${environment.apiUrl}/login`;
    return this.http.post(url, { username, password }).pipe(
      tap((response: any) => {
        this.token = response['token'];
      })
    );
  }

  isLoggedIn(): boolean {
    return this.token !== null;
  }

  getToken(): string | null {
    return this.token;
  }
}
