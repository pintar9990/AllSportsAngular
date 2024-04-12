import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormularyComponent } from './register-formulary.component';

describe('RegisterFormularyComponent', () => {
  let component: RegisterFormularyComponent;
  let fixture: ComponentFixture<RegisterFormularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormularyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterFormularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
