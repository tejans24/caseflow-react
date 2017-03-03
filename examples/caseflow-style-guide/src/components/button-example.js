import React, { PropTypes } from 'react';
import { Button } from 'caseflow_react';

const ButtonExample = (props) => {
  return(
    <div>
      <h2 id="buttons">Buttons</h2>
      <p>Modals are 490 pixels in width with 30px padding around the border and
        contain the following: a title, explanation text, a divider,
        and action buttons. There are modal-specific classes that must be included
        in your modal (see below code snippets).</p>
        <Button
          id={`button-Assign-to-Claim`}
          name="Loading"
          classNames={["usa-button-outline"]}
          onClick={() => { console.log("Clicked")}}
          loading={true}
        />
        <Button
          id={`button-Assign-to-Claim`}
          name="Outline"
          classNames={["usa-button-outline"]}
          onClick={() => { console.log("Clicked")}}
        />
        <Button
          id={`button-Assign-to-Claim`}
          name="Primary Alt"
          classNames={["usa-button-primary-alt"]}
          onClick={() => { console.log("Clicked")}}
        />
        <Button
          id={`button-Assign-to-Claim`}
          name="Secondary"
          classNames={["usa-button-secondary"]}
          onClick={() => { console.log("Clicked")}}
        />
    </div>
  )
}

export default ButtonExample;