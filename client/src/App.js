import React from 'react'
import { connect } from 'react-redux'

function App() {
  return <div>123</div>
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
