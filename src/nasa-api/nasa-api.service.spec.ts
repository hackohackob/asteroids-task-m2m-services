import { Test, TestingModule } from '@nestjs/testing';
import { NasaApiService } from './nasa-api.service';

describe('NasaApiService', () => {
  let service: NasaApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NasaApiService],
    }).compile();

    service = module.get<NasaApiService>(NasaApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
