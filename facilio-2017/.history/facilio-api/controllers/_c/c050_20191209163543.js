/**
 * C050 controller
 * @author Linhnc - 5/12/2017
 */

const C050_MODEL = require('../../models/_c/c050_model'),
  FController = require('../fcontroller');

module.exports = class C050 extends FController {

  constructor() {
    this.c050_model = new C050_MODEL()
  }

  _listOfTabC050(req, res) { this.c050_model._listOfTabC050(req.query, rs => res.send(rs)) }
  _insertTabC050(req, res) { this.c050_model._insertTabC050(req.body, rs => res.send(rs)) }
  _stornoTabC050(req, res) { this.c050_model._stornoTabC050(req.body, rs => res.send(rs)) }

}
