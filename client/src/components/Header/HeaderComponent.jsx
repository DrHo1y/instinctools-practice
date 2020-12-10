import React from 'react'
import { theme, Header, HeaderWrapperSecond } from '../../styles/styles'
import HeaderFirst from './HeaderFirst/HeaderFirst'

const HeaderComponent = (props) => {
  return (
    <Header color={theme.primaryColor}>
      <HeaderFirst />
      <HeaderWrapperSecond>2</HeaderWrapperSecond>
    </Header>
  )
}

export default HeaderComponent
