import { getTimeElaped } from 'helpers/helperFunctions';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Charger } from 'types';
import { Modal } from './Modal';

type Props = {
  setChargers: (input: Charger[]) => void;
};

export const NewChargerInput: React.FC<Props> = props => {
  const [chargers, setChargers] = useState<Charger[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { resetField } = useFormContext();

  const handleAddCharger = () => {
    resetField('type');
    resetField('serialNumber');
    resetField('status');
    setIsModalOpen(true);
  };

  const handleSaveCharger = (newCharger: Charger) => {
    if (chargers) setChargers(prevState => [...prevState!, newCharger]);
    else setChargers([newCharger]);
  };

  useEffect(() => {
    if (chargers) props.setChargers(chargers);
  }, [chargers, props]);

  return (
    <>
      <div className="row">
        <div className="col">
          <h4>Chargers</h4>
        </div>
        <div className="col text-right">
          <button
            type="button"
            className="btn btn-submit d-inline-flex"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleAddCharger}
          >
            <span className="icon icon-add"></span>
            <span className="px-1">Add Charger</span>
          </button>
        </div>
      </div>
      <div className="bg-white table-responsive rounded">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Type</th>
              <th scope="col">Serial Number</th>
              <th scope="col">Status</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {chargers !== undefined ? (
              chargers.map(charger => (
                <tr key={charger.id}>
                  <td>{charger.id}</td>
                  <td>{charger.type}</td>
                  <td>{charger.serialNumber}</td>
                  <td>{charger.status}</td>
                  <td>{getTimeElaped(charger.lastUpdated)}</td>
                  <td></td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center" colSpan={6}>
                  No charger has been added to this location yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onSaveCharger={handleSaveCharger} />
    </>
  );
};
