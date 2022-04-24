import { render } from '@testing-library/react';
import React from 'react';
import { ContainerHeader } from '../ContainerHeader';

test('should render ContainerHeader correctly', () => {
  const { container } = render(<ContainerHeader />);
  expect(container).toMatchSnapshot();
});
