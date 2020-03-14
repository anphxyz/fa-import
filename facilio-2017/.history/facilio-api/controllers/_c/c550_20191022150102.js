/**
 * C550 controller
 * @author Linhnc - 5/12/2017
*/

const C550_MODEL = require('../../models/_c/c550_model')

module.exports = class C550 {

  constructor() {
    this.c550_model = new C550_MODEL()
  }

  _listOfTabC550(req, res) {
    this.c550_model._listOfTabC550(req.query, rs => res.send(rs))
  }

}
