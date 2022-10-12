import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDossierComponent } from './detail-dossier.component';

describe('DetailDossierComponent', () => {
  let component: DetailDossierComponent;
  let fixture: ComponentFixture<DetailDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
