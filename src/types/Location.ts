import { Charger } from './Charger';

export type Location = {
  id: number; //uuid
  name: string; //locationName
  location: number; //locationNo
  chargers: Charger[];
  postalCode: string;
  lastUpdated: string;
  country: string; // ISO 3166-1 alpha-3
  city: string;
};
