import { Component, Input } from '@angular/core';
import { Starship } from '../../interfaces/starship';

@Component({
  selector: 'app-starships',
  imports: [],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss',
})
export class StarshipsComponent {
  @Input() starshipsChild: Starship[] = [];
}
