import { connect } from 'react-redux'
import React from 'react'
import { theme, Header } from '../../styles/styledComponents'
import HeaderFirst from './HeaderFirst/HeaderFirst'
import HeaderSecond from './HeaderSecond/HeaderSecond'
import { signoutClickAction } from '../../redux/actions/userAction'

const HeaderComponent = (props) => {
  return (
    <Header color={theme.primaryColor}>
      <HeaderFirst
        isAuth={props.user.isAuth}
        signoutClick={props.signoutClickAction}
      />
      <HeaderSecond />
    </Header>
  )
}
const mapStateToProps = (state) => state
const mapDispatchToProps = {
  signoutClickAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
