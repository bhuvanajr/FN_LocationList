import React from 'react';
import { ApplicationContainer } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { RoutesMain } from 'routes';
import { LocationListOverviewProvider } from 'context';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ApplicationContainer>
        <LocationListOverviewProvider>
          <RoutesMain />
        </LocationListOverviewProvider>
      </ApplicationContainer>
    </BrowserRouter>
  );
};

export default App;
