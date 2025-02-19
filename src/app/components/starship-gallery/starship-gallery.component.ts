import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship-gallery',
  imports: [],
  templateUrl: './starship-gallery.component.html',
  styleUrl: './starship-gallery.component.scss',
})
export class StarshipGalleryComponent implements OnInit {
  imageUrl: string | null = null;
  starshipId: string | null = null;
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.starshipId = this.route.snapshot.paramMap.get('id');
    if (this.starshipId) {
      this.imageUrl = this.generateImageUrl(this.starshipId);
    }
  }

  generateImageUrl(id: string): string {
    return `https://res.cloudinary.com/dwygcrj5r/image/upload/v1739873550/${id}.jpg`;
  }
}
