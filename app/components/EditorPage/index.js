import { connect } from 'react-redux';
import EditorPage from './EditorPage';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(EditorPage);
