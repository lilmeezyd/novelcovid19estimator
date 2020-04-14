import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidEstimatorComponent } from './covid-estimator.component';

describe('CovidEstimatorComponent', () => {
  let component: CovidEstimatorComponent;
  let fixture: ComponentFixture<CovidEstimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidEstimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidEstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
