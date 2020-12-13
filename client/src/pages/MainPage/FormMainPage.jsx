import React from 'react'
import { SearchForm, Input, ButtonForForm } from '../../styles/styledComponents'

const FormMainPage = (props) => {
  return (
    <SearchForm>
      <Input width='350px' placeholder='Where are you going?' />
      <Input width='125px' type='date' placeholder='Date in' />
      <Input width='125px' type='date' placeholder='Date out' />
      <Input width='113px' type='number' placeholder='Rooms' min='0' />
      <Input width='113px' type='number' placeholder='Adults' />
      <Input width='113px' type='number' placeholder='Children' />
      <ButtonForForm width='120px'>Search</ButtonForForm>
    </SearchForm>
  )
}

export default FormMainPage
