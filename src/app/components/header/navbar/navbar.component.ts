import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  userEmail: string | null = null;
  isMenuOpen: boolean = false;

  ngOnInit(): void {
    this.authService.getUser().subscribe({
      next: (user) => {
        this.userEmail = user ? user.email : null;
      },
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logOut().subscribe(() => {
      this.userEmail = null;
      this.router.navigate(['/']);
    });
  }
}
