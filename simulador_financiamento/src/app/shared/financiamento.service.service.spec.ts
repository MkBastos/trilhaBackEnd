import { TestBed } from '@angular/core/testing';

import { Financiamento.ServiceService } from './financiamento.service.service';

describe('Financiamento.ServiceService', () => {
  let service: Financiamento.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Financiamento.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
