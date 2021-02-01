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
                                <Nav.Item className={{'margin':'10 10 10 10'}}>
                                        <NavLink style={{marginRight: '20px'}} to='/dashboard' exact activeClassName='active'>
                                            Home
                                        </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                        <NavLink style={{marginRight: '20px'}} to='/add' exact activeClassName='active'>
                                            New Question
                                        </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                        <NavLink style={{marginRight: '20px'}} to='/leaderboard' exact activeClassName='active'>
                                            Leader Board
                                        </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                        <NavLink style={{marginRight: '20px'}} to='/logout' exact activeClassName='active'>
                                            Logout
                                        </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                        <center>
                                                {userName!=='' ? (
                                                    <div>
                                                        {userName + ' '}
                                                        <img className='nav-user-picture' alt='nav' src={userPicture} />
                                                    </div>
                                                ) : (
                                                    <p></p>
                                                )}
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