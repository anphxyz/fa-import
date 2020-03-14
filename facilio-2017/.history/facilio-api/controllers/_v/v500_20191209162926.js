/**
 * V500 controller
 * @author Toailq - 6/12/2017
*/
const V500_MODEL = require('../../models/_v/v500_model'),
 FController = require('../fcontroller');

module.exports = class V500 {
  constructor() {
    this.v500_model = new V500_MODEL();
  }
  _listOfTabV500EBS(req, res) {
    this.v500_model._listOfTabV500EBS(req.query, rs => res.send(rs))
  }
  _listOfTabV500EBS_p1(req, res) {
    this.v500_model._listOfTabV500EBS_p1(req.query, rs => res.send(rs))
  }
  _listOfTabV500EBS_p6(req, res) {
    this.v500_model._listOfTabV500EBS_p6(req.query, rs => res.send(rs))
  }
  _listOfTabV500EBS_p7(req, res) {
    this.v500_model._listOfTabV500EBS_p7(req.query, rs => res.send(rs))
  }
  _listOfTabV500EIN(req, res) {
    this.v500_model._listOfTabV500EIN(req.query, rs => res.send(rs))
  }
  _mergeEbsTabV500(req, res) {
    this.v500_model._mergeEbsTabV500(req.body, rs => res.send(rs))
  }
  _mergeEbsTabV500IT(req, res) {
    this.v500_model._mergeEbsTabV500IT(req.body, rs => res.send(rs))
  }
}