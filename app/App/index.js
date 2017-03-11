import { connect } from 'react-redux';
import App from './App';

import { setTheme } from '../actions/theme';

export default connect(
  ({ theme, tutorials }) => ({ theme, tutorials }),
  dispatch => ({
    setTheme: theme => dispatch(setTheme(theme)),
  }),
)(App);
