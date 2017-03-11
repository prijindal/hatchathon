import { connect } from 'react-redux';
import App from './App';

import { setTheme } from '../actions/theme';

export default connect(
  ({ theme }) => ({ theme }),
  dispatch => ({
    setTheme: theme => dispatch(setTheme(theme)),
  }),
)(App);
