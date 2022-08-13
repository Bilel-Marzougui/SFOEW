import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProfessionnelComponent } from './details-professionnel.component';

describe('DetailsProfessionnelComponent', () => {
  let component: DetailsProfessionnelComponent;
  let fixture: ComponentFixture<DetailsProfessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProfessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
