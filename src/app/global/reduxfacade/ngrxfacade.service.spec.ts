import { TestBed } from '@angular/core/testing';

import { NgrxfacadeService } from './ngrxfacade.service';

describe('NgrxfacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgrxfacadeService = TestBed.get(NgrxfacadeService);
    expect(service).toBeTruthy();
  });
});
