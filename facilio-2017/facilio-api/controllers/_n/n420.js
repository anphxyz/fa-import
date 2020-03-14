/**
 * N420 controller
 * @author Linhnc - 5/12/2017
*/

const N420_MODEL = require('../../models/_n/n420_model'),
  FController = require('../fcontroller');

module.exports = class N420 extends FController {

  constructor() {
    this.n420_model = new N420_MODEL()
  }

  _listOfTabN420(req, res) { this.n420_model._listOfTabN420(req.query, rs => res.send(rs)) }
  _listOfTabN420OEE(req, res) { this.n420_model._listOfTabN420OEE(req.query, rs => res.send(rs)) }
  _listOfTabN420OEEY(req, res) { this.n420_model._listOfTabN420OEEY(req.query, rs => res.send(rs)) }
  _insertTabN420(req, res) { this.n420_model._insertTabN420(req.body, rs => res.send(rs)) }
  _insertTabN420OEE(req, res) { this.n420_model._insertTabN420OEE(req.body, rs => res.send(rs)) }
  _insertTabN420END(req, res) { this.n420_model._insertTabN420END(req.body, rs => res.send(rs)) }

}
