import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  userEmail: string | null = null;
  isMenuOpen: boolean = false;
  userIcon = faUser;
  logoAuth = '../assets/img/logo-sw.png';

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
