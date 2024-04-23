import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueArtDisplayComponent } from './league-art-display.component';

describe('LeagueArtDisplayComponent', () => {
  let component: LeagueArtDisplayComponent;
  let fixture: ComponentFixture<LeagueArtDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueArtDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeagueArtDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
