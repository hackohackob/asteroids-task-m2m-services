import { Controller, Get, Query } from '@nestjs/common';
import { AsteroidsService } from './asteroids/asteroids.service';
import { FetchQuery, Units } from './nasa-api/types';

@Controller()
export class AppController {
  constructor(private asteroidsService: AsteroidsService) {}

  @Get() // will use GET request with query params instead of POST with JSON body, because GET requests are cached and are the proper method to use when fetching data
  async getAsteroids(@Query() query) {
    let asteroids;
    const fetchQuery: FetchQuery = {
      startDate: new Date(query.startDate), // convert string to Date object so we can use more date types and compare dates more easily
      endDate: new Date(query.endDate),
      value: query.value,
      units: query.units || Units.KM,
    };

    try {
      asteroids = await this.asteroidsService.getAsteroids(fetchQuery);
    } catch (error) {
      return {
        error: error.message, // in real code we would want to return different error messages depending on the error, not just passing the error from NestJS.
        hasError: true,
      };
    }

    return {
      asteroids: asteroids.filter((asteroid) => {
        // return only the names of the asteroids
        return asteroid.name;
      }),
      // hasError: false, // uncomment this line if you want to return a boolean that indicates whether or not there was an error
      // count: asteroids.length, // uncomment this line if you want to return the count of asteroids
    };
  }
}
