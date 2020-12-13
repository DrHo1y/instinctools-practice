import React from 'react'
import { ContainerMainPage, MainPageText } from '../../styles/styledComponents'
import FormMainPage from './FormMainPage'

const MainPage = (props) => {
  return (
    <ContainerMainPage>
      <MainPageText size='24px' weight='600'>
        Find deals on hotels, homes, and much more…
      </MainPageText>
      <MainPageText weight='500'>
        From cozy country homes to funky city apartments
      </MainPageText>
      <FormMainPage />
    </ContainerMainPage>
  )
}

export default MainPage
