import { Component, inject, OnInit } from '@angular/core';
import { Starship } from '../../interfaces/starship';
import { StarshipService } from '../../services/starship.service';
import { StarshipsComponent } from '../starships/starships.component';

@Component({
  selector: 'app-home',
  imports: [StarshipsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  starships: Starship[] = [];
  private starshipService = inject(StarshipService);

  ngOnInit(): void {
    this.fetchStarships();
  }

  fetchStarships(): void {
    this.starshipService.fetchStarships().subscribe({
      next: (response) => {
        this.starships = response.results.map((ship: any) => ({
          id: ship.url.split('/').filter(Boolean).pop(),
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
