import { Component, Input } from '@angular/core';
import { Pilot } from '../../../interfaces/pilot';

@Component({
  selector: 'app-pilots-gallery',
  imports: [],
  templateUrl: './pilots-gallery.component.html',
  styleUrl: './pilots-gallery.component.scss',
})
export class PilotsGalleryComponent {
  @Input() pilotChild!: Pilot;
}
