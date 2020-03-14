/**
 * F000 controller
 * @author Linhnc - 5/12/2017
*/

const F000_MODEL = require('../../models/_f/f000_model')

const FController = require('../fcontroller');

module.exports = class F000 extends FController {

  constructor() {
    this.f000_model = new F000_MODEL()
  }

  _listOfTabF000(req, res) { this.f000_model._listOfTabF000(req.query, rs => res.send(rs)) }

}
