'use strict';

const controller = require('lib/wiring/controller');

/* GET home page. */
const root = (req, res) => {
  res.json({
    index: {
      title: 'project-3-api',
      environment: req.app.get('env'),
    },
  });
};

module.exports = controller({
  root,
});
