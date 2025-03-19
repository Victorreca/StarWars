import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'starships',
        loadComponent: () =>
          import('./components/starships/starships.component').then(
            (m) => m.StarshipsComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'starship/:id',
        loadComponent: () =>
          import('./components/starship-detail/starship-detail.component').then(
            (m) => m.StarshipDetailComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signup',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
