import { Component } from 'react'
import { connect } from 'react-redux'
import { Container,Row,Col,Card,Form,Button,Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleAnswerToQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom';

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
        const { questionItem, author,questionAnswered,actualvotesOptionOne,actualvotesOptionTwo,actualvotes,pOptionOne,pOptionTwo,userAnswer} = this.props;
        const {selectedAnswer} = this.state

         if (!questionItem) {
            return <Redirect to="/page-not-found"/>
        }

        return(
             <Container fluid>
                <br />
                <Row>
                    <Col sm={1}></Col>
                    <Col>
                        <center>
                                
            {!questionAnswered ? (
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
                                                            <Button disabled={selectedAnswer===''} onClick={this.handleSubmitAnswer} variant="success" size="lg" block>
                                                                Submit
                                                            </Button>
                                                        </Form>
                                                        </Col>
                                                    </Row>
                                                     </Card.Body>
                                                     </Card>
                                    )
                                    :
                                    (
                                        <Card
                                            bg='Success'
                                            key='1'
                                            text='dark'
                                            style={{ width: '38rem' }}
                                            className="mb-4"
                                            border="primary"
                                        >
                                        <Card.Header className="text-left"><h3>Asked by {author.name}</h3></Card.Header>
                                        <Card.Body>
                                         <Row>
                                            <Col>  
                                                <img className='question-user-picture' alt='User' src={author.avatarURL} />
                                            </Col>
                                            <Col>
                                            <Card.Title className='text-left'>Results:</Card.Title>
                                                            <Alert variant="success">
                                                                <Alert.Heading className="text-left">{questionItem.optionOne.text}</Alert.Heading>
                                                                <hr />
                                                                <span>
                                                                    <b>{actualvotesOptionOne} </b>({' '+pOptionOne + '% '}) - out of {actualvotes} votes<hr />
                                                                    {userAnswer==='optionOne' ? (<span style={{'color':'red','fontSize':'30px'}}><b>- YOUR VOTE -</b></span>):(<span></span>)}
                                                                </span>
                                                            </Alert>
                                                            <hr />
                                                            <Alert variant="warning">
                                                                <Alert.Heading className="text-left">{questionItem.optionTwo.text}</Alert.Heading>
                                                                <hr />
                                                                <span>
                                                                    <b>{actualvotesOptionTwo} </b>({' '+pOptionTwo + '% '}) - out of {actualvotes} votes<hr />
                                                                    {userAnswer==='optionTwo' ? (<span style={{'color':'red','fontSize':'30px'}}><b>- YOUR VOTE -</b></span>):(<span></span>)}
                                                                </span>
                                                            </Alert>
                                                        </Col>
                                                    </Row>
                                         </Card.Body>
                                         </Card>
            )}
                            
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

    const actualvotes = questionItem.optionOne.votes.length + questionItem.optionTwo.votes.length
    const actualvotesOptionOne = (questionItem && questionItem.optionOne.votes) ? questionItem.optionOne.votes.length : 0
    const pOptionOne = ((actualvotesOptionOne / actualvotes) * 100).toFixed(1)
    const actualvotesOptionTwo = (questionItem && questionItem.optionTwo.votes) ? questionItem.optionTwo.votes.length : 0
    const pOptionTwo = ((actualvotesOptionTwo / actualvotes) * 100).toFixed(1)

    const userAnswer =  users[authedUser].answers[id]

    return {
        authedUser,
        author,
        questionItem,
        questionAnswered,
        actualvotes,
        actualvotesOptionOne,
        pOptionOne,
        actualvotesOptionTwo,
        pOptionTwo,
        userAnswer,
    }
}


export default connect(mapStateToProps)(QuestionDetail)