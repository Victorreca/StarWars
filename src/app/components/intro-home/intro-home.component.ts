import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro-home',
  imports: [RouterLink],
  templateUrl: './intro-home.component.html',
  styleUrl: './intro-home.component.scss',
})
export class IntroHomeComponent {
  starWarsIntroImg = 'assets/img/star-wars-intro.png';
  titleStarWarsIntro = 'Episode V';
  contentStarWarsIntro = `It is a dark time for the
        Rebellion. Although the Death
        Star has been destroyed,
        Imperial troops have driven the
        Rebel forces from their hidden
        base and pursued them across
        the galaxy.<br><br>

        Evading the dreaded Imperial
        Starfleet, a group of freedom
        fighters led by Luke Skywalker
        has established a new secret
        base on the remote ice world
        of Hoth.<br><br>

        The evil lord Darth Vader,
        obsessed with finding young
        Skywalker, has dispatched
        thousands of remote probes into
        the far reaches of space.`;
}
