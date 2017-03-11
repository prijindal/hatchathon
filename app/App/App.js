import React, { PureComponent } from 'react';
import Quill from 'quill';

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

import commands from '../utils/commands';

import search from '../utils/search';


// console.log(search('ABCDDABC', 'ABC'));

class App extends PureComponent {
  componentDidMount() {
    this.quill = new Quill('#editor', {
      theme: 'snow',
      readOnly: false,
      modules: {
        toolbar: false,
      },
    });
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.onEnter(e);
    }
  }

  onEnter = (e) => {
    const value = e.target.value;
    const { command, argument } = commands(value);
    if (command === 'search') {
      let results = search(this.textarea.value, argument);
      console.log(results);
    }
  }

  render() {
    return (
      <div id="terminal">
        {/* <textarea ref={(c) => { this.textarea = c; }} cols={79} rows={28} id="editor" /> */}
        <div id="editor" />
        <br />
        <input onKeyUp={this.onKeyUp} type="text" name="commands" id="commands" />
      </div>
    );
  }
}

export default App;
