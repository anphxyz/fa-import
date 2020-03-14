/**
 * S250 controller
 * @author Linhnc - 5/12/2017
*/

const S250_MODEL = require('../../models/_s/s250_model')

const FController = require('../fcontroller');

module.exports = class S250 {

  constructor() {
    this.s250_model = new S250_MODEL()
  }

  _listOfTabS250HT(req, res) {
    this.s250_model._listOfTabS250HT(req.query, rs => res.send(rs))
  }
  _insertTabS250(req, res) {
    this.s250_model._insertTabS250(req.body, rs => res.send(rs))
  }
  _stornoTabS250(req, res) {
    this.s250_model._stornoTabS250(req.body, rs => res.send(rs))
  }

}
