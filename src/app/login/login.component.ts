import { Component } from '@angular/core';
import { APIService } from '../api.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private apiService: APIService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (!this.loginForm.get('username') || !this.loginForm.get('password'))
      return;
    console.log({ form: this.loginForm });
    this.apiService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (response) => {
          // Handle successful login, store token, navigate to other pages, etc.
        },
        (error) => {
          console.error('Login failed:', error);
          // Handle login failure, show error message, etc.
        }
      );
  }
}
