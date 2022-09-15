
import React, { useState } from "react";

import { Alert, Button, Modal } from 'antd';

import ChoiceDish from "../ChoiceDish/ChoiceDish";

import './DontKnowWhatEat.css'

const DontKnowWhatEat = ({ onChangeValuesDishes }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

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