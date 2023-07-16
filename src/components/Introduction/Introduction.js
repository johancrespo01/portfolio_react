import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";

export default function Introduction() {
    const handleClick = (id) => {
        console.log("Haz dado clic")
    };

    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                            Welcome to my Dynamic Form {" "}
                            <span className="pt-2 pb-4">that you will do everything that you want</span>
                        </h1>
                        <h4 className="d-flex container-actions mt-5">
                            Hi, I'm Iván Devia, im 38 years old and i like make programs an develop with js and JAVA. I like play BaseBall y play drums.
                        </h4>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                                <a href="#content-services"
                                    className="p-3 a-button"
                                >Get in touch</a>
                                <Button className="p-3 a-button">Get in touch</Button>
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
