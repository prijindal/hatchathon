import { connect } from 'react-redux';
import Editor from './Editor';
import { addTutorial } from '../../actions/tutorials';

const mapStateToProps = ({ user }) => ({ user });


const mapDispatchToProps = dispatch => ({
  addTutorial: content => dispatch(addTutorial(content)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Editor);
