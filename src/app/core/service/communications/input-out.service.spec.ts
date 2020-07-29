/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InputOutService } from './input-out.service';

describe('Service: InputOut', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputOutService]
    });
  });

  it('should ...', inject([InputOutService], (service: InputOutService) => {
    expect(service).toBeTruthy();
  }));
});
