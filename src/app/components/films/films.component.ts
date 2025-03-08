import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../interfaces/film';
import { FilmsGalleryComponent } from './films-gallery/films-gallery.component';

@Component({
  selector: 'app-films',
  imports: [FilmsGalleryComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
})
export class FilmsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private filmsService = inject(FilmsService);

  films: Film[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const starshipId = params.get('id')!;
      if (starshipId) {
        this.filmsService.fetchFilmsByStarship(starshipId).subscribe({
          next: (films) => (this.films = films),
          error: (error) => console.error('Error fetching films:', error),
        });
      }
    });
  }
}
