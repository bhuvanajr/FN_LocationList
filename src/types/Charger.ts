export type Charger = {
  id: number;
  type: 'HPC' | 'T52' | 'T53C';
  serialNumber: string;
  status: 'CONNECTED' | 'NOT_CONNECTED' | 'REMOVED';
  lastUpdated: string;
};
