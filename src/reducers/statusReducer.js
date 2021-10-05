import {statusList} from "../utils/information";

export const STATUS_FETCH = 'STATUS_FETCH';
export const STATUS_CONNECT = 'STATUS_CONNECT';
export const STATUS_SOLVE = 'STATUS_SOLVE';
export const STATUS_SEND = 'STATUS_SEND';

export const STATUS_ERROR_CONNECT = 'STATUS_ERROR_CONNECT';
export const STATUS_ERROR_SOLVE = 'STATUS_ERROR_SOLVE';
export const STATUS_ERROR_SEND = 'STATUS_ERROR_SEND';

const initialState = statusList.fetch;

export const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_FETCH:
            return statusList.fetch;
        case STATUS_CONNECT:
            return statusList.connect;
        case STATUS_SOLVE:
            return statusList.solve;
        case STATUS_SEND:
            return statusList.send;
        case STATUS_ERROR_CONNECT:
            return statusList.error_connect;
        case STATUS_ERROR_SOLVE:
            return statusList.error_solve;
        case STATUS_ERROR_SEND:
            return statusList.error_send;
        default:
            return state;
    }
};
