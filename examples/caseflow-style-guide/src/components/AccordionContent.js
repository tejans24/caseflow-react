import React, { Component } from 'react';

class AccordionContent extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState({toggle: !this.state.toggle})
    this.props.openAccordion(this.props.index);
  }

  // close() {
  //   this.setState({toggle: false})
  // }

  // open() {
  //   this.setState({toggle: true})
  // }

  render() {
    let {
      contentClass,
      title,
      content,
      index
    } = this.props;

    let {
      toggle
    } = this.state;

    let classForContent = contentClass ? contentClass + ' usa-accordion-content' : 'usa-accordion-content';

    return(
      <li>
        Index: {index}
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