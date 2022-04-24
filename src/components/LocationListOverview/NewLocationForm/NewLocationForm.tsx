import { useLocationListOverviewContext } from 'context';
import { getCurrentTimestamp, getUuid } from 'helpers/helperFunctions';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Charger, Location } from 'types';
import { NewChargerInput } from './NewChargerInput';
import { NewLocationInput } from './NewLocationInput';
import * as locationListPaths from 'constants/routes';

export const NewLocationForm = () => {
  const formMethods = useForm();
  const [chargers, setChargers] = useState<Charger[]>();
  const navigate = useNavigate();

  const {
    methods: { addNewLocation },
  } = useLocationListOverviewContext();

  const handleSave = async data => {
    let newLocation: Location;
    newLocation = {
      id: getUuid(),
      chargers: chargers!,
      country: data.country,
      location: data.locationNo,
      name: data.locationName,
      postalCode: data.postCode,
      city: data.city,
      lastUpdated: getCurrentTimestamp(),
    };
    await addNewLocation(newLocation);
    navigate(locationListPaths.locationList);
  };

  return (
    <div>
      <div className="m-4">
        <h2>Add New Location</h2>
      </div>
      <div className="bg-white border rounded shadow-sm p-5 mb-5">
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(handleSave)}>
            <NewLocationInput />
            <NewChargerInput setChargers={setChargers} />
            <button
              type="submit"
              className="btn btn-submit d-inline-flex"
              disabled={chargers === undefined || chargers?.length <= 0}
            >
              <span className="icon icon-save" />
              <span className="px-1">Save Location</span>
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
