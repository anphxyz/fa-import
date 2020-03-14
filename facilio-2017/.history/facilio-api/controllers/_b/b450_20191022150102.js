/**
 * B450 controller
 * @author Toailq - 5/12/2017
*/
const B450_MODEL = require('../../models/_b/b450_model');

module.exports = class Toai {
  constructor() {
    this.b450_model = new B450_MODEL();
  }
  _listOfTabB450(req, res) { this.b450_model._listOfTabB450(req.query, rs => res.send(rs)) }
}