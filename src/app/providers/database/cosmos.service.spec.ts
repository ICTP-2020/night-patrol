import { TestBed } from '@angular/core/testing';

import { CosmosService } from './cosmos.service';

describe('CosmosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CosmosService = TestBed.get(CosmosService);
    expect(service).toBeTruthy();
  });
});
