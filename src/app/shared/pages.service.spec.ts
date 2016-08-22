/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PagesService } from './pages.service';

describe('Pages Service', () => {
  beforeEachProviders(() => [PagesService]);

  it('should ...',
      inject([PagesService], (service: PagesService) => {
    expect(service).toBeTruthy();
  }));
});
