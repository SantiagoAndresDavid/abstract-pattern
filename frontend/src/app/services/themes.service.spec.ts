import { TestBed } from '@angular/core/testing';

import { ThemesService } from '../components/themes/themes.service';

describe('ThemesService', () => {
  let service: ThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
