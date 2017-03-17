import React, { PropTypes } from 'react';
import { Alert, Accordion } from 'caseflow-react';
import CodeMirror from 'react-codemirror';
import { AlertCode } from '../data/code';

import { DEFAULT_CODE_MIRROR_OPTIONS } from './util/options';

const FooterExample = (props) => {
  return(
    <div>
      <h2 id="footer">Footer</h2>
      <p>All of Caseflow Apps feature a minimal footer that contains the text
        <em> “Built with ♡ by the Digital Service at the VA.”</em> and a <em>“Send Feedback”</em> link.</p>
    </div>
  )
}

export default FooterExample;