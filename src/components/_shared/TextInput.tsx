import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessageDisplay } from './ErrorMessageDisplay';

type Props = {
  rules?: Object;
  name: string;
  className?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextInput = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input {...register(props.name, props.rules)} {...props} className={props.className} />
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
