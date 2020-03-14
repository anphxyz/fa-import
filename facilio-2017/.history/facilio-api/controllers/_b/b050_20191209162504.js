/**
 * B050 controller
 * @author Toailq - 5/12/2017
*/
const B050_MODEL = require('../../models/_b/b050_model');

const FController = require('../fcontroller');

module.exports = class B050 extends FController {
  constructor() {
    this.b050_model = new B050_MODEL();
  }

  _listOfTabB050        (req, res) { this.b050_model._listOfTabB050        (req.query, rs => res.send(rs)) }
  _listOfTabB050S       (req, res) { this.b050_model._listOfTabB050S       (req.query, rs => res.send(rs)) }
  _listOfTabB050BS       (req, res) { this.b050_model._listOfTabB050BS     (req.query, rs => res.send(rs)) }
  _listOfTabB050HT      (req, res) { this.b050_model._listOfTabB050HT      (req.query, rs => res.send(rs)) }
  _insertTabB050        (req, res) { this.b050_model._insertTabB050        (req.body, rs => res.send(rs)) }
  _getTypOfTabB050      (req, res) { this.b050_model._getTypOfTabB050      (req.body, rs => res.send(rs)) }
  _checkStatOfTabB050   (req, res) { this.b050_model._checkStatOfTabB050   (req.body, rs => res.send(rs)) }
  _checkLimiOfTabB050   (req, res) { this.b050_model._checkLimiOfTabB050   (req.body, rs => res.send(rs)) }
  _getProjectList       (req, res) { this.b050_model._getProjectList       (req.body, rs => res.send(rs)) }
  _tasksOfTabB050       (req, res) { this.b050_model._tasksOfTabB050       (req.body, rs => res.send(rs)) }
  _createPMTab050BT     (req, res) { this.b050_model._createPMTab050BT     (req.body, rs => res.send(rs)) }
  _checkExTabB050       (req, res) { this.b050_model._checkExTabB050       (req.body, rs => res.send(rs)) }
  _insertTabB050_p7     (req, res) { this.b050_model._insertTabB050_p7     (req.body, rs => res.send(rs)) }
  _insertTabB050_p17    (req, res) { this.b050_model._insertTabB050_p17    (req.body, rs => res.send(rs)) }
  _insertTabB050_p18    (req, res) { this.b050_model._insertTabB050_p18    (req.body, rs => res.send(rs)) }
  _insertTabB050ADD     (req, res) { this.b050_model._insertTabB050ADD     (req.body, rs => res.send(rs)) }
  _insertTabB050BT_p10  (req, res) { this.b050_model._insertTabB050BT_p10  (req.body, rs => res.send(rs)) }
  _insertTabB050BT_p19  (req, res) { this.b050_model._insertTabB050BT_p19  (req.body, rs => res.send(rs)) }
  _updateTabB050HT      (req, res) { this.b050_model._updateTabB050HT      (req.body, rs => res.send(rs)) }
  _updateTabB050BS      (req, res) { this.b050_model._updateTabB050BS      (req.body, rs => res.send(rs)) }
  _updateStatTabB050    (req, res) { this.b050_model._updateStatTabB050    (req.body, rs => res.send(rs)) }
  _updateTabB050_p8     (req, res) { this.b050_model._updateTabB050_p8     (req.body, rs => res.send(rs)) }
  _updateTabB050_p4     (req, res) { this.b050_model._updateTabB050_p4     (req.body, rs => res.send(rs)) }
  _insertTabB050T       (req, res) { this.b050_model._insertTabB050T       (req.body, rs => res.send(rs)) }
  _updateTabB050_p6     (req, res) { this.b050_model._updateTabB050_p6     (req.body, rs => res.send(rs)) }
  _updateTabB050LL      (req, res) { this.b050_model._updateTabB050LL      (req.body, rs => res.send(rs)) }
  _stornoTabB050        (req, res) { this.b050_model._stornoTabB050        (req.body, rs => res.send(rs)) }
  _reactiTabB050_p3     (req, res) { this.b050_model._reactiTabB050_p3     (req.body, rs => res.send(rs)) }
  _insertTabB050PMPOS   (req, res) { this.b050_model._insertTabB050PMPOS   (req.body, rs => res.send(rs)) }
  _insertTabB050BTPOS   (req, res) { this.b050_model._insertTabB050BTPOS   (req.body, rs => res.send(rs)) }

}