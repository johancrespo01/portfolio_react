import { useState } from "react";
import Select from "react-select";
import "./FourStep.css";

import {
    Col,
    Container,
    FloatingLabel,
    Form,
    Modal,
    Row
} from "react-bootstrap";
import Resume from "../Resume";

const options = [
    { id: 1, value: "feliz", label: "Feliz ❤️" },
    { id: 2, value: "triste", label: "Triste 🖤" },
    { id: 3, value: "nose", label: "No se 💚" },
];

export default function FourStep({ setStep }) {
    const [selectOption, setSelectOption]=useState(null);
    const heart= JSON.stringify(selectOption);
    localStorage.setItem("heart", heart);
    const [modal, setModal] = useState(false);

    return (
        <div>
            <h2>Four Step</h2>
            <h4>How do you feel today?</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5>Moods</h5>
                        <Select
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />
                    </Col>
                </Row>
                <div className="send-form mt-3">
                    <p className="result p-3" onClick={() => setModal(true)}>
                        View result 🙌
                    </p>
                </div>
                {modal && (
                    <Resume showModal={modal} setModal={setModal} setStep={setStep} />
                )}
            </Container>
        </div>
    );
}
