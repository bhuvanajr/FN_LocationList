import React from 'react';
import { LocationListOverviewProvider } from 'context';
import { LocationListGridBody } from './LocationListGridBody';
import { LocationListGridHeader } from './LocationListGridHeader';

export const LocationListGrid: React.FC = () => {
  return (
    <LocationListOverviewProvider>
      <div className="title-block mb-3">
        <h2 className="mx-3">Locations</h2>
      </div>
      <div className="py-6 px-10">
        <div className="row text-right">
          <div className="col text-right">
            <button type="submit" className="btn btn-primary btn-submit d-inline-flex">
              <span className="icon icon-add" />
              <span className="px-1">Add Location</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container-lg rounded mb-10 ">
        <div className="table-responsive rounded">
          <table className="table mb-0">
            <LocationListGridHeader />
            <LocationListGridBody />
          </table>
        </div>
      </div>
    </LocationListOverviewProvider>
  );
};
