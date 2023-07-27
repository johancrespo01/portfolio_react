import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";
import imgProfile from "../../assets/img/profile.jpg";

export default function Introduction() {
    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                            Johan Crespo {" "}
                            <span className="pt-2 pb-4">Desarrollador FrontEnd</span>
                        </h1>
                        <h4 className="d-flex container-actions mt-2 text-center">
                           Ingeniero de sistemas con màs de 2 años de experiencia en FrontEnd.
                        </h4>
                        <img src={imgProfile} width="200px" className="img_profile"></img>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                                <a href="#services"
                                    className="p-3 a-button"
                                >Algunos desarrollos</a>
                                <Button className="p-3 a-button">Algunos</Button>
                            </div>
                            <div className="btn-start-create">
                                <a href="#dynamic-form">Start to create</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}
