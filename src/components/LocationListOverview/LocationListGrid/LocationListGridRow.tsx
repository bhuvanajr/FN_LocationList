import { getTimeElaped } from 'helpers/helperFunctions';
import React from 'react';
import { Location } from 'types';

type Props = {
  data: Location;
};

export const LocationListGridRow: React.FC<Props> = ({ data }) => {
  return (
    <tr>
      <th scope="row" className="text-primary">
        {data.name}
      </th>
      <td>{data.location}</td>
      <td>{data.chargers.length}</td>
      <td>{data.country}</td>
      <td>{getTimeElaped(data.lastUpdated)}</td>
      <td>
        <button type="button" className="btn-icon" onClick={() => {}}>
          <div className="icon icon-edit" />
        </button>
      </td>
    </tr>
  );
};
