import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Table from './Table';
import { createTask } from '../util/factory';

describe('Table', () => {
  let buildRowValues;
  let headers;
  let values;
  let wrapper;

  beforeEach(() => {
    buildRowValues = (task) => ['fizz', 'buzz', task.type];
    headers = ['First', 'Second', 'Third'];
    values = createTask(3);
  });

  describe('renders', () => {
    it('works', () => {
      wrapper = shallow(
        <Table headers={headers} values={values} buildRowValues={buildRowValues}/>
      );
      let headerCount = 3;
      let rowCount = 4;
      let cellCount = 9;

      expect(wrapper.find('table')).to.have.length(1);
      expect(wrapper.find('th')).to.have.length(headerCount);
      expect(wrapper.find('tr')).to.have.length(rowCount);
      expect(wrapper.find('td')).to.have.length(cellCount);
      expect(
        wrapper.
        find('td').
        last().
        text()
      ).to.eq('EstablishClaim');
    });
  });
});
