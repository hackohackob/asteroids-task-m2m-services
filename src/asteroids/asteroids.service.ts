import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { NasaApiService } from 'src/nasa-api/nasa-api.service';

@Injectable()
export class AsteroidsService {
  constructor(private nasaApiService: NasaApiService) {}

  async getAsteroids(fetchQuery) {
    const result = this.nasaApiService.fetch(fetchQuery);
    const data = (await firstValueFrom(result)).data;
    const asteroids = Object.values(data.near_earth_objects).flat();

    return asteroids.filter((asteroid) => {
      // return only asteroids that have a close approach date that is between the start and end date and have a miss distance that is less than the value
      const closeApproachDate = new Date(
        asteroid.close_approach_data[0].close_approach_date_full,
      );
      const startDate = fetchQuery.startDate;
      const endDate = fetchQuery.endDate;
      const missDistance = parseFloat(
        asteroid.close_approach_data[0].miss_distance[fetchQuery.units], // use the units from the query
      );

      return (
        closeApproachDate >= startDate &&
        closeApproachDate <= endDate &&
        missDistance <= fetchQuery.value
      );
    });
  }
}
