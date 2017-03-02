import React, { PropTypes } from 'react';

const Header = (props) => {
  return <nav className="cf-nav">
    <div className="usa-grid-full">
      <a href="" id="cf-logo-link">
        <h1 className="cf-logo">Caseflow</h1> <span className="cf-logo-name"></span>
      </a>
      <h2 id="page-title" className="cf-application-title">{' > ' + props.title || 'Title' }</h2>
    </div>
  </nav>
}

export default Header;