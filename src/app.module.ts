import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NasaApiService } from './nasa-api/nasa-api.service';
import { AsteroidsService } from './asteroids/asteroids.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [NasaApiService, AsteroidsService],
})
export class AppModule {}
