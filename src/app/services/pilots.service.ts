import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StarshipService } from './starship.service';
import { Pilot } from '../interfaces/pilot';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PilotsService {
  private starshipsService = inject(StarshipService);
  private http = inject(HttpClient);

  fetchPilotsByStarship(starshipId: string): Observable<Pilot[]> {
    return this.starshipsService.fetchStarshipById(starshipId).pipe(
      switchMap((starship) => {
        const pilotUrls = starship.pilots || [];

        if (pilotUrls.length < 1) {
          return of([]);
        } else {
          return forkJoin(pilotUrls.map((url) => this.fetchPilotsDetails(url)));
        }
      })
    );
  }

  fetchPilotsDetails(pilotUrl: string): Observable<Pilot> {
    return this.http.get(pilotUrl).pipe(
      map((pilotData: any) => {
        const id = pilotUrl.split('/').filter(Boolean).pop() ?? '';

        return {
          id,
          name: pilotData.name,
          gender: pilotData.gender,
          height: pilotData.height,
          birth_year: pilotData.birth_year,
          imageUrl: `https://res.cloudinary.com/dwygcrj5r/image/upload/pilot_${id}.jpg`,
        };
      })
    );
  }
}
