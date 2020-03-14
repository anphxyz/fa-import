/**
 * S200 controller
 * @author Linhnc - 5/12/2017
*/

const S200_MODEL = require('../../models/_s/s200_model',
  FController = require('../fcontroller');

module.exports = class S200 {

  constructor() {
    this.s200_model = new S200_MODEL()
  }

  _listOfTabS200HT(req, res) {
    this.s200_model._listOfTabS200HT(req.query, rs => res.send(rs))
  }
  _insertTabS200_p4(req, res) {
    this.s200_model._insertTabS200_p4(req.body, rs => res.send(rs))
  }
  _insertTabS200_p26(req, res) {
    this.s200_model._insertTabS200_p26(req.body, rs => res.send(rs))
  }
  _stornoTabS200(req, res) {
    this.s200_model._stornoTabS200(req.body, rs => res.send(rs))
  }

}
