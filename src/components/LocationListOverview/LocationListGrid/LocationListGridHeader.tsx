import React from 'react';

export const LocationListGridHeader: React.FC = () => {
  return (
    <thead className="table-light">
      <tr>
        <th scope="col">Location</th>
        <th scope="col">Location No</th>
        <th scope="col">Chargers</th>
        <th scope="col">Country</th>
        <th scope="col">Last updated</th>
        <th scope="col"></th>
      </tr>
    </thead>
  );
};
