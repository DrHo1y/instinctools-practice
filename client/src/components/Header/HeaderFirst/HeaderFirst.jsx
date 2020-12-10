import React from 'react'
import HeaderFirstLogo from './HeaderFIrstLogo'
import { HeaderWrapperFirst } from '../../../styles/styles'
import HeaderFirstControl from './HederFirstControl'

const HeaderFirst = (props) => {
  return (
    <HeaderWrapperFirst>
      <HeaderFirstLogo />
      <HeaderFirstControl />
    </HeaderWrapperFirst>
  )
}

export default HeaderFirst
