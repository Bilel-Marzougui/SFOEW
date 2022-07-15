import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilProComponent } from './edit-profil-pro.component';

describe('EditProfilProComponent', () => {
  let component: EditProfilProComponent;
  let fixture: ComponentFixture<EditProfilProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
