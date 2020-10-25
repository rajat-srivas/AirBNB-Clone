/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleServieService } from './googleServie.service';

describe('Service: GoogleServie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleServieService]
    });
  });

  it('should ...', inject([GoogleServieService], (service: GoogleServieService) => {
    expect(service).toBeTruthy();
  }));
});
