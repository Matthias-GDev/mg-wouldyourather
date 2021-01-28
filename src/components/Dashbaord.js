import React, {Component} from 'react'
import '../css/dashboard.css';
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
                <ul className="dashboard-card-list">
                    {all_Questions.map((question) => (
                        <li key={question.id}>
                           <Question id={question.id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({authedUser,questions}) {
    return {
        authedUser,
        questions
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard))