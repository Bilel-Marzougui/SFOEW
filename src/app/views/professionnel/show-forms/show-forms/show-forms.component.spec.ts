import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormsComponent } from './show-forms.component';

describe('ShowFormsComponent', () => {
  let component: ShowFormsComponent;
  let fixture: ComponentFixture<ShowFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
