import { render, screen } from '@testing-library/react';
import React from 'react';
import { TextInput } from '../TextInput';

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

test('should render TextInput correctly', () => {
  const { container } = render(<TextInput name="testInput" />);
  expect(container).toMatchSnapshot();
});

test('should render TextInput with ErrorMessage correctly when rules is passed', () => {
  const { container } = render(<TextInput name="testInput" rules={{ required: true }} />);
  expect(container).toMatchSnapshot();
  const errorMessage = screen.getByText(/ErrorMessage/i);
  expect(errorMessage).toBeInTheDocument();
});
