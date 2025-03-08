import { Component, Input } from '@angular/core';
import { Film } from '../../../interfaces/film';

@Component({
  selector: 'app-films-gallery',
  imports: [],
  templateUrl: './films-gallery.component.html',
  styleUrl: './films-gallery.component.scss',
})
export class FilmsGalleryComponent {
  @Input() filmChild!: Film;
}
