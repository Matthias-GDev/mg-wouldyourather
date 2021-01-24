import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

//Custom Components
import SignIn from './SignIn'

class App extends Component {

    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render(){
        return(
            <div>
                Start React :)
                <br/>
                <SignIn />
            </div>
        )
    }
}

export default connect()(App)