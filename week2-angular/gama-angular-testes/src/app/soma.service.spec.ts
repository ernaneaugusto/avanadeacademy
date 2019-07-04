import { TestBed } from '@angular/core/testing';

import { SomaService } from './soma.service';

describe('SomaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomaService = TestBed.get(SomaService);
    expect(service).toBeTruthy();
  });

  it('Funcao soma() deve retornar 5', () => {
    const service: SomaService = TestBed.get(SomaService);
    expect(service.soma(2, 3)).toBe(5);
  });
});
