/**
 * N900 controller
 * @author Linhnc - 5/12/2017
*/

const N900_MODEL = require('../../models/_n/n900_model')

module.exports = class N900 {

  constructor() {
    this.n900_model = new N900_MODEL()
  }

  _listOfTabN900(req, res) {
    this.n900_model._listOfTabN900(req.query, rs => res.send(rs))
  }
  _listOfTabN900R(req, res) {
    this.n900_model._listOfTabN900R(req.query, rs => res.send(rs))
  }
  _listOfTabN900L(req, res) {
    this.n900_model._listOfTabN900L(req.query, rs => res.send(rs))
  }
  _insertTabN900(req, res) {
    this.n900_model._insertTabN900(req.body, rs => res.send(rs))
  }
  _stornoTabN900(req, res) {
    this.n900_model._stornoTabN900(req.body, rs => res.send(rs))
  }

}
