import React from "react";
import { connect } from "react-redux";

import { calculateAdditionalPrice } from "../actions";

const Header = props => {
    return (
        <>
            <figure className="image is-128x128">
                <img src={props.car.image} alt={props.car.name} />
            </figure>
            <h2>{props.car.name}</h2>
            <p>Amount: ${props.car.price + props.additionalPrice}</p>
        </>
    );
};

const mapStateToProps = state => {
    return {
        car: state.car,
        additionalPrice: state.additionalPrice
    };
};

export default connect(mapStateToProps, { calculateAdditionalPrice })(Header);
