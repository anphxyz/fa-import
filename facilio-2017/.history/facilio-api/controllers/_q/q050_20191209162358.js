/**
 * Q050 controller
 * @author Toailq - 6/12/2017
*/
const Q050_MODEL = require('../../models/_q/q050_model');

const FController = require('../fcontroller');

module.exports = class Q050 {
  constructor() {
    this.q050_model = new Q050_MODEL();
  }
  _listOfTabQ050(req, res) {
    this.q050_model._listOfTabQ050(req.query, rs => res.send(rs))
  }
}