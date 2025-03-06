import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  errorMessage: string | null = null;
  googleIcon = faGoogle;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

      this.authService.signIn(email, password).subscribe({
        next: () => {
          this.router.navigate([returnUrl]);
        },
        error: (error) => {
          console.error('Error to sign in', error);
          this.errorMessage = 'Invalid email or password. Please try again.';
        },
      });
    }
  }

  loginWithGoogle() {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.authService.signInWithGoogle().subscribe({
      next: () => {
        this.router.navigate([returnUrl]);
      },
      error: (error) => {
        console.error('Error to sign in with Google', error);
        this.errorMessage = 'Failed to sign in with Google';
      },
    });
  }
}
