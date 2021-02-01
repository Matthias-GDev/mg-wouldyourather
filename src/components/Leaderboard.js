import { Component } from 'react'
import { connect } from 'react-redux'
import { Container,Row,Col,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Leaderboard extends Component{
    render(){
        
        const { allUsers } = this.props

        return(
            
            <Container fluid>
                <br />
                <br />
                <Row>
                    <Col sm={3}></Col>
                    <Col>
                         {allUsers.map((user,index) => (
                            <li style={{'listStyle':'none'}} key={user.id}>
                                <Card
                                    bg='Success'
                                    key='1'
                                    text='dark'
                                    style={{ width: '38rem' }}
                                    className="mb-4"
                                    border="primary"
                                    >
                                    <Card.Header><h2>{index===0?'#1 - ':'' || index===1?'#2 - ':'' || index===2?'#3 - ':''}{user.name}</h2></Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <img className='question-user-picture' alt='User' src={user.avatarURL} />
                                            </Col>
                                            <Col>
                                                <br />
                                                <span>Answered questions <br /><b>{Object.keys(user.answers).length}</b></span><br /><hr />
                                                <span>Created questions <br /><b>{user.questions.length}</b></span>
                                            </Col>
                                            <Col className='text-center'>
                                                <span>Points</span><br />
                                                <span style={{'color':'green','fontSize':'6rem'}}>{user.points}</span>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </li>
                          ))}

                    </Col>
                    <Col sm={3}></Col>
                </Row>
                <br />
                <br />
            </Container>
        )
    }
}


function mapStateToProps({users}) {

    const allUsers = Object.values(users)
    allUsers.map( (user) => user.points = Object.keys(user.answers).length + user.questions.length )
    allUsers.sort( (a, b) => b.points - a.points)

    return {
        allUsers
    }
}

export default connect(mapStateToProps)(Leaderboard)