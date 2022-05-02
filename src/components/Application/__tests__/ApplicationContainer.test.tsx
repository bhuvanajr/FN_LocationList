import { render } from '@testing-library/react';
import React from 'react';
import { ApplicationContainer } from '../ApplicationContainer';

jest.mock('../ContainerFooter.tsx', () => ({
  ContainerFooter: () => <div>ContainerFooter</div>,
}));

jest.mock('../ContainerHeader.tsx', () => ({
  ContainerHeader: () => <div>ContainerHeader</div>,
}));

test('should render ApplicationContainer correctly', () => {
  const { container } = render(<ApplicationContainer>Test message</ApplicationContainer>);
  expect(container).toMatchSnapshot();
});
