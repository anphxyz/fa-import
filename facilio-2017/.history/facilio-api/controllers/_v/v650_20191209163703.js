/**
 * V650 controller
 * @author Toailq - 6/12/2017
*/
const V650_MODEL = require('../../models/_v/v650_model'),
 FController = require('../fcontroller');

module.exports = class V650 extends FController {
  constructor() {
    this.v650_model = new V650_MODEL();
  }
  _listOfTabV650_p2(req, res) { this.v650_model._listOfTabV650_p2(req.query, rs => res.send(rs)) }
  _listOfTabV650_p9(req, res) { this.v650_model._listOfTabV650_p9(req.query, rs => res.send(rs)) }
  _listOfTabV650EBS(req, res) { this.v650_model._listOfTabV650EBS(req.query, rs => res.send(rs)) }
  _checkBestandAEBS(req, res) { this.v650_model._checkBestandAEBS(req.body, rs => res.send(rs)) }
  _insertTabV650HT_p28(req, res) { this.v650_model._insertTabV650HT_p28(req.body, rs => res.send(rs)) }
  _insertTabV650HT_p30(req, res) { this.v650_model._insertTabV650HT_p30(req.body, rs => res.send(rs)) }
  _stornoTabV650(req, res) { this.v650_model._stornoTabV650(req.body, rs => res.send(rs)) }
  _updateTabV650HT(req, res) { this.v650_model._updateTabV650HT(req.body, rs => res.send(rs)) }
}