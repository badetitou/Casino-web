import { TestBed } from '@angular/core/testing';

import { ModelDataTransmissionService } from './model-data-transmission.service';

describe('ModelDataTransmissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelDataTransmissionService = TestBed.get(ModelDataTransmissionService);
    expect(service).toBeTruthy();
  });
});
