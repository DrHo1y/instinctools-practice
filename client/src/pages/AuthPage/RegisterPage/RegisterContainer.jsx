import React from 'react'
import { connect } from 'react-redux'
import RegisterPage from './RegisterPage'

import { signupClickAction } from '../../../redux/actions/userAction'

const RegisterContainer = (props) => {
  return <RegisterPage signupClick={props.signupClickAction} />
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  signupClickAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
