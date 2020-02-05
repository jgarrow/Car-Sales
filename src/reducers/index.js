import {
    ADD_FEATURE,
    REMOVE_FEATURE,
    ADD_TO_ADDITIONAL_PRICE,
    SUBTRACT_FROM_ADDITIONAL_PRICE
} from "../actions";

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: "2019 Ford Mustang",
        image:
            "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: []
    },
    additionalFeatures: [
        { id: 1, name: "V-6 engine", price: 1500 },
        { id: 2, name: "Racing detail package", price: 1500 },
        { id: 3, name: "Premium sound system", price: 500 },
        { id: 4, name: "Rear spoiler", price: 250 }
    ]
};

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        state.additionalFeatures.find(
                            feature => feature.id === action.payload
                        )
                    ]
                }
            };
        case REMOVE_FEATURE:
            const carFeatures = [...state.car.features];
            const featureIndex = carFeatures.findIndex(
                feature => feature.id === action.payload
            );
            carFeatures.splice(featureIndex, 1);

            return {
                ...state,
                car: {
                    ...state.car,
                    features: carFeatures
                }
            };
        case ADD_TO_ADDITIONAL_PRICE:
            let addedCosts = 0;

            state.car.features.map(feature => {
                console.log("Initial addedCosts: ", addedCosts);
                addedCosts += feature.price;
                return addedCosts;
            });

            console.log("Final addedCosts: ", addedCosts);

            return {
                ...state,
                additionalPrice: addedCosts
            };
        case SUBTRACT_FROM_ADDITIONAL_PRICE:
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload
            };
        default:
            return state;
    }
};
