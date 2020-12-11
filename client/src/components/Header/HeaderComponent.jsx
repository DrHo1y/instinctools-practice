import React from 'react'
import { theme, Header } from '../../styles/styles'
import HeaderFirst from './HeaderFirst/HeaderFirst'
import HeaderSecond from './HeaderSecond/HeaderSecond'

const HeaderComponent = (props) => {
  return (
    <Header color={theme.primaryColor}>
      <HeaderFirst />
      <HeaderSecond />
    </Header>
  )
}

export default HeaderComponent
