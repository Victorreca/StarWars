import { Component, inject, OnInit } from '@angular/core';
import { PilotsService } from '../../services/pilots.service';
import { Pilot } from '../../interfaces/pilot';
import { ActivatedRoute } from '@angular/router';
import { PilotsGalleryComponent } from './pilots-gallery/pilots-gallery.component';

@Component({
  selector: 'app-pilots',
  imports: [PilotsGalleryComponent],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss',
})
export class PilotsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pilotsService = inject(PilotsService);

  pilots: Pilot[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const starshipId = params.get('id')!;
      if (starshipId) {
        this.pilotsService.fetchPilotsByStarship(starshipId).subscribe({
          next: (pilots) => (this.pilots = pilots),
          error: (error) => console.error('Error fetching pilots:', error),
        });
      }
    });
  }
}
