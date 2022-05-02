import React from 'react';
import { LocationListGridBody } from './LocationListGridBody';
import { LocationListGridHeader } from './LocationListGridHeader';
import { useNavigate } from 'react-router-dom';
import * as locationListPaths from 'constants/routes';

export const LocationListGrid: React.FC = () => {
  const navigate = useNavigate();

  const handleAddLocation = () => {
    navigate(locationListPaths.newLocation);
  };

  return (
    <>
      <div className="title-block my-3">
        <h2 className="mx-3 my-5">Locations</h2>
      </div>
      <div>
        <div className="row mb-3">
          <div className="col text-right" style={{ minHeight: '40px' }}>
            <button type="submit" className="btn btn-submit d-inline-flex" onClick={handleAddLocation}>
              <span className="icon icon-add" />
              <span className="px-1">Add Location</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container-lg rounded mb-10 ">
        <div className="bg-white table-responsive rounded">
          <table className="table mb-0">
            <LocationListGridHeader />
            <LocationListGridBody />
          </table>
        </div>
      </div>
    </>
  );
};
