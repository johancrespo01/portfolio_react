import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/service-1.png";
import imgCourse2 from "../../assets/img/service-2.png";
import imgCourse3 from "../../assets/img/guitarra.webp";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Autolavado",
            subtitle: "Vive la mejor experiencia lavando tu vehículo",
            image: imgCourse1,
            footer: "Go to the service ➡️",
            link: "https://pulitocarwash.co/",
        },
        {
            title: "Servicio de telefonia",
            subtitle: "¡Contrata tu Plan de Internet Hogar o lleva tu Celular con un plan Pospago!",
            image: imgCourse2,
            footer: "Go to the service ➡️",
            link: "https://www.movistar.com.co/",
        },
        {
            title: "Curso de guitarra",
            subtitle: "En este curso de guitarra aprenderás a utilizar este instrumento musical",
            image: imgCourse3,
            footer: "Go to the course ➡️",
            link: "https://edutin.com/curso-de-guitarra-3884",
        },
    ];

    return (
        <div className="services p-4 mt-5" id="content-services">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
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
