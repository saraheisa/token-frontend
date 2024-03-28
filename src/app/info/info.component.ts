import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-info',
  imports: [NgIf],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  tokenData: any;

  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.fetchTokenData();
  }

  fetchTokenData() {
    this.apiService.getTokenData().subscribe(
      (response) => {
        this.tokenData = response;
      },
      (error) => {
        console.error('Failed to fetch token data:', error);
      }
    );
  }
}
