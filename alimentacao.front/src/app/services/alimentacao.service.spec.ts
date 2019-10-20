import { TestBed } from '@angular/core/testing';

import { AlimentacaoService } from './alimentacao.service';

describe('AlimentacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlimentacaoService = TestBed.get(AlimentacaoService);
    expect(service).toBeTruthy();
  });
});
