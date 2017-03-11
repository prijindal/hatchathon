import React from 'react';

import { withRouter } from 'react-router-dom';

const Intro = withRouter(({ history }) => (
  <div onClick={() => history.push('/')}>
    <span id="head-terminal">Vim-me</span>
    {/* <textarea ref={(c) => { this.textarea = c; }} cols={79} rows={28} id="editor" /> */}
    <div id="editor">Info about vim</div>
    <input disabled={true} id="commands" />
  </div>
));

export default Intro;
