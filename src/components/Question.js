import { Component } from 'react'
import '../css/question.css';
import { Container,Row,Col,Card,Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'

class Question extends Component{

    render(){

        const { questionItem, author } = this.props;
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
                                    <Row>
                                        <Col>  
                                            <img className='question-user-picture' src={author.avatarURL} />
                                        </Col>
                                        <Col>
                                            <Card.Title className='text-left'>Would you rather</Card.Title>
                                            <Card.Text className="text-left">
                                                {questionItem.optionOne.text} or ...
                                            </Card.Text>
                                            <Form >
                                                <Button type="submit" variant="primary" size="lg" block>
                                                    View Poll
                                                </Button>
                                            </Form>
                                        </Col>
                                    </Row>
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

function mapStateToProps({ authedUser, questions, users },{ id }) {

    const questionItem = questions[id]
    const author = questionItem ? users[questionItem.author] : null

    return {
        authedUser,
        questionItem,
        author
    }
}

export default connect(mapStateToProps)(Question)