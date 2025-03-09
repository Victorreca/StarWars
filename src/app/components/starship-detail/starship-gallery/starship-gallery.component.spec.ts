import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipGalleryComponent } from './starship-gallery.component';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'a[routerLink]',
  standalone: true,
  template: '<ng-content></ng-content>',
})
class MockRouterLink {
  @Input() routerLink: any;
}

describe('StarshipGalleryComponent', () => {
  let component: StarshipGalleryComponent;
  let fixture: ComponentFixture<StarshipGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipGalleryComponent, MockRouterLink],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: new Map([['id', '123']]) } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get the starshipId from route params', () => {
    expect(component.starshipId).toBe('123');
  });

  it('should generate correct imageUrl based on starshipId', () => {
    expect(component.imageUrl).toBe(
      'https://res.cloudinary.com/dwygcrj5r/image/upload/v1739873550/123.jpg'
    );
  });

  it('should render the correct image in the template', () => {
    const compiled = fixture.nativeElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.src).toContain(
      'https://res.cloudinary.com/dwygcrj5r/image/upload/v1739873550/123.jpg'
    );
  });

  it('should render a fallback image if no id is found', async () => {
    component.starshipId = null;
    component.imageUrl = null;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const img = compiled.querySelector('img');

    expect(img.src).toContain(
      'https://res.cloudinary.com/dwygcrj5r/image/upload/v1739873550/1.jpg'
    );
  });
});
