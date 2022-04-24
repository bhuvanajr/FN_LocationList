import { render } from '@testing-library/react';
import React from 'react';
import { ErrorMessageDisplay } from '../ErrorMessageDisplay';

test('should render ErrorMessageDisplay correctly', () => {
  const { container } = render(<ErrorMessageDisplay id="testId" message="Test error message" />);
  expect(container).toMatchSnapshot();
});
