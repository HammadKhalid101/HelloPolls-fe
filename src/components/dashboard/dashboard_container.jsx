import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import Dashboard from './dashboard'

const mapStateToProps = state => {
  
  return {
  }
}

const mapDispatchToProps = dispatch => {
  
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))