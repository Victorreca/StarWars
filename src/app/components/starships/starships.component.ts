import { Component, inject, OnInit } from '@angular/core';
import { Starship } from '../../interfaces/starship';
import { RouterModule } from '@angular/router';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-starships',
  imports: [RouterModule],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss',
})
export class StarshipsComponent implements OnInit {
  starshipsChild: Starship[] = [];
  nextPageUrl: string | null = null;
  private starshipService = inject(StarshipService);
  urlApi: string = 'https://swapi.dev/api/starships/';

  ngOnInit(): void {
    this.fetchStarships();
  }

  fetchStarships(url: string = this.urlApi): void {
    this.starshipService.fetchStarships(url).subscribe({
      next: (response) => {
        this.starshipsChild = [
          ...this.starshipsChild,
          ...response.results.map((ship: any) => ({
            id: ship.url.split('/').filter(Boolean).pop(),
            name: ship.name,
            model: ship.model,
          })),
        ];
        this.nextPageUrl = response.next;
      },
      error: (error) => {
        console.error('Error fetching ships:', error);
      },
    });
  }
  loadMore(): void {
    if (this.nextPageUrl) {
      this.fetchStarships(this.nextPageUrl);
    }
  }
}
