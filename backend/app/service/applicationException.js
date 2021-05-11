'use strict';

function ApplicationException(error, message) {
  this.error = error;
  this.message = message;
}

module.exports = {
  BAD_REQUEST: { message: 'BAD_REQUEST', code: 400 },
  NOT_FOUND: { message: 'NOT_FOUND', code: 404 },
  FORBIDDEN: { message: 'FORBIDDEN', code: 403 },
  UNAUTHORIZED: { message: 'UNAUTHORIZED', code: 401 },
  ERROR: { message: 'ERROR', code: 500 },
  VALIDATION_FAILURE: { message: 'VALIDATION_FAILURE', code: 406 },
  is(error, errorCode) {
    return error instanceof ApplicationException &&
      (null === errorCode || error.error === errorCode.code || error.error && error.error.code === errorCode.code);
  },
  new: (code, message) => {
    return new ApplicationException(code, message);
  },
  errorHandler(error, h) {
    if (error instanceof ApplicationException) {
      return h.response(error.message || error.error.message || 'Unknown error').code(error.error.code);
    } else {
      console.error(error);
      return h.response().code(500);
    }
  }
};
