import React, { PropTypes } from 'react';
import TableOneExample from './table-one-example';
import TableTwoExample from './table-two-example';

import { DEFAULT_CODE_MIRROR_OPTIONS } from '../util/options';

const TableExample = (props) => {
  return(
    <div>
      <h2 id="tables">Tables</h2>
      <p>We use tables to display information accross Caseflow. Most frequently
         they are used in users’ Queues but we sometimes use them to help users
         accomplish a specific task. For aesthetic purposes, tables in Caseflow
         are borderless.</p>
      <p>Table headings should be bold but with a white background.</p>
      <p>Often tables will contain an primary action a user can take on the table
         item. These actions should always be placed in the right most column of the
          table and should be right aligned with the edge of the table.</p>
      <div className="cf-help-divider" />
      <TableOneExample />
      <div className="cf-help-divider" />
      <TableTwoExample />
    </div>
  )
}

export default TableExample;