/**
 * Q300 controller
 * @author Toailq - 6/12/2017
*/
const Q300_MODEL = require('../../models/_q/q300_model');

const fController = require('../fcontroller');

module.exports = class Q300 {
  constructor() {
    this.q300_model = new Q300_MODEL();
  }
  _listOfTabQ300_p2(req, res) {
    this.q300_model._listOfTabQ300_p2(req.query, rs => res.send(rs))
  }
  _listOfTabQ300_p4(req, res) {
    this.q300_model._listOfTabQ300_p4(req.query, rs => res.send(rs))
  }
}