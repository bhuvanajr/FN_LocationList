import React from 'react';
import { ContainerFooter } from './ContainerFooter';
import { ContainerHeader } from './ContainerHeader';

export const ApplicationContainer: React.FC = props => {
  return (
    <div className="application-container">
      <header>
        <ContainerHeader />
      </header>
      <main className="container mx-auto">{props.children}</main>
      <footer>
        <ContainerFooter />
      </footer>
    </div>
  );
};
