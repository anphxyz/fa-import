/**
 * RV650 controller
 * @author Linhnc - 5/12/2017
*/

const V650_MODEL = require('../../models/_r/v650_model')

module.exports = class RV650 {

  constructor() {
    this.v650_model = new V650_MODEL()
  }

  _reportOfTabV650(req, res) {
    this.rv650_model._reportOfTabV650(req.query, rs => res.send(rs))
  }

}
