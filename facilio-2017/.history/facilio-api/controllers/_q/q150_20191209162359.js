 /**
 * Q150 controller
 * @author Toailq - 6/12/2017
*/
const Q150_MODEL = require('../../models/_q/q150_model');

const FController = require('../fcontroller');

module.exports = class Q150 {
  constructor() {
    this.q150_model = new Q150_MODEL();
  }
  _listOfTabQ150N(req, res) {
    this.q150_model._listOfTabQ150N(req.query, rs => res.send(rs))
  }
  _listOfTabQ150L(req, res) {
    this.q150_model._listOfTabQ150L(req.query, rs => res.send(rs))
  }
  _listOfTabQ150R(req, res) {
    this.q150_model._listOfTabQ150R(req.query, rs => res.send(rs))
  }
}