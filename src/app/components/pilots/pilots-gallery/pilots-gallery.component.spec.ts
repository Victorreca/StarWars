import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotsGalleryComponent } from './pilots-gallery.component';

describe('PilotsGalleryComponent', () => {
  let component: PilotsGalleryComponent;
  let fixture: ComponentFixture<PilotsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotsGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
