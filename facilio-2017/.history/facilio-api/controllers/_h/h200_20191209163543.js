/**
 * H200 controller
 * @author Linhnc - 5/12/2017
*/

const H200_MODEL = require('../../models/_h/h200_model'),
  FController = require('../fcontroller');

module.exports = class H200 extends FController {

  constructor() {
    this.h200_model = new H200_MODEL()
  }

  _listOfTabH200C(req, res) { this.h200_model._listOfTabH200C(req.query, rs => res.send(rs)) }
  _listOfTabH200MA(req, res) { this.h200_model._listOfTabH200MA(req.query, rs => res.send(rs)) }
  _listOfTabH200LO(req, res) { this.h200_model._listOfTabH200LO(req.query, rs => res.send(rs)) }
  _listOfTabH200G(req, res) { this.h200_model._listOfTabH200G(req.query, rs => res.send(rs)) }

}
