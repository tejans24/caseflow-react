import React, { PropTypes } from 'react';
import { Table, Accordion } from 'caseflow-react';
import CodeMirror from 'react-codemirror';
import { TableCode } from '../../data/code';

import { DEFAULT_CODE_MIRROR_OPTIONS } from '../util/options';

const TABLE_ONE_HEADERS = ['User', 'Date', 'Application', 'Feedback'];

const TableOneExample = (props) => {
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
      <Table
        headers={TABLE_ONE_HEADERS}
        buildRowValues={buildRow}
        values={[{
          user: <a href="mailto:Joe.Snuffy@va.gov">Joe.Snuffy@va.gov</a>,
          date: '10/24/16',
          application: 'Certification',
          feedback: 'Core competencies drill down cloud strategy re- inventing the wheel we just need to put these last issues to bed, so who’s responsible for the ask for this request?, high-level.'
        },
        {
          user: <a href="mailto:Abraham.Lincoln@va.gov">Abraham.Lincoln@va.gov</a>,
          date: '10/24/16',
          application: 'Certification',
          feedback: 'To be inspired is to become creative, innovative and energized we want this philosophy to trickle down'
        }]}
      />
      <Accordion
        title="Code (React/ES6)"
        content={<CodeMirror value={TableCode} options={DEFAULT_CODE_MIRROR_OPTIONS} />}
      />
    </div>
  )
}

export default TableOneExample;