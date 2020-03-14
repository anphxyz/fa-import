/**
 * C150 controller
 * @author Linhnc - 5/12/2017
*/

const C150_MODEL = require('../../models/_c/c150_model',
  FController = require('../fcontroller');

module.exports = class C150 extends FController {

  constructor() {
    this.c150_model = new C150_MODEL()
  }

  _listOfTabC150C        (req, res) { this.c150_model._listOfTabC150C        (req.query, rs => res.send(rs)) }
  _listOfTabC150S        (req, res) { this.c150_model._listOfTabC150S        (req.query, rs => res.send(rs)) }
  _listOfTabC150PER      (req, res) { this.c150_model._listOfTabC150PER      (req.query, rs => res.send(rs)) }
  _getRowCountC150       (req, res) { this.c150_model._getRowCountC150       (req.body, rs => res.send(rs)) }
  _getTodoDayOfC150      (req, res) { this.c150_model._getTodoDayOfC150      (req.body, rs => res.send(rs)) }
  _getTodoPercentage     (req, res) { this.c150_model._getTodoPercentage     (req.body, rs => res.send(rs)) }
  _getTodoDayOfParent    (req, res) { this.c150_model._getTodoDayOfParent    (req.body, rs => res.send(rs)) }
  _getTodoPercForParent  (req, res) { this.c150_model._getTodoPercForParent  (req.body, rs => res.send(rs)) }
  _setFS200OfC150        (req, res) { this.c150_model._setFS200OfC150        (req.body, rs => res.send(rs)) }
  _insertTabC150         (req, res) { this.c150_model._insertTabC150         (req.body, rs => res.send(rs)) }
  _setCompletedC150      (req, res) { this.c150_model._setCompletedC150      (req.body, rs => res.send(rs)) }
  _stornoTabC150_p2      (req, res) { this.c150_model._stornoTabC150_p2      (req.body, rs => res.send(rs)) }
  _stornoTabC150_p3      (req, res) { this.c150_model._stornoTabC150_p3      (req.body, rs => res.send(rs)) }
  _updateTabC150_p4      (req, res) { this.c150_model._updateTabC150_p4      (req.body, rs => res.send(rs)) }
  _updateTabC150_p5      (req, res) { this.c150_model._updateTabC150_p5      (req.body, rs => res.send(rs)) }
  _updateTabC150_p6      (req, res) { this.c150_model._updateTabC150_p6      (req.body, rs => res.send(rs)) }

}
