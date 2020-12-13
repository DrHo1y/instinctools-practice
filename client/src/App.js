import React from 'react'
import { connect } from 'react-redux'
import { Container } from './styles/styledComponents'
import HeaderComponent from './components/Header/HeaderComponent'
import MainPage from './pages/MainPage/MainPage'

function App() {
  return (
    <Container headerSize='110px'>
      <HeaderComponent />
      <MainPage />
    </Container>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
