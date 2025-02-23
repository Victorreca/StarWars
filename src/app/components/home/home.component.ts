import { Component } from '@angular/core';
import { IntroHomeComponent } from '../intro-home/intro-home.component';
@Component({
  selector: 'app-home',
  imports: [IntroHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
