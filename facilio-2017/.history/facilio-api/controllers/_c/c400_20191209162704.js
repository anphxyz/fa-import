/**
 * C400 controller
 * @author Linhnc - 5/12/2017
*/

const C400_MODEL = require('../../models/_c/c400_model')

const FController = require('../fcontroller');

module.exports = class C400 extends FController {

  constructor() {
    this.c400_model = new C400_MODEL()
  }

  _listOfTabC400(req, res) { this.c400_model._listOfTabC400(req.query, rs => res.send(rs)) }
  _insertTabC400(req, res) { this.c400_model._insertTabC400(req.body, rs => res.send(rs)) }
  _stornoTabC400(req, res) { this.c400_model._stornoTabC400(req.body, rs => res.send(rs)) }

}
