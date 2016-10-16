'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Page = models.page;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Page.find()
    .then(pages => res.json({ pages }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Page.findById(req.params.id)
    .then(page => page ? res.json({ page }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let page = Object.assign(req.body.page, {
    _owner: req.currentUser._id,
  });
  Page.create(page)
    .then(page => res.json({ page }))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Page.findOne(search)
    .then(page => {
      if (!page) {
        return next();
      }

      delete req.body._owner;  // disallow owner reassignment.
      return page.update(req.body.page)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Page.findOne(search)
    .then(page => {
      if (!page) {
        return next();
      }

      return page.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: authenticate, except: ['index', 'show'] },
], });
