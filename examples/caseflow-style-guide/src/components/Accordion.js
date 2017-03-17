import React, { Component } from 'react';
import _ from 'lodash';

class Accordion extends Component {

  constructor(props) {
    super(props)
    this.contents = []
  }

  clicked(index) {
    console.log(index);
    this.openAccordion(index);
  }

  openAccordion(accordionIndex) {
    console.log(this.contents);
    //console.log(index);
    _.each(this.contents, (content, index) => {
      if(accordionIndex === content.props.index) {
        console.log(content.props);
        this.contents[index] = React.cloneElement(content, {
          index: index,
          clicked: this.clicked,
          openAccordion: this.openAccordion.bind(this),
          close: false
        })
        //this.open()
      } else {
         this.contents[index] = React.cloneElement(content, {
          index: index,
          clicked: this.clicked,
          openAccordion: this.openAccordion.bind(this),
          close: true
        })
      }
    });
  }

  render() {
    let {
      content,
      contentClass,
      bordered,
      collapse
    } = this.props;

    console.log(this.props.children);
    this.contents = [];
    _.each(this.props.children, (content, index) => {
      let newContent = React.cloneElement(content, {
        index: index,
        clicked: this.clicked,
        openAccordion: this.openAccordion.bind(this)
      })
      this.contents.push(newContent);
    })

    let divClassName = bordered ? 'usa-accordion-bordered' : 'usa-accordion';
    return (
      <ul className={divClassName}>
        {this.contents}
      </ul>
    )
  }
}

export default Accordion;