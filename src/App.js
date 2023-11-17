import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import RegisterContext from './Context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    input: '',
    topic: 'ARTS_AND_CULTURE',
    isRegistered: false,
    error: false,
  }

  onChangeInput = input => {
    this.setState({input})
  }

  onChangeTopic = topic => {
    this.setState({topic})
  }

  register = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({error: true})
  }

  render() {
    const {input, topic, isRegistered, error} = this.state
    return (
      <RegisterContext.Provider
        value={{
          input,
          topic,
          isRegistered,
          error,
          onChangeInput: this.onChangeInput,
          onChangeTopic: this.onChangeTopic,
          register: this.register,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
