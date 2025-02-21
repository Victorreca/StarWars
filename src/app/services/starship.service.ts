import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarshipsResponse } from '../interfaces/starships-response';
import { Starship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private http: HttpClient) {}

  fetchStarships(url: string): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(url);
  }

  fetchStarshipById(id: string): Observable<Starship> {
    return this.http.get<Starship>(`https://swapi.dev/api/starships/${id}/`);
  }
}
