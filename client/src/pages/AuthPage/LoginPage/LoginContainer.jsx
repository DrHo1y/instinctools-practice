import React from 'react'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'

import { signinClickAction } from '../../../redux/actions/userAction'

const LoginContainer = (props) => {
  return <LoginPage signinClick={props.signinClickAction} />
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  signinClickAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
