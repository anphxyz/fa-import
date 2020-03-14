/**
 * V050 controller
 * @author Toailq - 6/12/2017
*/
const V050_MODEL = require('../../models/_v/v050_model');

const FController = require('../fcontroller');

module.exports = class V050 {
  constructor() {
    this.v050_model = new V050_MODEL();
  }
  _listOfTabV050(req, res) {
    this.v050_model._listOfTabV050(req.query, rs => res.send(rs))
  }
  _listOfTabV050FAC(req, res) {
    this.v050_model._listOfTabV050FAC(req.query, rs => res.send(rs))
  }
  _insertTabV050(req, res) {
    this.v050_model._insertTabV050(req.body, rs => res.send(rs))
  }
  _mergeEbsTabV050(req, res) {
    this.v050_model._mergeEbsTabV050(req.body, rs => res.send(rs))
  }
  _stornoTabV050(req, res) {
    this.v050_model._stornoTabV050(req.body, rs => res.send(rs))
  }
}