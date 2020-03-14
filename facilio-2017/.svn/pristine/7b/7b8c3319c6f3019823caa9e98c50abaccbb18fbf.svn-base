/**
 * C650 controller
 * @author Linhnc - 5/12/2017
*/

const C650_MODEL = require('../../models/_c/c650_model')

module.exports = class C650 {

  constructor() {
    this.c650_model = new C650_MODEL()
  }

  _listOfTabC650(req, res) { this.c650_model._listOfTabC650(req.query, rs => res.send(rs)) }
  _listOfTabC650R_pv(req, res) { this.c650_model._listOfTabC650R_pv(req.query, rs => res.send(rs)) }
  _listOfTabC650R_pn(req, res) { this.c650_model._listOfTabC650R_pn(req.query, rs => res.send(rs)) }
  _listOfTabC650L_p4(req, res) { this.c650_model._listOfTabC650L_p4(req.query, rs => res.send(rs)) }
  _listOfTabC650L_p10(req, res) { this.c650_model._listOfTabC650L_p10(req.query, rs => res.send(rs)) }
  _insertTabC650(req, res) { this.c650_model._insertTabC650(req.body, rs => res.send(rs)) }
  _getUserListTabC650(req, res) { this.c650_model._getUserListTabC650(req.body, rs => res.send(rs)) }
  _getUserFromTabC650(req, res) { this.c650_model._getUserFromTabC650(req.body, rs => res.send(rs)) }
  _getUserFromTabC650C(req, res) { this.c650_model._getUserFromTabC650C(req.body, rs => res.send(rs)) }
  _stornoTabC650(req, res) { this.c650_model._stornoTabC650(req.body, rs => res.send(rs)) }

}
