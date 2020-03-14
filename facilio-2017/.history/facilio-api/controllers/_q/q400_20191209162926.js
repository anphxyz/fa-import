/**
 * Q400 controller
 * @author Toailq - 6/12/2017
*/
const Q400_MODEL = require('../../models/_q/q400_model'),
 FController = require('../fcontroller');

module.exports = class Q400 {
  constructor() {
    this.q400_model = new Q400_MODEL();
  }
  _listOfTabQ400_p1(req, res) {
    this.q400_model._listOfTabQ400_p1(req.query, rs => res.send(rs))
  }
  _listOfTabQ400_p2(req, res) {
    this.q400_model._listOfTabQ400_p2(req.query, rs => res.send(rs))
  }
  _listOfTabQ400_p4(req, res) {
    this.q400_model._listOfTabQ400_p4(req.query, rs => res.send(rs))
  }
}