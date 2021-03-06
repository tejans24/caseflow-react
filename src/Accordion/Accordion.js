import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
  }

  toggleButton() {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    let {
      title,
      content
    } = this.props;

    let {
      toggle
    } = this.state;

    return (
      <div>
        <button className="usa-accordion-button"
          aria-expanded={!toggle} aria-controls="modals-react-code" onClick={() => this.toggleButton()}>
          {title}
        </button>
        <div id="modals-react-code" className="usa-accordion-content" aria-hidden={toggle}>
          {content}
        </div>
      </div>
    )
  }
}

export default Accordion;