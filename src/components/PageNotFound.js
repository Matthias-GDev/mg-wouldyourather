import '../css/pagenotfound.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PageNotFound = () => (
    <Container fluid>
        <br />
        <Row>
            <Col sm={1}></Col>
            <Col>
                <center>
                    <h2 className='pagenotfound-title'>404</h2>
                    <hr />
                    <h3> - Page not found - </h3>
                </center>
            </Col>
            <Col sm={1}></Col>
        </Row>
    </Container>
);

export default PageNotFound