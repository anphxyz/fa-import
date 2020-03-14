/**
 * N850 controller
 * @author Linhnc - 5/12/2017
*/

const N850_MODEL = require('../../models/_n/n850_model')

module.exports = class N850 {

  constructor() {
    this.n850_model = new N850_MODEL()
  }

  _listOfTabN850(req, res) {
    this.n850_model._listOfTabN850(req.query, rs => res.send(rs))
  }
  _insertTabN850(req, res) {
    this.n850_model._insertTabN850(req.body, rs => res.send(rs))
  }
  _stornoTabN850(req, res) {
    this.n850_model._stornoTabN850(req.body, rs => res.send(rs))
  }

}
