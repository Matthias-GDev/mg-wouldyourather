import React, {Component} from 'react'
import '../css/dashboard.css';
import { connect } from 'react-redux'
import { Container,Row,Col,Card,Form,Button,Tabs,Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, withRouter } from 'react-router-dom'

import Question from './Question'

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            countAnswered:0,
            countUnanswered:0,
        }
    }

    render(){
        const { questions, authedUser } = this.props
        const all_Questions = Object.values(questions)

        const answeredQuestions = all_Questions.filter((q)=>{
             const found = (q.optionOne.votes.indexOf(authedUser) > -1 || q.optionTwo.votes.indexOf(authedUser) > -1); 
             return found}).sort((a, b) => b.timestamp - a.timestamp)
        
        const unansweredQuestions = all_Questions.filter((q)=>{ 
            console.log("test: " + q.optionOne.votes.indexOf(authedUser) > 0)
            const found = (q.optionOne.votes.indexOf(authedUser) > -1 || q.optionTwo.votes.indexOf(authedUser) > -1); 
            return !found}).sort((a, b) => b.timestamp - a.timestamp)

        return(
            <Container fluid>
                <Row>
                    <Col sm={3}></Col>
                    <Col>
                        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
                             <Tab eventKey="unanswered" title={"Unanswered Questions ("+ unansweredQuestions.length +')'}>
                                 <ul className="dashboard-card-list">
                                    {unansweredQuestions.map((question) => (
                                        <li key={question.id}>
                                        <Question id={question.id} />
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                             <Tab eventKey="answered" title={'Answered Questions (' + answeredQuestions.length+')'}>
                                 <ul className="dashboard-card-list">
                                    {answeredQuestions.map((question) => (
                                        <li key={question.id}>
                                        <Question id={question.id} />
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
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