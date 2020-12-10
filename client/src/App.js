import React from 'react'
import { connect } from 'react-redux'
import { Container } from './styles/styles'
import HeaderComponent from './components/Header/HeaderComponent'

function App() {
  return (
    <Container headerSize='110px'>
      <HeaderComponent />
      <div>content main page</div>
    </Container>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
