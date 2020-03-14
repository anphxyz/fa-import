/**
 * C250 controller
 * @author Linhnc - 5/12/2017
*/

const C250_MODEL = require('../../models/_c/c250_model')

const fController = require('../fcontroller');

module.exports = class C250 {

  constructor() {
    this.c250_model = new C250_MODEL()
  }

  _insertTabC250(req, res) { this.c250_model._insertTabC250(req.body, rs => res.send(rs)) }
  _stornoTabC250(req, res) { this.c250_model._stornoTabC250(req.body, rs => res.send(rs)) }

}
