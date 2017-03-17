import React, { PropTypes } from 'react';
import { Table, Accordion } from 'caseflow-react';
import CodeMirror from 'react-codemirror';
import { TableTwoCode } from '../../data/code';

import { DEFAULT_CODE_MIRROR_OPTIONS } from '../util/options';
import { SUCCESS_ICON, ALERT_ICON, FAILED_ICON } from '../../assets/svg-icons';

const TABLE_HEADERS = ['', 'Document', 'VACOLS', 'VBMS eFolder'];

const TableTwoExample = (props) => {

  /* getStatusIcon
   *
   * Fetching a react SVG component with a proper class styling
   */
  function getStatusIcon (status) {
    let statusIcon;

    switch(status) {
      case 'approved':
        statusIcon = SUCCESS_ICON;
        break;
      case 'failed':
        statusIcon = FAILED_ICON;
        break;
      case 'alerted':
        statusIcon = ALERT_ICON;
        break;
      default:
        statusIcon = ALERT_ICON;
        break;
    }
    return statusIcon;
  }

  function buildRow(value, index) {
    return [
      //getting a react SVG element
      getStatusIcon(value.status),
      value.document,
      value.vacols,
      value.vbms_eFolder
    ]
  }
  return(
    <div>
      <Table
        headers={TABLE_HEADERS}
        buildRowValues={buildRow}
        values={[{
          document: 'SOC',
          vacols: '09/01/2015',
          vbms_eFolder: 'Mismatched dates',
          status: 'approved'
        },
        {
          document: 'NOD',
          vacols: '09/01/2015',
          vbms_eFolder: 'Not found',
          status: 'failed'
        },
        {
          document: 'Form 9',
          vacols: '10/01/2015',
          vbms_eFolder: 'Alerted',
          status: 'alerted'
        }]}
      />
      {/*<Accordion
        title="Code (React/ES6)"
        contentClass="code-mirror-accordion-content"
        content={<CodeMirror value={TableTwoCode} options={DEFAULT_CODE_MIRROR_OPTIONS} />}
      />*/}
    </div>
  )
}

export default TableTwoExample;