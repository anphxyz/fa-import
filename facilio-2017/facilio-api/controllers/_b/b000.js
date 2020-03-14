/**
 * B000 controller
 * @author Toailq - 5/12/2017
*/
const B000_MODEL = require('../../models/_b/b000_model'),
 FController = require('../fcontroller');

module.exports = class B000 extends FController {
  constructor() {
    this.b000_model = new B000_MODEL();
  }
  _listOfTabB000(req, res) { this.b000_model._listOfTabB000(req.query, rs => res.send(rs)) }
  _insertTabB000(req, res) { this.b000_model._insertTabB000(req.body, rs => res.send(rs)) }
  _stornoTabB000(req, res) { this.b000_model._stornoTabB000(req.body, rs => res.send(rs)) }
}