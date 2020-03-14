/**
 * H250 controller
 * @author Linhnc - 5/12/2017
*/

const H250_MODEL = require('../../models/_h/h250_model',
  FController = require('../fcontroller');

module.exports = class H250 extends FController {

  constructor() {
    this.h250_model = new H250_MODEL()
  }

  _listOfTabH250(req, res) { this.h250_model._listOfTabH250(req.query, rs => res.send(rs)) }
  _insertTabH250(req, res) { this.h250_model._insertTabH250(req.body, rs => res.send(rs)) }
  _stornoTabH250(req, res) { this.h250_model._stornoTabH250(req.body, rs => res.send(rs)) }

}
