import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as locationListPaths from 'constants/routes';
import { LocationListGrid } from 'components';

export const RoutesMain: React.FC = () => {
  return (
    <Routes>
      <Route path={locationListPaths.locationList} element={<LocationListGrid />} />
      <Route path="/" element={<Navigate replace to={locationListPaths.locationList} />} />
      <Route path="*" element={<>Error</>} />
    </Routes>
  );
};
