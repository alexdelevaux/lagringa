import { TestBed, inject } from '@angular/core/testing';

import { ProveedoresService } from './proveedores.service';

describe('ProveedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProveedoresService]
    });
  });

  it('should be created', inject([ProveedoresService], (service: ProveedoresService) => {
    expect(service).toBeTruthy();
  }));
});
