import React, { Component } from 'react';

import { TextareaField, Button, Modal, Alert, DropDown, Header, Footer } from 'caseflow_react';
require('codemirror/lib/codemirror.css');

import logo from './logo.svg';
import './App.css';
import StyleGuide from './containers/StyleGuide';

class App extends Component {

  render() {
    return <div>
      <Header
        title="Style Guide"
      />
      <div className="content">
        <main className="usa-grid">
          <StyleGuide />
        </main>
      </div>
      <Footer />
    </div>;
  }
}

export default App;
