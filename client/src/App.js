import { connect } from 'react-redux'
import React from 'react'
import { Button, StyledLink, Title, Wrapper } from './styles/ex'
import { actionClick } from './redux/actions/appAction'

function App(props) {
  const handleButtonClick = () => {
    console.log('click on UI')
    props.actionClick()
  }

  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Button onClick={handleButtonClick}>Click Me</Button>
      <StyledLink href='https://www.google.com'>Google</StyledLink>
    </Wrapper>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  actionClick,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
