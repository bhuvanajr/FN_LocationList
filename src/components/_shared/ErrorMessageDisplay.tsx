import React from 'react';

type ErrorMessageDisplayProps = {
  id: string;
  message: string;
};

export const ErrorMessageDisplay: React.FunctionComponent<ErrorMessageDisplayProps> = props => {
  return (
    <div className="invalid-feedback d-block" data-testid="ErrorMessage" id={props.id + '_errormessage'}>
      <span className="icon icon-alert" />
      {' ' + props.message}
    </div>
  );
};
