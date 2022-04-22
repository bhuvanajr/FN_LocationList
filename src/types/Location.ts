import { Charger } from './Charger';

export type Location = {
  id: number;
  name: string;
  location: number;
  chargers: Charger[];
  postalCode: string;
  lastUpdated: string;
  country: string; // ISO 3166-1 alpha-3
};
