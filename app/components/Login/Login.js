import React, { PureComponent } from 'react';

import { withRouter } from 'react-router-dom';

class Login extends PureComponent {
  render() {
    return (
      <div onClick={() => history.push('/')}>
        <span id="head-terminal">Vim-me</span>
        {/* <textarea ref={(c) => { this.textarea = c; }} cols={79} rows={28} id="editor" /> */}
        <div id="editor">Login</div>
        <input disabled={true} id="commands" />
      </div>
    )
  }
}

export default Login;
