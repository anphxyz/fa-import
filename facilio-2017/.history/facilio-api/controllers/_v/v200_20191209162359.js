/**
 * V200 controller
 * @author Toailq - 6/12/2017
*/
const V200_MODEL = require('../../models/_v/v200_model');

const FController = require('../fcontroller');

module.exports = class V200 {
  constructor() {
    this.v200_model = new V200_MODEL();
  }
  _listOfTabV200FAC(req, res) {
    this.v200_model._listOfTabV200FAC(req.query, rs => res.send(rs))
  }
  _mergeEbsTabV200(req, res) {
    this.v200_model._mergeEbsTabV200(req.body, rs => res.send(rs))
  }
}