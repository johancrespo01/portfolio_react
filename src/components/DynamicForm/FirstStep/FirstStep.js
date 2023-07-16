import "./FirstStep.css";
import CardFruit from "./CardFruit";
import { Container, Row } from "react-bootstrap";
import { useState} from "react";

export const fruits = [
    {
        id:1,
        icon:"🍦",
        name:"Healado",
        description:"Rico helado",
    },
    {
        id:2,
        icon:"🍰",
        name:"Pastel",
        description:"Momento dulce",
    },
    {
        id:3,
        icon:"🍩",
        name:"Dona",
        description:"Mejor algo màs rico",
    },
    {
        id:4,
        icon:"🍎",
        name:"Manzana",
        description:"Soy saludable",
    },
    {
        id:5,
        icon:"🍕",
        name:"Pizza",
        description:"Pizzaaaaa",
    },
    {
        id:6,
        icon:"🍫",
        name:"Chocolate",
        description:"Solo chocolate, thanks!",
    },
];

export default function FirstStep() {
    const [selectedCard, setSelectedCard] = useState(null);

    const clickCard = (fruit) =>{
        setSelectedCard(fruit.id);
        localStorage.setItem("fruitName", fruit.name);
        localStorage.setItem("iconFruit", fruit.icon);
    };


    return(
        <div>
            <h2>Choose your favorite fruit</h2>
            <h4>Select your fruit and then click the button of "Next Step"</h4>
            <Container className="p-5 text-center">
                <Row>
                    {fruits.map ((fruit, index)=>(
                        <CardFruit
                            fruit={fruit}
                            key={index}
                            clickCard={clickCard}
                            selectedCard={selectedCard}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
    
}
