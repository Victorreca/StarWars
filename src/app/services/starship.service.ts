import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StarshipsResponse } from '../interfaces/starships-response';
import { Starship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  urlApi: string = 'https://swapi.tech/api/starships/';
  private http = inject(HttpClient);

  fetchStarships(
    url: string = this.urlApi
  ): Observable<{ starships: Starship[]; nextPageUrl: string | null }> {
    return this.http.get<StarshipsResponse>(url).pipe(
      map((response) => ({
        starships: response.results.map((ship: any) => ({
          id: ship.url.split('/').filter(Boolean).pop(),
          name: ship.name,
          model: ship.model,
          pilots: ship.pilots,
          films: ship.films,
        })),
        nextPageUrl: response.next,
      }))
    );
  }

  fetchStarshipById(id: string): Observable<Starship> {
    return this.http.get<Starship>(`https://swapi.tech/api/starships/${id}/`);
  }
}
