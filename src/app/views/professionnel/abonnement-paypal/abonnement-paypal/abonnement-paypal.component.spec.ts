import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementPaypalComponent } from './abonnement-paypal.component';

describe('AbonnementPaypalComponent', () => {
  let component: AbonnementPaypalComponent;
  let fixture: ComponentFixture<AbonnementPaypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonnementPaypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
