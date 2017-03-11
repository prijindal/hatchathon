import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Editor from '../Editor';

const EditorPage = ({ user }) => {
  if (!user || !user.credential) {
    return <Redirect to="/login" />;
  }
  return <Editor />;
};

export default EditorPage;
