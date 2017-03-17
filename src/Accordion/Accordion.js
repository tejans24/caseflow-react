import React, { Component } from 'react';

class Accordion extends Component {
  render() {
    let {
      content,
      contentClass,
      bordered,
      collapse
    } = this.props;

    console.log(this.props.children);
    let divClassName = bordered ? 'usa-accordion-bordered' : 'usa-accordion';
    return (
      <ul className={divClassName}>
        {this.props.children}
      </ul>
    )
  }
}

export default Accordion;