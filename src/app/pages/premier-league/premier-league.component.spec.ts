import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierLeagueComponent } from './premier-league.component';

describe('FootballLeagueComponent', () => {
  let component: PremierLeagueComponent;
  let fixture: ComponentFixture<PremierLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremierLeagueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremierLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
