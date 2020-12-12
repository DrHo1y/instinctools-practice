import React from 'react'
import {
  HeaderWrapperFirstControlWrapper,
  Button,
} from '../../../styles/styledComponents'

const HeaderFirstControl = (props) => {
  return (
    <HeaderWrapperFirstControlWrapper>
      <Button
        border='1px solid white'
        textColor='white'
        style={{ marginLeft: 15 }}
      >
        List your property
      </Button>
      <Button color='white' style={{ marginLeft: 15 }}>
        Regiter
      </Button>
      <Button color='white' style={{ marginLeft: 15 }}>
        Sign in
      </Button>
    </HeaderWrapperFirstControlWrapper>
  )
}

export default HeaderFirstControl
