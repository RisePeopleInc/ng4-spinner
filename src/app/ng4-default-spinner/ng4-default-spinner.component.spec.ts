import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4DefaultSpinnerComponent } from './ng4-default-spinner.component';

describe('Ng4DefaultSpinnerComponent', () => {
  let component: Ng4DefaultSpinnerComponent;
  let fixture: ComponentFixture<Ng4DefaultSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng4DefaultSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4DefaultSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
