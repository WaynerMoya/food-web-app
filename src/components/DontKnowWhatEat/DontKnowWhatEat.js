
/* Importing the React library and the useState hook from the React library. */
import React, { useState } from "react";

/* Importing the components Alert, Button and Modal from the antd library. */
import { Alert, Button, Modal } from 'antd';

/* Importing the ChoiceDish component from the ChoiceDish folder. */
import ChoiceDish from "../ChoiceDish/ChoiceDish";

/* Importing the css file for the component. */
import './DontKnowWhatEat.css'

const DontKnowWhatEat = ({ onChangeValuesDishes }) => {

    /* Creating a state variable called isModalOpen and setting it to false. */
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * When the user clicks the button, the modal will open.
     */
    const showModal = () => {
        setIsModalOpen(true);
    };

    /**
     * It closes the modal.
     */
    const handleOk = () => {
        setIsModalOpen(false);
    };

    /**
     * It sets the state of the modal to false, which closes the modal
     */
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    /* A variable that contains the description of the recommendation. */
    const descriptionRecommendation =
        <div className="description-recommendation">
            <p className="little-description">
                If you don't know what to eat, please use our filter to
                help you choose the best option according to your tastes.
            </p>
            <Button
                className="button-description-recommendation"
                type="primary"
                onClick={showModal}
            >
                Get Recommendation
            </Button>
        </div>

    return (
        <div className="do-not-know-what-eat">
            <Alert
                message="Recommendation"
                description={descriptionRecommendation}
                type="warning"
                showIcon
                closable={false}
            />

            <Modal title="Dishes Recommendation" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ChoiceDish onChangeValuesDishes={onChangeValuesDishes} handleCloseModal={handleCancel} />
            </Modal>
        </div>
    )

}

export default DontKnowWhatEat;