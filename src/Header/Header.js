import React, { PropTypes } from 'react';



const Header = (props) => {

  let {
    logoLink,
    logoImg,
    logoName,
    title
  } = props;

  function logoStyle(logoImg) {
    return {
      backgroundImage: 'url(' + logoImg + ')'
    }
  }

  const getLogoStyle = (logoImg) => {
    return logoImg ? logoStyle(logoImg) : {}
  }

  let titleDiv = title ?
    <h2 id="page-title" className="cf-application-title">{' > ' + title || 'Title' }</h2> :
    '';

  return <nav className="cf-nav">
    <div className="usa-grid-full">
      <a href={logoLink ? logoLink : ""} id="cf-logo-link">
        <h1 className="cf-logo">
          <span style={getLogoStyle(logoImg)} className={logoImg ? 'cf-logo-image' : ''} />
          Caseflow
        </h1>
        <span className="cf-logo-name">{logoName}</span>
      </a>
      {titleDiv}
    </div>
  </nav>
}

export default Header;