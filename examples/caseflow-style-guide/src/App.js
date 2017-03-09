import React, { Component } from 'react';
import logo from './caseflow-default-logo.svg';

import { TextareaField, Button, Modal, Alert, DropDown, Header, Footer } from 'caseflow-react';
require('codemirror/lib/codemirror.css');

import './App.css';
import StyleGuide from './containers/StyleGuide';

class App extends Component {

  render() {
    return <div>
      <Header
        logoImg={logo}
        logoName="Style Guide"
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
