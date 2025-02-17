export interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  capital: string;
  region: string;
  cca2: string;
}

export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}
