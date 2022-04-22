import React from 'react';

export const ContainerHeader = () => {
  return (
    <div className="head-wrapper">
      <div className="branding">
        <a href="/">
          <img src="/assets/logo.png" alt="Brand logo" className="brand-image" />
        </a>
        The Location List
      </div>
    </div>
  );
};
