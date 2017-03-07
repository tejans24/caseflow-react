import React, { Component } from 'react';
import { TextareaField, Button, Modal, Accordion } from 'caseflow-react';
import CodeMirror from 'react-codemirror';
import { ModalCode } from '../data/code';
require('codemirror/mode/javascript/javascript');
import './custom.css'

class ModalExample extends Component {
  constructor(props) {
    super(props);
    window.jqueryOn = false;
    this.state = { modal: false };
  }

  handleModalOpen = () => {
    this.setState({ modal: true });
  };

  handleModalClose = () => {
    this.setState({ modal: false });
  };

  render() {
    let styleGuideModal = this.state.modal;
    let options = {
      theme: 'monokai',
      mode: {name: "javascript", jsx: true},
      readOnly: true,
      //lineNumbers: true
    };
    return <div>
      <h2 id="modals">Modals</h2>
      <p>Modals are 490 pixels in width with 30px padding around the border and
      contain the following: a title, explanation text, a divider,
      and action buttons. There are modal-specific classes that must be included
      in your modal (see below code snippets).</p>
      <p>
        <Button
          name="Launch Modal"
          onClick={this.handleModalOpen}
          classNames={["usa-button", "usa-button-outline"]}
        />
      </p>
      { styleGuideModal && <Modal
        buttons = {[
          { classNames: ["cf-modal-link", "cf-btn-link"],
            name: 'Close',
            onClick: this.handleModalClose
          },
          { classNames: ["usa-button", "usa-button-secondary"],
            name: 'Proceed with action',
            onClick: this.handleModalClose
          }
        ]}
        closeHandler={this.handleModalClose}
        title = "This is a modal">
        <p>
          This is your modal text, which explains why the modal was triggered.
          Modal titles are in <b>Title Case</b>, but actions on modal features
          such as text explanations, action buttons, fields, etc. are
          <b> Sentence case</b>.
        </p>
        <TextareaField
          label="This is a text box for the modal."
          name="Text Box"
          onChange={this.handleModalOpen}
        />
      </Modal>
    }

    <Accordion
      title="Code (React/ES6)"
      content={<CodeMirror value={ModalCode} options={options} />}
    />

    </div>;
  }
}

export default ModalExample;