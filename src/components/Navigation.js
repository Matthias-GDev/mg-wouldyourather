import '../css/nav.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { Nav,Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {

    render(){

        const userPicture = this.props.loggedInUser ? this.props.loggedInUser.avatarURL : ''
        const userName = this.props.loggedInUser ? this.props.loggedInUser.name : '' 

        return(
            <div>
                <br/> <br/>
                <Container fluid>
                    <Row>
                        <Col sm={1}></Col>
                        <Col>
                            <Nav className="justify-content-center" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link>
                                        <NavLink to='/dashboard' exact activeClassName='active'>
                                            Home
                                        </NavLink>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <NavLink to='/dashboard' exact activeClassName='active'>
                                            New Question
                                        </NavLink>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <NavLink to='/dashboard' exact activeClassName='active'>
                                            Leader Board
                                        </NavLink>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <NavLink to='/logout' exact activeClassName='active'>
                                            Logout
                                        </NavLink>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                        <center>
                                            <div>
                                                {userName}&nbsp;
                                                <img className='nav-user-picture' src={userPicture} />
                                                
                                            </div>
                                        </center>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                  
                </Container>
            </div>
        )
    }
}

function mapStateToProps({authedUser,users},props){
    return{
        authedUser,
        users,
        loggedInUser: users[authedUser]
    }
}


export default connect(mapStateToProps)(Navigation)