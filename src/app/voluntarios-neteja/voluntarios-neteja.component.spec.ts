import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariosNetejaComponent } from './voluntarios-neteja.component';

describe('VoluntariosNetejaComponent', () => {
  let component: VoluntariosNetejaComponent;
  let fixture: ComponentFixture<VoluntariosNetejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluntariosNetejaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluntariosNetejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
