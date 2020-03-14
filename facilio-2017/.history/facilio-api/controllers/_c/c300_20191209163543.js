/**
 * C300 controller
 * @author Linhnc - 5/12/2017
*/

const C300_MODEL = require('../../models/_c/c300_model'),
  FController = require('../fcontroller');

module.exports = class C300 extends FController {

  constructor() {
    this.c300_model = new C300_MODEL()
  }

  _listOfTabC300C_p6(req, res) { this.c300_model._listOfTabC300C_p6(req.query, rs => res.send(rs)) }
  _listOfTabC300C_p5(req, res) { this.c300_model._listOfTabC300C_p5(req.query, rs => res.send(rs)) }
  _insertTabC300PMFAST(req, res) { this.c300_model._insertTabC300PMFAST(req.body, rs => res.send(rs)) }
  _insertTabC300CMFAST(req, res) { this.c300_model._insertTabC300CMFAST(req.body, rs => res.send(rs)) }
  _insertTabC300(req, res) { this.c300_model._insertTabC300(req.body, rs => res.send(rs)) }
  _stornoTabC300(req, res) { this.c300_model._stornoTabC300(req.body, rs => res.send(rs)) }

}
