import { render } from '@testing-library/react';
import React from 'react';
import { ContainerFooter } from '../ContainerFooter';

test('should render ContainerFooter correctly', () => {
  const { container } = render(<ContainerFooter />);
  expect(container).toMatchSnapshot();
});
