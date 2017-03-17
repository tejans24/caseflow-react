import React, { Component } from 'react';

class AccordionContent extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
  }

  toggleButton() {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    let {
      contentClass,
      title,
      content
    } = this.props;


    let {
      toggle
    } = this.state;

    let classForContent = contentClass ? contentClass + ' usa-accordion-content' : 'usa-accordion-content';

    return(
      <li>
        <button className="usa-accordion-button"
          aria-expanded={!toggle} aria-controls="modals-react-code" onClick={() => this.toggleButton()}>
          {title}
        </button>
        <div className={classForContent} aria-hidden={toggle}>
          {content}
        </div>
      </li>
    )
  }
}

export default AccordionContent;