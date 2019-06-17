
export class ContentModel {
  city: City;
  cnt: number;
  cod: string;
  list: List [] = [];
  message: number;
}

class City {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  timezone: number
}

class Coord {
  lat: number;
  lon: number;
}

class List {
  clouds: number;
  deg: number;
  dt: number;
  humidity: number;
  pressure: number;
  speed: number;
  temp: Temp;
}

class Temp {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
  weather: Weather;
}

class Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
