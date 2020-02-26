import { TestBed } from '@angular/core/testing';

import { SpotifyInformationsService } from './spotify-informations.service';

describe('SpotifyInformationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyInformationsService = TestBed.get(SpotifyInformationsService);
    expect(service).toBeTruthy();
  });
});
