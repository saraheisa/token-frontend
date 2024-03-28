import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl = 'http://localhost:5204/api/token'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  getTokenData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  updateTokenData(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, {});
  }
}
