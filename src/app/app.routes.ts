import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'starships', component: StarshipsComponent },
      { path: 'starship/:id', component: StarshipDetailComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'signup', component: LoginComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
];
