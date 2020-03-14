/**
 * Q200 controller
 * @author Toailq - 6/12/2017
*/
const Q200_MODEL = require('../../models/_q/q200_model');

const FController = require('../fcontroller');

module.exports = class Q200 {
  constructor() {
    this.q200_model = new Q200_MODEL();
  }
  _listOfTabQ200N(req, res) {
    this.q200_model._listOfTabQ200N(req.query, rs => res.send(rs))
  }
  _listOfTabQ200(req, res) {
    this.q200_model._listOfTabQ200(req.query, rs => res.send(rs))
  }
}