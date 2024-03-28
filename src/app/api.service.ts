import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { STORAGE_KEY } from './app.constants';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl + '/token';
  }

  getTokenData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  updateTokenData(): Observable<any> {
    const token = localStorage.getItem(STORAGE_KEY);
    if (token) {
      return this.http.post<any>(
        `${this.apiUrl}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    }
    return throwError(() => new Error('Not logged in'));
  }
}
