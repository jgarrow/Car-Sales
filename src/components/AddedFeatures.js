import React from "react";
import { connect } from "react-redux";

import {
    removeFeature,
    calculateSubtractFromAdditionalPrice
} from "../actions";

import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
    const handleRemove = (e, feature) => {
        console.log("In handleRemove");
        e.preventDefault();
        props.removeFeature(feature.id);
        props.calculateSubtractFromAdditionalPrice(feature.price);
    };

    return (
        <div className="content">
            <h6>Added features:</h6>
            {props.car.features.length ? (
                <ol type="1">
                    {props.car.features.map(item => (
                        <AddedFeature
                            key={item.id}
                            feature={item}
                            handleRemove={handleRemove}
                        />
                    ))}
                </ol>
            ) : (
                <p>You can purchase items from the store.</p>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        car: state.car,
        additionalPrice: state.additionalPrice
    };
};

export default connect(mapStateToProps, {
    removeFeature,
    calculateSubtractFromAdditionalPrice
})(AddedFeatures);
