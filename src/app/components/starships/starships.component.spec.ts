import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipsComponent } from './starships.component';
import { StarshipService } from '../../services/starship.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('StarshipsComponent', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;
  let mockStarshipService: jasmine.SpyObj<StarshipService>;
  let mockActivatedRoute: Partial<ActivatedRoute>;

  beforeEach(async () => {
    mockStarshipService = jasmine.createSpyObj<StarshipService>(
      'StarshipService',
      ['fetchStarships']
    );
    mockStarshipService.fetchStarships.and.returnValue(
      of({ starships: [], nextPageUrl: null })
    );

    mockActivatedRoute = {
      snapshot: { queryParams: {} } as any,
    };

    await TestBed.configureTestingModule({
      imports: [StarshipsComponent],
      providers: [
        { provide: StarshipService, useValue: mockStarshipService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchStarships on init', () => {
    expect(mockStarshipService.fetchStarships).toHaveBeenCalledTimes(1);
  });

  it('should update starshipsChild when fetchStarships returns data', () => {
    component.isLoading = false;

    const mockStarships = [
      { id: '1', name: 'X-Wing', model: 'T-65B X-wing', pilots: [], films: [] },
      {
        id: '2',
        name: 'Millennium Falcon',
        model: 'YT-1300 light freighter',
        pilots: [],
        films: [],
      },
    ];

    mockStarshipService.fetchStarships.and.returnValue(
      of({ starships: mockStarships, nextPageUrl: null })
    );

    component.fetchStarships();
    fixture.detectChanges();

    expect(component.starshipsChild).toEqual(mockStarships);
  });
});
