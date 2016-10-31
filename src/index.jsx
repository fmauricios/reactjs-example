import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'

const config = {
  apiKey: "AIzaSyD-ZcCmiE0MR92ZTnSLN5ecU4DSpUaZ-dM",
  authDomain: "reactjs-example.firebaseapp.com",
  databaseURL: "https://reactjs-example.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "268739246701"
}

firebase.initializeApp(config)

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      name: 'Mauricio'
    }
  }

  componentWillMount () {
    const nameRef = firebase.database().ref().child('object').child('name')

    nameRef.on('value', (snap) => {
      this.setState({
        name: snap.val()
      }, () => {
        console.log(this.state.name)
      })
    })
  }

  render () {
    return <div className="container">
      <div className="jumbotron">
        <h1> Hola {this.state.name} </h1>
        <p><a className="btn btn-primary btn-lg" href="https://facebook.github.io/react/" role="button">Click me!</a></p>
      </div>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
