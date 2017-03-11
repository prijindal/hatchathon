import React, { PureComponent } from 'react';
import localforage from 'localforage';

import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

import commands from '../utils/commands';

import search from '../utils/search';

const Keyboard = Quill.imports['modules/keyboard'];

const FILE_KEY = 'file';

class App extends PureComponent {
  componentDidMount() {
    this.quill = new Quill('#editor', {
      theme: 'snow',
      readOnly: false,
      modules: {
        toolbar: false,
      },
    });
    this.quill.keyboard.addBinding({
      key: Keyboard.keys.ESCAPE,
    }, this.focusInput);
    localforage.getItem(FILE_KEY)
    .then((text) => {
      if (!text) return;
      this.quill.insertText(0, text);
    });
  }

  focusInput = () => {
    this.input.focus();
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
      this.search(argument);
    } else if (command === 'write') {
      this.write();
    } else if (command === 'setNumber') {
      this.setNumber();
    } else if (command === 'setNoNumber') {
      this.setNoNumber();
    }
  }

  search = (argument) => {
    const text = this.quill.getText();
    const results = search(text, argument);
    this.quill.removeFormat(0, text.length);
    results.forEach((result) => {
      this.quill.formatText(result[0], argument.length, {
        color: '#ffff00',
      });
    });
  }

  write = () => {
    localforage.setItem(FILE_KEY, this.quill.getText());
  }

  setNumber = () => {
    this.quill.formatLine(1, this.quill.getText().length, 'list', 'ordered');
  }

  setNoNumber = () => {
    this.quill.removeFormat(1, this.quill.getText().length);
  }

  render() {
    return (
      <div id="main">
        <div id="flex1">
          <div id="heading">Vim-<span id="heading-bold">me</span></div>
          
          <div id="terminal-background">
            <div id="content"></div>
            <div id="terminal">
              <span id="head-terminal">Vim-me</span>
              {/* <textarea ref={(c) => { this.textarea = c; }} cols={79} rows={28} id="editor" /> */}
              <div id="editor" />
              <input ref={(c) => { this.input = c; }} onKeyUp={this.onKeyUp} type="text" name="commands" id="commands" />
            </div>
          </div>
        </div>


        <footer>
          <div>
            <ul>
              <li><a href=".default">R</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
