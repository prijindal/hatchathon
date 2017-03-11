import { connect } from 'react-redux';
import Login from './Login';

import { setUser } from '../../actions/user';
import { addTutorial } from '../../actions/tutorials';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  addTutorial: content => dispatch(addTutorial(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
