/**
 * B350 controller
 * @author Toailq - 5/12/2017
*/
const B350_MODEL = require('../../models/_b/b350_model');

const FController = require('../fcontroller');

module.exports = class Toai {
  constructor() {
    this.b350_model = new B350_MODEL();
  }
  _listOfTabB350_p7 (req, res) { this.b350_model._listOfTabB350_p7 (req.query, rs => res.send(rs)) }
  _listOfTabB350BT  (req, res) { this.b350_model._listOfTabB350BT  (req.query, rs => res.send(rs)) }
  _listOfTabB350_p8 (req, res) { this.b350_model._listOfTabB350_p8 (req.query, rs => res.send(rs)) }
  _updateTabB350B   (req, res) { this.b350_model._updateTabB350B   (req.body, rs => res.send(rs)) }
}