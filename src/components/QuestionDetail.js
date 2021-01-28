import { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetail extends Component{
    render(){
        return(
            <div>
                QuestionDetail
            </div>
        )
    }
}

function mapStateToProps(authedUser) {
    return {
        authedUser,
    }
}


export default connect()(QuestionDetail)