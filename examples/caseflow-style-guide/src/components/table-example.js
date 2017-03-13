import React, { PropTypes } from 'react';
import { Alert, Accordion, Table } from 'caseflow-react';
import CodeMirror from 'react-codemirror';
import { AlertCode } from '../data/code';

import { DEFAULT_CODE_MIRROR_OPTIONS } from './util/options';

const TABLE_HEADERS = ['User', 'Date', 'Application', 'Feedback'];

const AlertExample = (props) => {
  function buildRow(values, index){
    return [
      values.user,
      values.date,
      values.application,
      values.feedback
    ]
  }
  return(
    <div>
      <h2 id="alerts">Tables</h2>
      <div className="cf-help-divider"></div>
      <Table
        headers={TABLE_HEADERS}
        buildRowValues={buildRow}
        values={[{
          user: 'Joe.Snuffy@va.gov',
          date: '10/24/16',
          application: 'Certification',
          feedback: 'Core competencies drill down cloud strategy re- inventing the wheel we just need to put these last issues to bed, so who’s responsible for the ask for this request?, high-level.'
        },
        {
          user: 'Abraham.Lincoln@va.gov',
          date: '10/24/16',
          application: 'Certification',
          feedback: 'To be inspired is to become creative, innovative and energized we want this philosophy to trickle down'
        }]}
      />
      <Accordion
        title="Code (React/ES6)"
        content={<CodeMirror value={AlertCode} options={DEFAULT_CODE_MIRROR_OPTIONS} />}
      />
    </div>
  )
}

export default AlertExample;