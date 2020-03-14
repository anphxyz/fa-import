/**
 * N400 controller
 * @author Linhnc - 5/12/2017
*/

const N400_MODEL = require('../../models/_n/n400_model')

module.exports = class N400 {

  constructor() {
    this.n400_model = new N400_MODEL()
  }

  _listOfTabN400(req, res) {
    this.n400_model._listOfTabN400(req.query, rs => res.send(rs))
  }
  _stornoTabN400(req, res) {
    this.n400_model._stornoTabN400(req.body, rs => res.send(rs))
  }
  _insertTabN400(req, res) {
    this.n400_model._insertTabN400(req.body, rs => res.send(rs))
  }

}
