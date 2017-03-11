import { connect } from 'react-redux';
import Login from './Login';

import { setUser } from '../../actions/user';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  setUser: token => dispatch(setUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
