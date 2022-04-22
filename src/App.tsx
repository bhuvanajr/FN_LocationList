import React from 'react';
import { ApplicationContainer } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { RoutesMain } from 'routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ApplicationContainer>
        <RoutesMain />
      </ApplicationContainer>
    </BrowserRouter>
  );
};

export default App;
