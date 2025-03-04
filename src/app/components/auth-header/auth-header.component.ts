import { Component } from '@angular/core';
import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';

@Component({
  selector: 'app-auth-header',
  imports: [AuthNavbarComponent],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss',
})
export class AuthHeaderComponent {}
