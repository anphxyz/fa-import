/**
 * B150 controller
 * @author Toailq - 5/12/2017
*/
const B150_MODEL = require('../../models/_b/b150_model'),
 FController = require('../fcontroller');

module.exports = class B150 extends FController {
  constructor() {
    this.b150_model = new B150_MODEL();
  }
  _listOfTabB150(req, res) { this.b150_model._listOfTabB150(req.query, rs => res.send(rs)) }
  _insertTabB150(req, res) { this.b150_model._insertTabB150(req.body, rs => res.send(rs)) }
  _stornoTabB150(req, res) { this.b150_model._stornoTabB150(req.body, rs => res.send(rs)) }
}