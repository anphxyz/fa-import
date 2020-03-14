/**
 * B670 controller
 * @author Toailq - 5/12/2017
*/
const B670_MODEL = require('../../models/_b/b670_model');

const FController = require('../fcontroller');

module.exports = class B670 extends FController  {
  constructor() {
    this.b670_model = new B670_MODEL();
  }
  _listOfTabB670(req, res) { this.b670_model._listOfTabB670(req.query, rs => res.send(rs)) }
}