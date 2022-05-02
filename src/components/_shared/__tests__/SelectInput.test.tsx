import { render, screen } from '@testing-library/react';
import React from 'react';
import { SelectInput } from '../SelectInput';

jest.mock('../ErrorMessageDisplay.tsx', () => ({
  ErrorMessageDisplay: () => <div>ErrorMessageDisplay</div>,
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    register: () => jest.fn(),
    formState: () => jest.fn(),
  }),
}));

jest.mock('@hookform/error-message', () => ({
  ErrorMessage: () => <div>ErrorMessage</div>,
}));

test('should render SelectInput correctly', () => {
  const { container } = render(
    <SelectInput name="mockname" placeholder="choose input" options={['option1', 'option2']} />
  );
  expect(container).toMatchSnapshot();
});

test('should render SelectInput with ErrorMessage correctly when rules are passed', () => {
  render(
    <SelectInput
      name="mockname"
      placeholder="choose input"
      options={['option1', 'option2']}
      rules={{ required: true }}
    />
  );

  const errorMessage = screen.getByText(/ErrorMessage/i);
  expect(errorMessage).toBeInTheDocument();
});
