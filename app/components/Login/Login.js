import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../../utils/firebase';

class Login extends PureComponent {
  login = () => {
    login()
    .then(user => this.props.setUser(user));
  }

  render() {
    if (this.props.user.credential) {
      return <Redirect to=""/>
    }
    return (
      <div onClick={this.login}>
        <a href="#" className="button"><div id="click">Login with Google</div></a>
        <span id="head-terminal">Vim-me</span>
        {/* <textarea ref={(c) => { this.textarea = c; }} cols={79} rows={28} id="editor" /> */}
        <div id="editor">Login</div>
        <input disabled={true} id="commands" />
      </div>
    )
  }
}

export default Login;
