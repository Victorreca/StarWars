import { Component, inject, OnInit } from '@angular/core';
import { Starship } from '../../interfaces/starship';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  starships: Starship[] = [];
  private starshipService = inject(StarshipService);

  constructor() {}

  ngOnInit(): void {
    this.fetchStarships();
  }

  fetchStarships(): void {
    this.starshipService.fetchStarships().subscribe({
      next: (response) => {
        this.starships = response.results.map((ship: any) => ({
          name: ship.name,
          model: ship.model,
        }));
      },
      error: (error) => {
        console.error('Error get ships:', error);
      },
    });
  }
}
