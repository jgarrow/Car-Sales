export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_TO_ADDITIONAL_PRICE = "ADD_TO_ADDITIONAL_PRICE";
export const SUBTRACT_FROM_ADDITIONAL_PRICE = "SUBTRACT_FROM_ADDITIONAL_PRICE";

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

export const calculateAddToAdditionalPrice = () => {
    return {
        type: ADD_TO_ADDITIONAL_PRICE
    };
};

export const calculateSubtractFromAdditionalPrice = cost => {
    return {
        type: SUBTRACT_FROM_ADDITIONAL_PRICE,
        payload: cost
    };
};
