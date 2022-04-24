import { TextInput } from 'components/_shared';
import { isValidCountryCode } from 'helpers/helperFunctions';
import React from 'react';

export const NewLocationInput: React.FC = () => {
  return (
    <div className="mb-3">
      <div className="row mb-3">
        <div className="col-lg">
          <div className="form-group">
            <label className="col-lg-8 col-form-label" htmlFor="locationName">
              Location Name
            </label>
            <TextInput
              className="form-control"
              name="locationName"
              placeholder="Location Name"
              rules={{
                required: "'Location Name' is a required field",
              }}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-lg">
          <div className="form-group">
            <label className="col-lg-8 col-form-label" htmlFor="locationNo">
              Location No
            </label>
            <TextInput
              className="form-control"
              name="locationNo"
              placeholder="Location Number"
              rules={{
                required: "'Location No' is a required field",
              }}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg">
          <div className="form-group">
            <label className="col-lg-8 col-form-label" htmlFor="locationNo">
              City
            </label>
            <TextInput
              className="form-control"
              name="city"
              placeholder="City"
              rules={{
                required: "'City' is a required field",
              }}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-lg">
          <div className="form-group">
            <label className="col-lg-8 col-form-label" htmlFor="locationNo">
              Postal Code
            </label>
            <TextInput
              className="form-control"
              name="postCode"
              placeholder="Postal Code"
              rules={{
                required: "'Postal Code' is a required field",
              }}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-lg">
          <div className="form-group">
            <label className="col-lg-8 col-form-label" htmlFor="locationNo">
              Country
            </label>
            <TextInput
              className="form-control"
              name="country"
              placeholder="Enter country code"
              rules={{
                required: "'Country' is a required field",
                validate: {
                  alpha3: v => isValidCountryCode(v) || 'Enter a valid country code',
                },
              }}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
