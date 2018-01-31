import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4SpinnerComponent } from './ng4-spinner.component';

describe('Ng4SpinnerComponent', () => {
  let component: Ng4SpinnerComponent;
  let fixture: ComponentFixture<Ng4SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng4SpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
