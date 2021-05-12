import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAuteurComponent } from './detail-auteur.component';

describe('DetailAuteurComponent', () => {
  let component: DetailAuteurComponent;
  let fixture: ComponentFixture<DetailAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAuteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
