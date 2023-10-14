import { TestBed } from '@angular/core/testing';

import { ComponentInteractionsService } from './component-interactions.service';

describe('ComponentInteractionsService', () => {
  let service: ComponentInteractionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentInteractionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
