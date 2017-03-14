import React, { PropTypes } from 'react';
import TableOneExample from './table-one-example';
import TableTwoExample from './table-two-example';

import { DEFAULT_CODE_MIRROR_OPTIONS } from '../util/options';

const TableExample = (props) => {
  function buildRowTableOne(values, index){
    return [
      values.user,
      values.date,
      values.application,
      values.feedback
    ]
  }
  function buildRowTableTwo(values, index){
    return [
      values.document,
      values.vacols,
      values.vbms_efolder
    ]
  }

  return(
    <div>
      <h2 id="alerts">Tables</h2>
      <div className="cf-help-divider" />
      <TableOneExample />
      <div className="cf-help-divider" />
      <TableTwoExample />
    </div>
  )
}

export default TableExample;