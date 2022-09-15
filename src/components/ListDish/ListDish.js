/* Importing the React library. */
import React from "react";

/* Importing the Col and Row components from the antd library. */
import { Col, Row } from 'antd';

/* Importing the Dish component from the Dish folder. */
import Dish from "../Dish/Dish";

/* Importing the CSS file for the ListDish component. */
import './ListDish.css'

const ListDish = ({ dishes }) => {

    /* Mapping the dishes array to Dish components. */
    const renderedDishes = dishes.length > 0 ? dishes.map((dish, index) => {
        return (
            <Col key={index} span={6} className="col-dish">
                <Dish dish={dish} />
            </Col>
        )
    }) : <h3 className="sorry-message">Sorry we do not currently have a plate with the characteristics you provide, please enter a new option.</h3>

    return (
        <div>

            <Row className="list-dishes">
                {renderedDishes}
            </Row>

        </div>
    )
}

/* Exporting the ListDish component. */
export default ListDish;