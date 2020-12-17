import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { useRoutes } from './routes'
import { Container } from './styles/styledComponents'
import HeaderComponent from './components/Header/HeaderComponent'

import { signinWithToken } from './redux/actions/userAction'

function App({ signinWithToken }) {
  const isAuth = useSelector((state) => state.user.isAuth)
  const routes = useRoutes(isAuth)

  useEffect(() => {
    signinWithToken()
  }, [signinWithToken])

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
const mapDispatchToProps = {
  signinWithToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
