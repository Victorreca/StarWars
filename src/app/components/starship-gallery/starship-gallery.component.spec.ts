import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipGalleryComponent } from './starship-gallery.component';

describe('StarshipGalleryComponent', () => {
  let component: StarshipGalleryComponent;
  let fixture: ComponentFixture<StarshipGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
