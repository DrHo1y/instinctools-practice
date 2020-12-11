import React from 'react'
import {
  HeaderWrapperElement,
  Img,
  HeaderWrapperElementTitle,
} from '../../../styles/styles'

const HeaderElement = (props) => {
  return (
    <HeaderWrapperElement active={props.active}>
      <Img src={props.img} />
      <HeaderWrapperElementTitle>Stays</HeaderWrapperElementTitle>
    </HeaderWrapperElement>
  )
}

export default HeaderElement
