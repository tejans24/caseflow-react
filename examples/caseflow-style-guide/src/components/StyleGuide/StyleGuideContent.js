import React from 'react';
import ModalExample from '../modal-example';
import AlertExample from '../alert-example';
import ButtonExample from '../button-example';

const StyleGuideContent = (props) => {
  return <div className="cf-app cf-push-row cf-sg-layout cf-app-segment cf-app-segment--alt">
    <div className="cf-push-left cf-sg-nav">
        <ul className="usa-sidenav-list">
          <li>
            <a href="/styleguide#">Introduction</a>
          </li>
          <li>
            <a href="#modals">Modals</a>
          </li>
          <li>
            <a href="#alerts">Alerts</a>
          </li>
          <li>
            <a href="#buttons">Buttons</a>
          </li>
        </ul>
    </div>
    <div className="cf-push-right cf-sg-content">
      <h1 id="commons">Caseflow React Style Guide</h1>
        <p>
          Caseflow Commons is home to our most up to date style guide, UI Kit, and code for Caseflow products.
          The goal is to maintain consistent styling across Caseflow applications and to keep our interface predictable and familiar to the user.
          This unified system also helps us reuse common code across our apps and increase the efficiency of the design process.
        </p>
        <p>
          <a className="usa-button"
            href="https://github.com/department-of-veterans-affairs/caseflow-commons">
            View on Github
          </a>
          <a className="usa-button usa-button-outline"
          href="https://github.com/department-of-veterans-affairs/appeals-design-research/issues/8">
          Download UI Kit</a>
        </p>
        <div className="cf-help-divider"></div>
        <ModalExample />
        <div className="cf-help-divider"></div>
        <AlertExample />
        <div className="cf-help-divider"></div>
        <ButtonExample />
    </div>
  </div>
}

export default StyleGuideContent;


