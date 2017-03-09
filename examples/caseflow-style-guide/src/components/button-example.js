import React, { PropTypes } from 'react';
import { Button } from 'caseflow-react';

import { DEFAULT_CODE_MIRROR_OPTIONS } from './util/options';

const ButtonExample = (props) => {
  return(
    <div>
      <h2 id="buttons">Buttons</h2>
      <p>Primary actions are visually priortized by being solid blue `usa-button` style.</p>
      <p>Finally, there are actions that we generally want to discourage but should remain
      visible to users as an escape hatch.</p>
      <p>These actions can be `button-link` styles or use the `usa-button-secondary` style.
       For example, the “Cancel” button frequently found at the bottom of Caseflow workflow
        layouts is usually a button link because it launches a modal. The button to confirm
         that a user wants to cancel is red and serves as a warning to the user that the
          action is destructive. These styles should be used sparingly.</p>
      <h3>Primary buttons</h3>
      <p>
        <span style={{marginRight: '10px'}}>
          <Button
            id={`button-Assign-to-Claim`}
            name="Primary"
            classNames={["usa-button-default"]}
            onClick={() => { console.log("Clicked")}}
          />
        </span>
        <Button
          id={`button-Assign-to-Claim`}
          name="Secondary"
          classNames={["usa-button-secondary"]}
          onClick={() => { console.log("Clicked")}}
        />
      </p>
      <h3>Secondary buttons</h3>
      <p>
        <span style={{marginRight: '10px'}}>
          <Button
            id={`button-Assign-to-Claim`}
            name="Outline"
            classNames={["usa-button-outline"]}
            onClick={() => { console.log("Clicked")}}
          />
        </span>
        <Button
          id={`button-Assign-to-Claim`}
          name="Button Link"
          classNames={["cf-btn-link"]}
          onClick={() => { console.log("Clicked")}}
        />
      </p>
      <h3>Disabled</h3>
      <p>
        <Button
          id={`button-Assign-to-Claim`}
          name="Disabled"
          classNames={["cf-btn-disabled"]}
          onClick={() => { console.log("Clicked")}}
          disabled={true}
        />
      </p>
      <h3>Loading</h3>
      <p>
        <Button
          id={`button-Assign-to-Claim`}
          name="Loading"
          classNames={["usa-button-outline"]}
          onClick={() => { console.log("Clicked")}}
          loading={true}
        />
      </p>
    </div>
  )
}

export default ButtonExample;