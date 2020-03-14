/**
 * V170 controller
 * @author Toailq - 6/12/2017
*/
const V170_MODEL = require('../../models/_v/v170_model'),
  FController = require('../fcontroller');

module.exports = class V170 extends FController {
  constructor() {
    this.v170_model = new V170_MODEL();
  }
  _listOfPurPosDispos(req, res) { this.v170_model._listOfPurPosDispos(req.query, rs => res.send(rs)) }
  _listOfTabV170HT(req, res) { this.v170_model._listOfTabV170HT(req.query, rs => res.send(rs)) }
  _listOfTabV170L(req, res) { this.v170_model._listOfTabV170L(req.query, rs => res.send(rs)) }
  _listOfTabV170R(req, res) { this.v170_model._listOfTabV170R(req.query, rs => res.send(rs)) }
  _insertTabV170(req, res) { this.v170_model._insertTabV170(req.body, rs => res.send(rs)) }
  _stornoTabV170(req, res) { this.v170_model._stornoTabV170(req.body, rs => res.send(rs)) }
}