import { SelectInput, TextInput } from 'components/_shared';
import { getCurrentTimestamp, getUuid } from 'helpers/helperFunctions';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Charger } from 'types';

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (input: boolean) => void;
  onSaveCharger: (data: Charger) => void;
};

export const Modal: React.FC<Props> = ({ isModalOpen, setIsModalOpen, onSaveCharger }) => {
  const { getValues, watch, trigger } = useFormContext();
  const { type, serialNumber, status } = getValues();
  watch('type');
  watch('serialNumber');
  watch('status');

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveCharger = async () => {
    let charger: Charger;
    const result = await trigger(['type', 'serialNumber', 'status']);
    if (result) {
      charger = {
        id: getUuid(),
        type: type,
        serialNumber: serialNumber,
        status: status,
        lastUpdated: getCurrentTimestamp(),
      };
      onSaveCharger(charger);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {isModalOpen && (
        <div
          id="exampleModalCenter"
          className="modal fade show"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          style={{ paddingRight: '17px', display: 'block' }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Add Charger
                </h5>
                <button
                  type="button"
                  className="btn btn-icon"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleModalClose}
                >
                  <span aria-hidden="true">X</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="row mb-3">
                    <div className="col-lg">
                      <div className="form-group">
                        <label className="col-lg-8 col-form-label" htmlFor="type">
                          Type
                        </label>
                        <SelectInput
                          name="type"
                          placeholder="Select charger type"
                          rules={{
                            required: "'Type' is a required field",
                          }}
                          options={['HPC', 'T52', 'T53C']}
                        />
                      </div>
                    </div>
                    <div className="col-lg">
                      <div className="form-group">
                        <label className="col-lg-8 col-form-label" htmlFor="serialNumber">
                          Serial Number
                        </label>
                        <TextInput
                          className="form-control"
                          name="serialNumber"
                          placeholder="Serial Number"
                          rules={{
                            required: "'Serial Number' is a required field",
                          }}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-lg">
                      <div className="form-group">
                        <label className="col-lg-8 col-form-label" htmlFor="status">
                          Status
                        </label>
                        <SelectInput
                          name="status"
                          placeholder="Select charger status"
                          rules={{
                            required: "'Status' is a required field",
                          }}
                          options={['CONNECTED', 'NOT_CONNECTED', 'REMOVED']}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn" data-dismiss="modal" onClick={handleModalClose}>
                  Close
                </button>
                <button type="button" className="btn btn-submit" onClick={handleSaveCharger}>
                  Save charger
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
