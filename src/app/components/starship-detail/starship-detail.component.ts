import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipService } from '../../services/starship.service';
import { Starship } from '../../interfaces/starship';
import { StarshipGalleryComponent } from '../starship-gallery/starship-gallery.component';

@Component({
  selector: 'app-starship-detail',
  imports: [StarshipGalleryComponent],
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.scss',
})
export class StarshipDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  starshipService = inject(StarshipService);
  starship: Starship | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/starships']);
    } else {
      this.fetchStarship(id);
    }
  }

  fetchStarship(id: string): void {
    this.starshipService.fetchStarshipById(id).subscribe({
      next: (starship) => {
        this.starship = starship;
      },
      error: (error) => {
        console.error('Error get starship:', error);
      },
    });
  }
}
