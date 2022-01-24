import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAprovadoComponent } from './tela-aprovado.component';

describe('TelaAprovadoComponent', () => {
  let component: TelaAprovadoComponent;
  let fixture: ComponentFixture<TelaAprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaAprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
