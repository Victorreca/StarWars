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

  ngOnInit(): void {
    this.fetchStarships();
  }

  fetchStarships(url: string = this.starshipService.urlApi): void {
    this.starshipService.fetchStarships(url).subscribe({
      next: (response) => {
        this.starshipsChild = [...this.starshipsChild, ...response.starships];
        this.nextPageUrl = response.nextPageUrl;
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
