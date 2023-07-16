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
    { id: 1, value: "heart_red", label: "Corazon rojo ❤️" },
    { id: 2, value: "heart_black", label: "Corazon negro 🖤" },
    { id: 3, value: "heart_green", label: "Corazon verde 💚" },
];

export default function FourStep({ setStep }) {
    const [selectOption, setSelectOption]=useState(null);
    const heart= JSON.stringify(selectOption);
    localStorage.setItem("heart", heart);
    const [modal, setModal] = useState(false);

    return (
        <div>
            <h2>Four Step</h2>
            <h4>Do you want to cut a heart?</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5>Select your favorite hearts</h5>
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
