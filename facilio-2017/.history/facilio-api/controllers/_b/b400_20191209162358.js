/**
 * B400 controller
 * @author Toailq - 5/12/2017
*/
const B400_MODEL = require('../../models/_b/b400_model');

const FController = require('../fcontroller');

module.exports = class Toai {
  constructor() {
    this.b400_model = new B400_MODEL();
  }
  _listOfTabB400BS   (req, res) { this.b400_model._listOfTabB400BS   (req.query, rs => res.send(rs)) }
  _listOfTabB400     (req, res) { this.b400_model._listOfTabB400     (req.query, rs => res.send(rs)) }
  _historyTabB400    (req, res) { this.b400_model._historyTabB400    (req.body, rs => res.send(rs)) }
  _updateTabB400_p18 (req, res) { this.b400_model._updateTabB400_p18 (req.body, rs => res.send(rs)) }
  _stornoTabB400     (req, res) { this.b400_model._stornoTabB400     (req.body, rs => res.send(rs)) }
  _updateTabB400_p3  (req, res) { this.b400_model._updateTabB400_p3  (req.body, rs => res.send(rs)) }
  _insertTabB400     (req, res) { this.b400_model._insertTabB400     (req.body, rs => res.send(rs)) }
  _updateTabB400PM   (req, res) { this.b400_model._updateTabB400PM   (req.body, rs => res.send(rs)) }
  _updateTabB400BT   (req, res) { this.b400_model._updateTabB400BT   (req.body, rs => res.send(rs)) }
}