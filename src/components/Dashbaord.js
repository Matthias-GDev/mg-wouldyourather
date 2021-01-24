import React, {Component} from 'react'
import { connect } from 'react-redux'
import { logoutAuthedUser } from '../actions/authedUser'
import authedUser from '../reducers/authedUser'
import { Redirect, withRouter } from 'react-router-dom'

class Dashboard extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                HOME!
            </div>
        )
    }
}

function mapStateToProps(authedUser,questions) {
    return {
        authedUser,
        questions
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard))