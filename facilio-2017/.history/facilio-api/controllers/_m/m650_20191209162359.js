/**
 * M650 controller
 * @author Toailq - 6/12/2017
*/
const M650_MODEL = require('../../models/_m/m650_model');

const FController = require('../fcontroller');

module.exports = class M650 {
  constructor() {
    this.m650_model = new M650_MODEL();
  }
  _listOfTabM650_p11  (req, res) { this.m650_model._listOfTabM650_p11  (req.query, rs => res.send(rs)) }
  _listOfTabM650_p10  (req, res) { this.m650_model._listOfTabM650_p10  (req.query, rs => res.send(rs)) }
  _listOfTabM650_p9   (req, res) { this.m650_model._listOfTabM650_p9   (req.query, rs => res.send(rs)) }
  _listOfTabM650_p12  (req, res) { this.m650_model._listOfTabM650_p12  (req.query, rs => res.send(rs)) }
  _listOfTabM650_p8   (req, res) { this.m650_model._listOfTabM650_p8   (req.query, rs => res.send(rs)) }
  _listOfTabM650_p7   (req, res) { this.m650_model._listOfTabM650_p7   (req.query, rs => res.send(rs)) }
  _listOfTabM650_p15  (req, res) { this.m650_model._listOfTabM650_p15  (req.query, rs => res.send(rs)) }
  _listOfTabM650S     (req, res) { this.m650_model._listOfTabM650S     (req.query, rs => res.send(rs)) }
  _insertTabM650C     (req, res) { this.m650_model._insertTabM650C     (req.body, rs => res.send(rs)) }
  _stornoTabM650      (req, res) { this.m650_model._stornoTabM650      (req.body, rs => res.send(rs)) }
}