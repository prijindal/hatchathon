import { combineReducers } from 'redux';

import user from './user';
import theme from './theme';
import tutorials from './tutorials';

export default combineReducers({
  user,
  theme,
  tutorials,
});
