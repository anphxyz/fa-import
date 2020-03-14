/**
 * S350 controller
 * @author Linhnc - 5/12/2017
*/

const S350_MODEL = require('../../models/_s/s350_model')

const fController = require('../fcontroller');

module.exports = class S350 {

  constructor() {
    this.s350_model = new S350_MODEL()
  }

  _listOfTabS350L(req, res) {
    this.s350_model._listOfTabS350L(req.query, rs => res.send(rs))
  }
  _listOfTabS350R(req, res) {
    this.s350_model._listOfTabS350R(req.query, rs => res.send(rs))
  }
  _listOfTabS350V(req, res) {
    this.s350_model._listOfTabS350V(req.query, rs => res.send(rs))
  }
  _insertTabS350(req, res) {
    this.s350_model._insertTabS350(req.body, rs => res.send(rs))
  }
  _stornoTabS350(req, res) {
    this.s350_model._stornoTabS350(req.body, rs => res.send(rs))
  }

}
