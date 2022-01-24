import { TestBed } from '@angular/core/testing';

import { FinaciamentoService } from './finaciamento.service';

describe('FinaciamentoService', () => {
  let service: FinaciamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinaciamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
