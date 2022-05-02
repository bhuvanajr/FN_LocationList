import { render, screen } from '@testing-library/react';
import React from 'react';
import { LocationListGrid } from '../LocationListGrid';
import userEvent from '@testing-library/user-event';
import mockSampleData from 'sampleData.json';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('context', () => ({
  useLocationListOverviewContext: () => ({
    methods: {
      addNewLocation: (data: Location) => jest.fn(),
      deleteAllLocations: () => jest.fn(),
      deleteLocation: (data: Location) => jest.fn(),
      editLocation: (data: Location) => jest.fn(),
    },
    state: { locationList: mockSampleData, isLoading: false },
  }),
}));

test('should render LocationListGrid correctly', () => {
  const { container } = render(<LocationListGrid />);
  expect(container).toMatchSnapshot();
});

test('should call navigate to add new location route on click of Add location', () => {
  render(<LocationListGrid />);
  userEvent.click(screen.getByText('Add Location'));
  expect(mockNavigate).toHaveBeenCalledWith('/location-list/new');
});
