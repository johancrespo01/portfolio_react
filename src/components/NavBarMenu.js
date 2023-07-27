import { Container, Navbar } from "react-bootstrap";

export default function NavBarMenu() {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#!">
                        Portafolio <b>Johan Crespo</b>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Contactame en : {" "}
                            <a href="https://www.linkedin.com/in/johan-crespo-castro-6722b5254" target="_blank">Mi linkedin</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
