import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilProComponent } from './profil-pro.component';

describe('ProfilProComponent', () => {
  let component: ProfilProComponent;
  let fixture: ComponentFixture<ProfilProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
