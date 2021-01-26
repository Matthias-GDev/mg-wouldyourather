import { Component } from 'react'
import { Container,Row,Col,Card,Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Question extends Component{

    render(){

        const userPicture = this.props.loggedInUser ? this.props.loggedInUser.avatarURL : ''
        const userName = "Max Mustermann"

        const optionA = "Option A"
        const optionB = "Option B"

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
                                <Card.Header className="text-left"><h3>{userName} asks:</h3></Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>  
                                            <img className='nav-user-picture' src={userPicture} />
                                        </Col>
                                        <Col>
                                            <Card.Title className='text-left'>Would you rather</Card.Title>
                                            <Card.Text className="text-left">
                                                {optionA} or ...
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

export default Question