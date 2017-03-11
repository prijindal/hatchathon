import React, { PureComponent, PropTypes } from 'react';
import localforage from 'localforage';
import { withRouter } from 'react-router-dom';

import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

import { getFile, saveFile } from '../../utils/firebase';

import commands from '../../utils/commands';

import search from '../../utils/search';

const Keyboard = Quill.imports['modules/keyboard'];

const FILE_KEY = 'file';

class Editor extends PureComponent {
  static propTypes = {
     history: PropTypes.object.isRequired, // eslint-disable-line
  }

  state = {
    error: false,
    disabled: false,
  }

  componentDidMount() {
    this.initTutorials();
    this.quill = new Quill('#editor', {
      theme: 'snow',
      readOnly: false,
      modules: {
        toolbar: false,
      },
      history: {
        delay: 100,
      },
    });
    this.quill.keyboard.addBinding({
      key: Keyboard.keys.ESCAPE,
    }, () => {
      this.props.addTutorial('To save your data => Type your data in provided editor then press ESC and then type \':w\' ');
      this.focusInput();
    });
    localforage.getItem(FILE_KEY)
    .catch(console.error);
    localforage.getItem(FILE_KEY)
    .then((text) => {
      this.getFile();
      this.quill.focus();
      if (!text) return;
      this.quill.insertText(0, text);
    })
    .catch(() => {
      this.quill.focus();
      this.getFile();
    });
  }

  initTutorials() {
    const TIMEDIFF = 10;
    setTimeout(() => {
      this.props.addTutorial('Start typing in provided vim editor');
      setTimeout(() => {
        this.props.addTutorial('The following tutorials will tell you about writing, quiting, undo, redo, set commands and search');
        setTimeout(() => {
          this.props.addTutorial('IMPORTNAT!\nBefore typing any command, mentioned above Don\'t forget to press ESC');
        }, TIMEDIFF)
      }, TIMEDIFF)
    }, TIMEDIFF);
  }

  getFile = () => {
    getFile(this.props.user.user.email)
    .then((text) => {
      this.quill.focus();
      if (!text) return;
      this.quill.deleteText(0, this.quill.getText().length);
      this.quill.insertText(0, text);
    })
    .catch((err) => {
      this.quill.focus();
    });
  }

  saveFile = (text) => {
    saveFile(this.props.user.user.email,text);
  }

  focusInput = () => {
    this.setState({
      error: false,
      disabled: false,
    });
    this.input.value = '';
    this.input.focus();
  }

  onKeyUp = (e) => {
    this.setState({
      error: false,
      disabled: false,
    });
    if (e.keyCode === Keyboard.keys.ENTER) {
      this.onEnter(e);
    } else if (e.keyCode === Keyboard.keys.ESCAPE) {
      this.focusInput();
    }
  }

  onEnter = (e) => {
    const value = e.target.value;
    const { command, argument, text } = commands(value);
    if (command === 'search') {
      this.search(argument);
    } else if (command === 'write') {
      this.write();
    } else if (command === 'setNumber') {
      this.setNumber();
    } else if (command === 'setNoNumber') {
      this.setNoNumber();
    } else if (command === 'undo') {
      this.undo();
    } else if (command === 'redo') {
      this.redo();
    } else if (command === 'quit') {
      this.quit();
    } else if (command === 'error') {
      this.showError(argument, text);
    }
  }

  undo = () => {
    const { history } = this.quill;
    if (history.stack.undo.length > 0) {
      history.undo();
      this.focusInput();
    } else {
      this.showInfo('Already at oldest change');
    }
  }

  quit = () => {
    this.props.history.push('/quit');
    this.props.addTutorial('For undo: \':u\'');
    this.props.addTutorial('For redo: \':redo\'');
    this.props.addTutorial('For setting number lines: \':set number\'');
    this.props.addTutorial('For removing number lines: \':set nonumber\'');
    this.props.addTutorial('For Search: \':?keyword\'');
  }

  redo = () => {
    const { history } = this.quill;
    if (history.stack.redo.length > 0) {
      history.redo();
      this.focusInput();
    } else {
      this.showInfo('Already at newest change');
    }
  }

  search = (argument) => {
    const text = this.quill.getText();
    const results = search(text, argument);
    this.quill.removeFormat(0, text.length);
    results.forEach((result) => {
      this.quill.formatText(result[0], argument.length, {
        'background-color': '#ffff00',
        color: '#000',
      });
    });
  }

  write = () => {
    const text = this.quill.getText();
    localforage.setItem(FILE_KEY, text)
    .then(() => {
      this.showInfo(`${text.split('\n').length - 1}L, ${text.length}C written`);
      this.saveFile(text);
      this.props.addTutorial('Your data is succesfully written, if you wish to exit without saving, type \':q\'');
    });
  }

  setNumber = () => {
    this.quill.formatLine(1, this.quill.getText().length, 'list', 'ordered');
  }

  setNoNumber = () => {
    this.quill.removeFormat(1, this.quill.getText().length);
  }

  showError = (code, text) => {
    this.input.value = `E${code} ${text}`;
    this.setState({
      error: code,
      disabled: true,
    });
    this.quill.focus();
  }

  showInfo = (text) => {
    this.input.value = text;
    this.setState({
      disabled: true,
    });
    this.quill.focus();
  }

  render() {
    return (
      <div>
        <span id="head-terminal">Vim-me</span>
        {/* <textarea ref={(c) => { this.textarea = c; }} cols={79} rows={28} id="editor" /> */}
        <div id="editor" />
        <input
          ref={(c) => { this.input = c; }}
          onKeyUp={this.onKeyUp}
          type="text"
          name="commands"
          id="commands"
          disabled={this.state.disabled}
          className={this.state.error ? 'error' : ''}
        />
      </div>
    );
  }
}

const EditorContainer = withRouter(Editor);

export default EditorContainer;
