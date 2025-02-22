import { Component, HostListener, inject, OnInit } from '@angular/core';
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
  nextStarshipsPageUrl: string | null = null;
  isLoading: boolean = false;
  private starshipService = inject(StarshipService);

  ngOnInit(): void {
    this.fetchStarships();
  }

  fetchStarships(url: string = this.starshipService.urlApi): void {
    if (this.isLoading) return;
    this.isLoading = true;
    this.starshipService.fetchStarships(url).subscribe({
      next: (response) => {
        this.updateStarships(response.starships);
        this.updateNextPageUrl(response.nextPageUrl);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching ships:', error);
        this.isLoading = false;
      },
    });
  }

  updateStarships(newStarships: Starship[]): void {
    this.starshipsChild = [...this.starshipsChild, ...newStarships];
  }

  updateNextPageUrl(nextPage: string | null): void {
    this.nextStarshipsPageUrl = nextPage;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      this.nextStarshipsPageUrl &&
      !this.isLoading
    ) {
      this.fetchStarships(this.nextStarshipsPageUrl);
    }
  }
}
