import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsGalleryComponent } from './films-gallery.component';

describe('FilmsGalleryComponent', () => {
  let component: FilmsGalleryComponent;
  let fixture: ComponentFixture<FilmsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
