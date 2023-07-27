import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/pwc.png";
import imgCourse2 from "../../assets/img/taskReact.png";
import imgCourse3 from "../../assets/img/prime.jpeg";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Pay With Crypto",
            subtitle: "...",
            image: imgCourse1,
            footer: "Visitar",
            link: "https://paywithcryptoapp.com/",
        },
        {
            title: "Task React",
            subtitle: "...",
            image: imgCourse2,
            footer: "Visitar",
            link: "https://github.com/johancrespo01/react_Task_1",
        },
        {
            title: "Servicio 3",
            subtitle: "...",
            image: imgCourse3,
            footer: "Go",
            link: "",
        },
    ];

    return (
        <div className="services p-4 mt-5" id="services">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Desarrollos</h2>
                        <h4 className="pb-3 text-center">
                            Mira algunos de mis trabajos
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
