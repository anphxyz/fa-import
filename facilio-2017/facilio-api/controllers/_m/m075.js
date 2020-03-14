/**
 * M075 controller
 * @author Toailq - 6/12/2017
*/
const M075_MODEL = require('../../models/_m/m075_model'),
 FController = require('../fcontroller');

module.exports = class M075 extends FController {
  constructor() {
    this.m075_model = new M075_MODEL();
  }
  _listOfTabM075FAC(req, res) { this.m075_model._listOfTabM075FAC(req.query, rs => res.send(rs)) }
}