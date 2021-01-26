import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import Question from './Question'

class Dashboard extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const { questions, authedUser } = this.props
        const all_Questions = Object.values(questions)

        return(
            <div>
                    {all_Questions.map((question) => (
                           <Question />
                    ))}
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