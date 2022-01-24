import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaReprovadoComponent } from './tela-reprovado.component';

describe('TelaReprovadoComponent', () => {
  let component: TelaReprovadoComponent;
  let fixture: ComponentFixture<TelaReprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaReprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
