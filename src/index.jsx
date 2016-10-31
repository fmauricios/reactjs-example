import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  render() {
    return <h1 className="container"> Hola React </h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
