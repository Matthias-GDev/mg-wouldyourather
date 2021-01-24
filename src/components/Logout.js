import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { logoutAuthedUser } from '../actions/authedUser'

class Logout extends Component{

    componentDidMount(){
        this.props.dispatch(logoutAuthedUser())
    }

    render(){
        return <Redirect to='/' />
    }
}

export default withRouter(connect()(Logout))