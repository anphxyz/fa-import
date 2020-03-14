/**
 * B200 controller
 * @author Toailq - 5/12/2017
*/
const B200_MODEL = require('../../models/_b/b200_model'),
 FController = require('../fcontroller');

module.exports = class B200 extends FController {
  constructor() {
    this.b200_model = new B200_MODEL();
  }
  _listOfTabB200DE     (req, res){ this.b200_model._listOfTabB200DE     (req.query, rs => res.send(rs)) }
  _listOfTabB200       (req, res){ this.b200_model._listOfTabB200       (req.query, rs => res.send(rs)) }
  _listOfTabB200TY     (req, res){ this.b200_model._listOfTabB200TY     (req.query, rs => res.send(rs)) }
  _listOfTabB200BT     (req, res){ this.b200_model._listOfTabB200BT     (req.query, rs => res.send(rs)) }
  _listOfTabB200S      (req, res){ this.b200_model._listOfTabB200S      (req.query, rs => res.send(rs)) }
  _getRowCountTabB200  (req, res){ this.b200_model._getRowCountTabB200  (req.body, rs => res.send(rs)) }
  _insertTabB200BT_p11 (req, res){ this.b200_model._insertTabB200BT_p11 (req.body, rs => res.send(rs)) }
  _insertTabB200BT_p13 (req, res){ this.b200_model._insertTabB200BT_p13 (req.body, rs => res.send(rs)) }
  _insertTabB200BT_p30 (req, res){ this.b200_model._insertTabB200BT_p30 (req.body, rs => res.send(rs)) }
  _insertTabB200BT_p6  (req, res){ this.b200_model._insertTabB200BT_p6  (req.body, rs => res.send(rs)) }
  _insertTabB200PM     (req, res){ this.b200_model._insertTabB200PM     (req.body, rs => res.send(rs)) }
  _stornoTabB200       (req, res){ this.b200_model._stornoTabB200       (req.body, rs => res.send(rs)) }
}