import { connect } from 'react-redux';
import Editor from './Editor';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Editor);
