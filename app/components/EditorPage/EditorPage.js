import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Editor from '../Editor/Editor';

const EditorPage = ({ user }) => {
  if (!user || !user.token) {
    return <Redirect to="/login" />;
  }
  return <Editor />;
};

export default EditorPage;
