import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviewFormDoctorComponent } from './priview-form-doctor.component';

describe('PriviewFormDoctorComponent', () => {
  let component: PriviewFormDoctorComponent;
  let fixture: ComponentFixture<PriviewFormDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriviewFormDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriviewFormDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
