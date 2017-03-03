import React, { PropTypes } from 'react';
import { Alert } from 'caseflow_react';

const AlertExample = (props) => {
  return(
    <div>
      <h2 id="alerts">Alerts</h2>
      <p>Modals are 490 pixels in width with 30px padding around the border and
        contain the following: a title, explanation text, a divider,
        and action buttons. There are modal-specific classes that must be included
        in your modal (see below code snippets).</p>
      <Alert type="error" title="error" message="This is an error"/>
      <Alert type="warning" title="warning" message="This is a warning"/>
      <Alert type="info" title="info" message="This is some info"/>
      <Alert type="success" title="success" message="It's successful!"/>
    </div>
  )
}

export default AlertExample;