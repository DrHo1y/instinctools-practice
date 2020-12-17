import React from 'react'
import HeaderFirstLogo from './HeaderFIrstLogo'
import { HeaderWrapperFirst } from '../../../styles/styledComponents'
import HeaderFirstControl from './HederFirstControl'

const HeaderFirst = (props) => {
  return (
    <HeaderWrapperFirst>
      <HeaderFirstLogo />
      <HeaderFirstControl
        isAuth={props.isAuth}
        signoutClick={props.signoutClick}
      />
    </HeaderWrapperFirst>
  )
}

export default HeaderFirst
