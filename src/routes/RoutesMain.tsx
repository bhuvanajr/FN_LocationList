import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as locationListPaths from 'constants/routes';
import { LocationListGrid, NewLocationForm } from 'components';

export const RoutesMain: React.FC = () => {
  return (
    <Routes>
      <Route path={locationListPaths.locationList} element={<LocationListGrid />} />
      <Route path={locationListPaths.newLocation} element={<NewLocationForm />} />
      <Route path="/" element={<Navigate replace to={locationListPaths.locationList} />} />
      <Route path="*" element={<>Error</>} />
    </Routes>
  );
};
