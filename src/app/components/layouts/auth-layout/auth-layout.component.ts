import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthHeaderComponent } from '../../auth-header/auth-header.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterModule, AuthHeaderComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {}
