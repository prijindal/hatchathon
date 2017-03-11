import React from 'react';

import { withRouter } from 'react-router-dom';

const Home = withRouter(({ history }) => (
  <div onClick={() => history.push('/')}>
    <span id="head-terminal">Vim-me</span>
    {/* <textarea ref={(c) => { this.textarea = c; }} cols={79} rows={28} id="editor" /> */}
    <div id="editor">Click To Continue</div>
    <input disabled={true} id="commands" />
  </div>
));

export default Home;
