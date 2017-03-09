import React, { PropTypes } from 'react';
import { Alert, Accordion } from 'caseflow-react';
import CodeMirror from 'react-codemirror';
import { AlertCode } from '../data/code';

import { DEFAULT_CODE_MIRROR_OPTIONS } from './util/options';

const AlertExample = (props) => {
  return(
    <div>
      <h2 id="alerts">Alerts</h2>
      <Alert type="success" title="Success status"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
      <Alert type="warning" title="Warning status"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
      <Alert type="error" title="Error status"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
      <Alert type="info" title="Informative status"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
      <Alert type="info" title="Informative status"
        message="Multi line. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu-
        santium doloremque laudantium, totam zrem. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt."/>
      <div className="cf-help-divider"></div>
      <Accordion
        title="Code (React/ES6)"
        content={<CodeMirror value={AlertCode} options={DEFAULT_CODE_MIRROR_OPTIONS} />}
      />
    </div>
  )
}

export default AlertExample;