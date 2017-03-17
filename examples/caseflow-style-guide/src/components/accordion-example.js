import React, { PropTypes } from 'react';
//import { Accordion, AccordionContent } from 'caseflow-react';
import Accordion from './Accordion';
import AccordionContent from './AccordionContent';

import CodeMirror from 'react-codemirror';
import { AccordionCode } from '../data/code';

import { DEFAULT_CODE_MIRROR_OPTIONS } from './util/options';

const AccordionExample = (props) => {
  const accordionOneContent = <p>We the People of the United States, in Order to form a
  more perfect Union, establish Justice, insure domestic Tranquility, provide for the
  common defence, promote the general Welfare, and secure the Blessings of Liberty to
  ourselves and our Posterity, do ordain and establish this Constitution for the United
  States of America.</p>;

  const accordionTwoContent = <p>This is the content in the 2nd accordion</p>;
  const accordionThreeContent = <p>This is the content in the 3rd accordion</p>;

  return(
    <div>
      <h2 id="accordions">Accordions</h2>
        <h3 id="accordions">Borderless accordion</h3>
        <Accordion>
          <AccordionContent title="Example title 1" content={accordionOneContent} />
          <AccordionContent title="Example title 2" content={accordionTwoContent} />
          <AccordionContent title="Example title 3" content={accordionThreeContent} />
        </Accordion>
        {/*<Accordion
          title="Example title 2"
          content={accordionTwoContent}
        />
        <Accordion
          title="Example title 3"
          content={accordionThreeContent}
        />*/}
      <div className="cf-help-divider"></div>
      {/*<div>
        <h3 id="accordions">Borderless accordion</h3>
        <ul className="usa-accordion-bordered">
            <Accordion
              title="Example title 1"
              bordered={true}
              content={accordionOneContent}
            />
            <Accordion
              title="Example title 2"
              bordered={true}
              content={accordionTwoContent}
            />
          <Accordion
            title="Example title 3"
            bordered={true}
            content={accordionThreeContent}
          />
        </ul>
      </div>*/}
      <div className="cf-help-divider"></div>
      {/*<Accordion
        title="Code (React/ES6)"
        contentClass="code-mirror-accordion-content"
        content={<CodeMirror value={AccordionCode} options={DEFAULT_CODE_MIRROR_OPTIONS} />}
      />*/}
    </div>
  )
}

export default AccordionExample;