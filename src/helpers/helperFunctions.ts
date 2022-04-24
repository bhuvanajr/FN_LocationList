import * as countries from 'i18n-iso-countries';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

//Generates UUID
export const getUuid = () => {
  var uuid = require('uuid');
  var id = uuid.v4();
  return id;
};

//validate country code
export const isValidCountryCode = (input: string) => {
  return countries.isValid(input);
};

export const getCurrentTimestamp = () => {
  return dayjs().toString();
};

export const getTimeElaped = input => {
  return dayjs(input).fromNow();
};
