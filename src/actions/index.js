export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const CALCULATE_ADDITIONAL_PRICE = "CALCULATE_ADDITIONAL_PRICE";

export const addFeature = featureId => {
    return {
        type: ADD_FEATURE,
        payload: featureId
    };
};

export const removeFeature = featureId => {
    return {
        type: REMOVE_FEATURE,
        payload: featureId
    };
};

export const calculateAdditionalPrice = () => {
    return {
        type: CALCULATE_ADDITIONAL_PRICE
    };
};
