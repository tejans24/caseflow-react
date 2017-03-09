const ModalCode = `
  import { TextareaField, Modal } from 'caseflow-react';

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
      return <div>
        <Button
          name="Launch Modal"
          onClick={this.handleModalOpen}
          classNames={["usa-button", "usa-button-outline"]}
        />
        { this.state.modal && <Modal
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
        </div>
    }
  }

  export default ModalExample;
`;

const AlertCode = `
  import React, { PropTypes } from 'react';
  import { Alert } from 'caseflow-react';

  const AlertExample = (props) => {
    return(
      <div>
        <h2 id="alerts">Alerts</h2>
        <Alert type="success" title="Success status"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
        <Alert type="warning" title="Warning status"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
        <Alert type="error" title="Error status"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
        <Alert type="info" title="Informative status"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
        <Alert type="info" title="Informative status"
          message="Multi line. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu-
          santium doloremque laudantium, totam zrem. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt."/>
      </div>
    )
  }

  export default AlertExample;
`;

export {
  ModalCode,
  AlertCode
};