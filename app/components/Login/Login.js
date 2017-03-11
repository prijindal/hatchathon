import React, { PureComponent } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import firebase from '../../utils/firebase';

class Login extends PureComponent {
  componentWillMount() {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }

  login = () => {
    firebase.auth().signInWithPopup(this.provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      this.props.setUser(token);
      // ...
    }).catch(() => {});
  }

  render() {
    if (this.props.user.token) {
      return <Redirect to=""/>
    }
    return (
      <div onClick={this.login}>
        <span id="head-terminal">Vim-me</span>
        {/* <textarea ref={(c) => { this.textarea = c; }} cols={79} rows={28} id="editor" /> */}
        <div id="editor">Login</div>
        <input disabled={true} id="commands" />
      </div>
    )
  }
}

export default Login;
