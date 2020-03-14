/**
 * Q350 controller
 * @author Toailq - 6/12/2017
*/
const Q350_MODEL = require('../../models/_q/q350_model');

module.exports = class Q350 {
  constructor() {
    this.q350_model = new Q350_MODEL();
  }
  _listOfTabQ350(req, res) {
    this.q350_model._listOfTabQ350(req.query, rs => res.send(rs))
  }
}