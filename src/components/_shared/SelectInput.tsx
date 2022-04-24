import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessageDisplay } from './ErrorMessageDisplay';

type Props = {
  name: string;
  id?: string;
  options: string[];
  placeholder: string;
  rules?: Object;
};

export const SelectInput = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <select
        {...register(props.name, props.rules)}
        name={props.name}
        id={props.id}
        className="form-control form-select"
      >
        <option value="">{props.placeholder}</option>
        {props.options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
      {props.rules && (
        <ErrorMessage
          errors={errors}
          name={props.name}
          render={({ message }): React.ReactNode => <ErrorMessageDisplay id={props.name} message={message} />}
        />
      )}
    </>
  );
};
