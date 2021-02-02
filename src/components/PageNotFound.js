import {Component} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class PageNotFound extends Component{
    render(){
        return(
            
            <Container fluid>
                <br />
                <Row>
                    <Col sm={1}></Col>
                    <Col>
                        <center>
                            <h2 style={{'color':'red','fontSize':'20rem'}}>404</h2>
                            <hr />
                            <h3> - Page not found - </h3>
                        </center>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        )
    }
}

export default PageNotFound