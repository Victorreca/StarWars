import { Component } from '@angular/core';

import { StarshipsComponent } from '../starships/starships.component';
import { Starship } from '../../interfaces/starship';

@Component({
  selector: 'app-home',
  imports: [StarshipsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
