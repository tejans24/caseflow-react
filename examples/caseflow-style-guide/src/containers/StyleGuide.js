import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import StyleGuideContent from '../components/StyleGuide/StyleGuideContent';
import './StyleGuide.css';

class StyleGuide extends Component {
  render() {
    return(
      <div>
        <StyleGuideContent />
      </div>
    )
  }
}

export default StyleGuide;