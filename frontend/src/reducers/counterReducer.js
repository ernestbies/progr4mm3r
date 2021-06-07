export const INCREMENT_VALUE = 'INCREMENT_VALUE';

const initialState = {
    counter: 0
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_VALUE:
            return { ...state, counter: state.counter + 1 };
        default:
            return state;
    }
};
