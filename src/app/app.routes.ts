import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starship/:id', component: StarshipDetailComponent },
];
