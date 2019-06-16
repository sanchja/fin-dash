import { TestBed } from '@angular/core/testing';

import { RegresService } from './regres.service';

describe('RegresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegresService = TestBed.get(RegresService);
    expect(service).toBeTruthy();
  });
});
