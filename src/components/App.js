import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Redirect, withRouter } from 'react-router-dom'

//Custom Components
import Nav from './Nav'
import SignIn from './SignIn'
import Dashboard from './Dashbaord'
import Logout from './Logout'


class App extends Component {

    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render(){
        return(
            <Router>
                <Nav />
                <div>
                    <Route path='/' exact component={SignIn} />
                    <Route path='/logout' exact component={Logout} />
                    <Route path='/dashboard' exact component={Dashboard} />
                </div>
            </Router>
        )
    }
}

function mapStateToProps(authedUser) {
    return{
        authedUser:authedUser
    }
}

export default connect(mapStateToProps)(App)