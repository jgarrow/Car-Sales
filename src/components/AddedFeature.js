import React from "react";

const AddedFeature = props => {
    console.log("feature in AddedFeature: ", props.feature);
    return (
        <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button className="button">X</button>
            {props.feature.name}
        </li>
    );
};

export default AddedFeature;
