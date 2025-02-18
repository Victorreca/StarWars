import { Component, Input } from '@angular/core';
import { Starship } from '../../interfaces/starship';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-starships',
  imports: [RouterModule],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss',
})
export class StarshipsComponent {
  @Input() starshipsChild: Starship[] = [];
}
