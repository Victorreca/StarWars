import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarshipsResponse } from '../interfaces/starships-response';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  private apiUrl = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClient) {}

  fetchStarships(): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(this.apiUrl);
  }
}
