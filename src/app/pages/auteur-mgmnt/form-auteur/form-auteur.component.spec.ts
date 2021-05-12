import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuteurComponent } from './form-auteur.component';

describe('FormAuteurComponent', () => {
  let component: FormAuteurComponent;
  let fixture: ComponentFixture<FormAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
