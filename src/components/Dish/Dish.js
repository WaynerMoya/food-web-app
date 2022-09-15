/* Importing the React library from the node_modules folder. */
import React from 'react'

/* Importing the Card component from the antd library. */
import { Card } from 'antd';

/* Importing the Dish.css file. */
import './Dish.css'

/* Destructuring the Meta component from the Card component. */
const { Meta } = Card;

const Dish = ({ dish }) => {
    return (
        <Card
            className='cart-dish'
            hoverable
            style={{ width: '100%', padding: 20 }}
            cover={<img alt="dish-logo" src={dish.image} />}
        >
            <Meta
                title={dish.name}
                description={
                    dish.description.length > 100 ?
                        dish.description.slice(0, 100) + '...' :
                        dish.description
                }
                category={dish.category}
            />
            <div className='extra-features'>
                *{dish.temperature} * {dish.kind} * {dish.price}
            </div>
        </Card>
    )
}

/* Exporting the Dish component so that it can be imported in other files. */
export default Dish;