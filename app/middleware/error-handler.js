'use strict';

const debug = require('debug')('project-3-api:error-handler');

const errorHandler = (err, req, res, next) => {
  //jshint unused:false
  const errorResponse = {
    error: {
      message: err.message,
    },
  };

  // include stacktrace
  if (req.app.get('env') === 'development') {
    errorResponse.error.error = err;
    debug(errorResponse);
  }

  res.status(err.status || 500).json(errorResponse);
};

module.exports = errorHandler;
