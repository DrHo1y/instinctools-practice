import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { useRoutes } from './routes'
import { Container } from './styles/styledComponents'
import HeaderComponent from './components/Header/HeaderComponent'

function App() {
  const routes = useRoutes()
  return (
    <BrowserRouter>
      <Container headerSize='110px'>
        <HeaderComponent />
        {routes}
      </Container>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
