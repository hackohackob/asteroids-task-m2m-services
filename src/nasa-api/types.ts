export enum Units {
  KM = 'kilometers',
  MILES = 'miles',
}

export interface FetchQuery {
  startDate: Date;
  endDate: Date;
  value: number;
  units: Units;
}

export interface NasaApiResult {
  links: any;
  element_count: number;
  near_earth_objects: NearEarthObject;
}

export interface NearEarthObject {
  [date: string]: Asteroid[];
}

export interface Asteroid {
  links: any;
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  is_sentry_object: boolean;
}

export interface EstimatedDiameter {
  kilometers: Diameter;
  meters: Diameter;
  miles: Diameter;
  feet: Diameter;
}

export interface Diameter {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface CloseApproachData {
  close_approach_date: Date;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: RelativeVelocity;
  miss_distance: MissDistance;
  orbiting_body: string;
}

export interface RelativeVelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

export interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}
