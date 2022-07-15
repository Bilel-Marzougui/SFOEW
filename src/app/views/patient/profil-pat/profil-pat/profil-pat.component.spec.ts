import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPatComponent } from './profil-pat.component';

describe('ProfilPatComponent', () => {
  let component: ProfilPatComponent;
  let fixture: ComponentFixture<ProfilPatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
