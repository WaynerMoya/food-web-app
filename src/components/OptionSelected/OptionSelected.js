/* Importing the React library. */
import React from "react";

/* Importing the Button component from the antd library. */
import { Button } from "antd";

import './OptionSelected.css'

/**
 * This function is a component that is responsible for showing the options that the user can choose,
 * it also has a function that is responsible for sending the information to the father component.
 * @returns A component that has two buttons that when clicked will call the onSelected function.
 */
const OptionSelected = ({
    title,
    op1,
    op2,
    onChangeOption,
    next,
    done
}) => {

    /* When the user selected one option this function will be execute */
    const onSelected = (e) => {

        /* send the parameter title and value to component father to process this information */
        onChangeOption({ title: title, value: e })

        /* I make this validation because price title is the last page, i don't wanna that go to another view */
        if (title === 'price') {
            /* and i wanna finish that */
            done()
            return;
        }

        /* when the new preference was sended it's really important to next page */
        next();
    }

    return (
        <div className='options'>
            <Button
                onClick={() => onSelected(op1)}
            >
                {op1}
            </Button>
            <Button
                onClick={() => onSelected(op2)}
            >
                {op2}
            </Button>
        </div>
    )
}

/* Exporting the component to be used in other files. */
export default OptionSelected;