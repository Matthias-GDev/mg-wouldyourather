import { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { Container,Row,Col,Card,Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleSaveNewQuestion } from '../actions/shared'
import { formatQuestion } from '../utils/_DATA'

class NewQuestion extends Component{

    constructor(props){
        super(props)
        this.handleSubmitNewQuestion = this.handleSubmitNewQuestion.bind(this)
        this.handleChangeOption = this.handleChangeOption.bind(this)
        this.state = {
            user_text_option1:'',
            user_text_option2:'',
            toHome:false,
        }
    }

    handleChangeOption = (e,nr) => {
        const text = e.target.value
        this.setState((state) => {
			return nr === 1 ? {...state, user_text_option1: text} : {...state, user_text_option2: text}
		});
    }

    handleSubmitNewQuestion(e)
    {
        e.preventDefault()
        const {user_text_option1,user_text_option2} = this.state
        const option = {'optionOneText':user_text_option1,'optionTwoText':user_text_option2,'author':this.props.authedUser.authedUser}
        this.props.dispatch(handleSaveNewQuestion(formatQuestion(option),this.props.authedUser.authedUser))
        
        this.setState({
        	optionOneText:'',
			optionTwoText:'',
			toHome: true
      	})
    }

    render(){
        const {user_text_option1,user_text_option2,toHome} = this.state

        if (toHome) {
			return <Redirect to='/dashboard' />
		}

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
                                <Card.Header><h2>Create New Question</h2></Card.Header>
                                <Card.Body>
                                    <Card.Text className='text-left'>
                                        Complete the question:
                                        <br />
                                    </Card.Text>
                                    <Card.Title className='text-left'>Would you rather ... </Card.Title>
                                    <br />
                                    <Form onSubmit={this.handleSubmitNewQuestion}>
                                        <Form.Control value={user_text_option1} onChange={(e) => this.handleChangeOption(e,1)} size="lg" type="text" placeholder="Enter Option One Text Here" />
                                        <br />
                                        <span className='create-new-question-or'>OR</span>
                                        <br /><br />
                                        <Form.Control value={user_text_option2} onChange={(e) => this.handleChangeOption(e,2)} size="lg" type="text" placeholder="Enter Option Two Text Here" />
                                        <br /><br />
                                        <Button type="submit" variant="primary" size="lg" block>
                                            Submit
                                        </Button>
                                    </Form>
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

function mapStateToProps(authedUser) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion)