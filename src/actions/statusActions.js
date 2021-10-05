import {
    STATUS_CONNECT,
    STATUS_ERROR_CONNECT,
    STATUS_ERROR_SEND,
    STATUS_ERROR_SOLVE,
    STATUS_FETCH,
    STATUS_SEND,
    STATUS_SOLVE
} from "../reducers/statusReducer";

const setStatusFetch = () => ({type: STATUS_FETCH});
const setStatusConnect = (isError = false) => ({type: !isError ? STATUS_CONNECT : STATUS_ERROR_CONNECT});
const setStatusSolve = (isError = false) => ({type: !isError ? STATUS_SOLVE : STATUS_ERROR_SOLVE});
const setStatusSend = (isError = false) => ({type: !isError ? STATUS_SEND : STATUS_ERROR_SEND});

export const setStatus = (statusType, isError = false) => {
    switch (statusType) {
        case 'fetch':
            return setStatusFetch();
        case 'connect':
            return setStatusConnect(isError);
        case 'solve':
            return setStatusSolve(isError);
        case 'send':
            return setStatusSend(isError);
        default:
            return setStatusFetch();
    }
};
