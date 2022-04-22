import React from 'react';

export const ContainerFooter: React.FC = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-sm-auto">
          <ul className="nav flex-column flex-sm-row">
            <li className="nav-item">
              <a className="nav-link" href="#" target="_blank" rel="noreferrer">
                Privacy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" target="_blank" rel="noreferrer">
                Cookies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" target="_blank" rel="noreferrer">
                <div data-label="footer.copyright">© Location List App</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
