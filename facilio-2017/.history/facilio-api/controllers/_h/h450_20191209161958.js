/**
 * H450 controller
 * @author Linhnc - 5/12/2017
*/

const H450_MODEL = require('../../models/_h/h450_model')

const fController = require('../fcontroller');

module.exports = class H450 {

  constructor() {
    this.h450_model = new H450_MODEL()
  }

  _insertTabH450F   (req, res) { this.h450_model._insertTabH450F   (req.body, rs => res.send(rs)) }
  _stornoTabH450    (req, res) { this.h450_model._stornoTabH450    (req.body, rs => res.send(rs)) }
  _updateTabH450    (req, res) { this.h450_model._updateTabH450    (req.body, rs => res.send(rs)) }
  _updateTabH450OEE (req, res) { this.h450_model._updateTabH450OEE (req.body, rs => res.send(rs)) }

}
