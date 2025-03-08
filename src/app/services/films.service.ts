import { inject, Injectable } from '@angular/core';
import { StarshipService } from './starship.service';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private starshipsServie = inject(StarshipService);
  private http = inject(HttpClient);

  fetchFilmsByStarship(starshipId: string): Observable<Film[]> {
    return this.starshipsServie.fetchStarshipById(starshipId).pipe(
      switchMap((starship) => {
        const filmUrls = starship.films || [];

        if (filmUrls.length < 1) {
          return of([]);
        } else {
          return forkJoin(filmUrls.map((url) => this.fetchFilmDetails(url)));
        }
      })
    );
  }

  fetchFilmDetails(filmUrl: string): Observable<Film> {
    return this.http.get(filmUrl).pipe(
      map((filmData: any) => {
        const id = filmUrl.split('/').filter(Boolean).pop() ?? '';

        return {
          id,
          title: filmData.title,
          episode: filmData.episode_id,
          director: filmData.director,
          imageUrl: `https://res.cloudinary.com/dwygcrj5r/image/upload/film_${id}.jpg`,
        };
      })
    );
  }
}
