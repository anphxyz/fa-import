/**
 * N100 controller
 * @author Linhnc - 5/12/2017
*/

const N100_MODEL = require('../../models/_n/n100_model')

const FController = require('../fcontroller');

module.exports = class N100 extends FController {

  constructor() {
    this.n100_model = new N100_MODEL()
  }

  _listOfTabN100(req, res) { this.n100_model._listOfTabN100(req.query, rs => res.send(rs)) }
  _stornoTabN100(req, res) { this.n100_model._stornoTabN100(req.body, rs => res.send(rs)) }
  _insertTabN100(req, res) { this.n100_model._insertTabN100(req.body, rs => res.send(rs)) }
  _insertTabN100BS(req, res) { this.n100_model._insertTabN100BS(req.body, rs => res.send(rs)) }
  _checkLoginExist(req, res) { this.n100_model._checkLoginExist(req.body, rs => res.send(rs)) }
  _updateTabN100_p3(req, res) { this.n100_model._updateTabN100_p3(req.body, rs => res.send(rs)) }
  _updateTabN100_p6(req, res) { this.n100_model._updateTabN100_p6(req.body, rs => res.send(rs)) }

}
