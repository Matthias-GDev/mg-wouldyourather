import { Component } from 'react'
import { connect } from 'react-redux'
import { Container,Row,Col,Card,Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {handleAnswerToQuestion} from '../actions/shared'

class QuestionDetail extends Component{

    constructor(props){
        super(props)
        this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this)
        this.handleSelectAnswer = this.handleSelectAnswer.bind(this)
        this.state ={
            selectedAnswer: ''
        }
    }

    handleSubmitAnswer(e){
        e.preventDefault()

        const authedUserId = this.props.authedUser
        const questionId = this.props.questionItem.id
        const answer = this.state.selectedAnswer

        this.props.dispatch(handleAnswerToQuestion(
          questionId,
          authedUserId,
          answer,
        ))
    }

    handleSelectAnswer(sAnswer){
         this.setState((prevState) => {
            return {selectedAnswer: sAnswer}
        })
    }

    render(){
        const { questionItem, author,questionAnswered} = this.props;


        return(
             <Container fluid>
                <br />
                <Row>
                    <Col sm={1}></Col>
                    <Col>
                        <center>
                         <Card
                                bg='Success'
                                key='1'
                                text='dark'
                                style={{ width: '38rem' }}
                                className="mb-4"
                                border="primary"
                            >
                                <Card.Header className="text-left"><h3>{author.name} asks:</h3></Card.Header>
                                <Card.Body>
                                
            {!questionAnswered ? (
                                    <Row>
                                        <Col>  
                                            <img className='question-user-picture' alt='User' src={author.avatarURL} />
                                        </Col>
                                        <Col>
                                            <Card.Title className='text-left'>Would you rather</Card.Title>
                                                        <Form>
                                                            <Form.Check type='radio' id={questionItem.id+'_1'} className='text-left'>
                                                                <Form.Check.Input name='myAnswerGroup' type='radio' isValid onClick={(e) => { this.handleSelectAnswer('optionOne')}}/>
                                                                <Form.Check.Label>{questionItem.optionOne.text}</Form.Check.Label>
                                                            </Form.Check>
                                                            <Card.Text className="text-left">or</Card.Text>
                                                            <Form.Check type='radio' id={questionItem.id+'_2'} className='text-left'>
                                                                <Form.Check.Input name='myAnswerGroup' type='radio' isValid onClick={(e) => { this.handleSelectAnswer('optionTwo')}} />
                                                                <Form.Check.Label>{questionItem.optionTwo.text}</Form.Check.Label>
                                                            </Form.Check>
                                                            <br />
                                                            <Button onClick={this.handleSubmitAnswer} variant="success" size="lg" block>
                                                                Submit
                                                            </Button>
                                                        </Form>
                                                        </Col>
                                                    </Row>
                                    ):(
                                        <p>Poll ERG</p>
            )}

                                </Card.Body>
                            </Card>
                        </center>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, { match }) {
    
    const { id } = match.params
    const questionItem = questions[id]
    const author = questionItem ? users[questionItem.author] : null
    const questionAnswered = questionItem ? (questionItem.optionOne.votes.indexOf(authedUser) > -1 || questionItem.optionTwo.votes.indexOf(authedUser) > -1) : false

    return {
        authedUser,
        author,
        questionItem,
        questionAnswered,
    }
}


export default connect(mapStateToProps)(QuestionDetail)