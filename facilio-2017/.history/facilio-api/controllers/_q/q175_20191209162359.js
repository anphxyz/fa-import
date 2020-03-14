/**
 * Q175 controller
 * @author Toailq - 6/12/2017
*/
const Q175_MODEL = require('../../models/_q/q175_model');

const FController = require('../fcontroller');

module.exports = class Q175 {
  constructor() {
    this.q175_model = new Q175_MODEL();
  }
  _listOfTabQ175(req, res) {
    this.q175_model._listOfTabQ175(req.query, rs => res.send(rs))
  }
}