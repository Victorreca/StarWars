import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotsComponent } from './pilots.component';
import { PilotsService } from '../../services/pilots.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Pilot } from '../../interfaces/pilot';

let mockPilots: Pilot[];

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;
  let mockPilotsService: jasmine.SpyObj<PilotsService>;
  let mockActivatedRoute: ActivatedRoute;
  mockPilots = [
    {
      id: '1',
      name: 'Luke Skywalker',
      gender: 'male',
      height: '172',
      birth_year: '19BBY',
      imageUrl: 'https://res.cloudinary.com/pilot_1.jpg',
    },
    {
      id: '2',
      name: 'Han Solo',
      gender: 'male',
      height: '180',
      birth_year: '29BBY',
      imageUrl: 'https://res.cloudinary.com/pilot_2.jpg',
    },
  ];

  beforeEach(async () => {
    mockPilotsService = jasmine.createSpyObj('PilotsService', [
      'fetchPilotsByStarship',
    ]);

    mockActivatedRoute = { paramMap: of({ get: () => '10' }) } as any;

    await TestBed.configureTestingModule({
      imports: [PilotsComponent],
      providers: [
        { provide: PilotsService, useValue: mockPilotsService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchPilotsByStarship with correct starshipId', () => {
    mockPilotsService.fetchPilotsByStarship.and.returnValue(of([]));

    fixture.detectChanges();

    expect(mockPilotsService.fetchPilotsByStarship).toHaveBeenCalledOnceWith(
      '10'
    );
  });

  it('should update pilots when fetchPilotsByStarship returns data', () => {
    mockPilotsService.fetchPilotsByStarship.and.returnValue(of(mockPilots));

    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    expect(component.pilots).toEqual(mockPilots);
  });

  it('should display pilots in the template when there is data', () => {
    mockPilotsService.fetchPilotsByStarship.and.returnValue(of(mockPilots));

    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    const domElement = fixture.nativeElement;
    expect(domElement.querySelector('h5').textContent).toContain(
      'Luke Skywalker'
    );
  });
});
