import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private loginService = inject(LoginService);
  private router = inject(Router);
  userEmail: string | null = null;
  isMenuOpen: boolean = false;

  ngOnInit(): void {
    this.loginService.getUser().subscribe({
      next: (user) => {
        this.userEmail = user ? user.email : null;
      },
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.loginService.logOut().subscribe(() => {
      this.userEmail = null;
      this.router.navigate(['/']);
    });
  }
}
