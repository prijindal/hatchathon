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
      const text = this.quill.getText();
      const results = search(text, argument);
      results.forEach((result) => {
        this.quill.deleteText(result[0], argument.length);
        this.quill.insertText(result[0], text.substring(result[0], result[1]), {
          color: '#ffff00',
        });
      });
    }
  }

  render() {
    return (
      <div>
        <div id="heading">Vim-<span id="heading-bold">me</span></div>
        <div id="terminal">
          <span id="head-terminal">Vim-me</span>
          {/* <textarea ref={(c) => { this.textarea = c; }} cols={79} rows={28} id="editor" /> */}
          <div id="editor" />
          <br />
          <input onKeyUp={this.onKeyUp} type="text" name="commands" id="commands" />
        </div>
      </div>
    );
  }
}

export default App;
