import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { FetchQuery, NasaApiResult } from './types';

@Injectable()
export class NasaApiService {
  private BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed';
  private API_KEY = 'RoLTTYvxd5Fos466PeYCovhqnCgdswLdECyfNSfq';

  constructor(private readonly httpService: HttpService) {}

  fetch(query: FetchQuery) {
    const startDate = query.startDate.toISOString().split('T')[0]; // we have to supply the date in the format YYYY-MM-DD
    const endDate = query.endDate.toISOString().split('T')[0];
    const url = `${this.BASE_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${this.API_KEY}`;

    return this.httpService.get<NasaApiResult>(url);
  }
}
