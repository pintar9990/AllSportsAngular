import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLogoDisplayComponent } from './team-logo-display.component';

describe('TeamLogoDisplayComponent', () => {
  let component: TeamLogoDisplayComponent;
  let fixture: ComponentFixture<TeamLogoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLogoDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamLogoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
