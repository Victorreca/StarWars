import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  errorMessage: string | null = null;

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  registerForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.registerForm.valid) {
      const { firstName, lastName, email, password } = this.registerForm.value;

      this.authService.signUp(firstName, lastName, email, password).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error to sign up', error);
          if (error.code === 'auth/email-already-in-use') {
            this.errorMessage = 'This email is already in use. Please log in.';
          } else if (error.code === 'auth/weak-password') {
            this.errorMessage = 'Password should be at least 6 characters.';
          } else {
            this.errorMessage = 'Registration failed. Please try again.';
          }
        },
      });
    }
  }
}
