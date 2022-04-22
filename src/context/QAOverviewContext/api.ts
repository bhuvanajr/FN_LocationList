import sampleData from 'sampleData.json';
import { Location } from 'types/Location';

export const getQnA = () => {
  let data = sampleData;
  return data as Location[];
};
