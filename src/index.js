import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
// import NotFound1, { NotFound } from './views/not-found'
import Home from './views/home'
import FormComponent from './components/FormComponent';


const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route component={NotFound1} exact path="/not-found" /> */}
        <Route component={Home} exact path="/" />
        
        <Route path="/form" component={FormComponent} />
        {/* <Route component={NotFound} path="**" /> */}
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
