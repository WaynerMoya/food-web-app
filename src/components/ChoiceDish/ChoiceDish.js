/* Importing the React library and the useState hook from the React library. */
import React, { useState } from 'react';

/* Importing the Button, message, and Steps components from the antd library. */
import { Button, message, Steps } from 'antd';

/* Importing the OptionSelected component from the OptionSelected folder. */
import OptionSelected from '../OptionSelected/OptionSelected';

/* Importing the css file for the ChoiceDish component. */
import './ChoiceDish.css'

/* Destructuring the Step component from the Steps component. */
const { Step } = Steps;


const ChoiceDish = ({
    onChangeValuesDishes,
    handleCloseModal
}) => {

    /* this variable will save preferences of the user */
    const [optionSelected, setOptionSelected] = useState({})

    /* A hook that is used to keep track of the current step. */
    const [current, setCurrent] = useState(0);

    /**
    * It takes the current value of the current variable, adds 1 to it, and then sets the current
    * variable to the new value
    */
    const next = () => {
        setCurrent(current + 1);
    };

    /**
     * It sets the current state to the current state minus one
     */
    const prev = () => {
        setCurrent(current - 1);
    };

    /**
     * It takes an event object as an argument, and then it sets the optionSelected state to the
     * previous state, and then it updates the state with the new value
     * @param e - the event object
     */
    const onChangeOption = (e) => {
        setOptionSelected(prev => ({ ...prev, [e.title]: e.value }))
    }

    const onHandleSearchDishes = () => {

        /* A function that is used to display a message to the user. */
        message.success('Your recommendations were taken into consideration')

        /* A function that is passed down from the parent component. It is used to change the values of
        the dishes. */
        onChangeValuesDishes(optionSelected)

        /* A function that is passed down from the parent component. It is used to close the modal. */
        handleCloseModal()

        /* when the modal close in the case the user click the button to the current page in 0, because 
        whe the user enter again will see the first page on the last onw */
        setCurrent(0)
    }

    const steps = [
        {
            title: 'Temperature',
            content:
                <OptionSelected
                    title="temperature"
                    op1="cold"
                    op2="hot"
                    onChangeOption={onChangeOption}
                    next={next}
                    done={onHandleSearchDishes}
                />,
        },
        {
            title: 'Kind of Type',
            content:
                <OptionSelected
                    title="kind"
                    op1="main"
                    op2="dessert"
                    onChangeOption={onChangeOption}
                    next={next}
                    done={onHandleSearchDishes}
                />,
        },
        {
            title: 'Price Range',
            content:
                <OptionSelected
                    title="price"
                    op1="lowest"
                    op2="highest"
                    onChangeOption={onChangeOption}
                    next={next}
                    done={onHandleSearchDishes}
                />,
        },
    ];

    return (
        <>
            <Steps current={current}>
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current]?.content}</div>
            <div className="steps-action">
                {/** 
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                */}
                {/** 
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={onHandleSearchDishes}>
                        Done
                    </Button>
                )}
                */}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </>
    )
}

/* Exporting the ChoiceDish component. */
export default ChoiceDish;