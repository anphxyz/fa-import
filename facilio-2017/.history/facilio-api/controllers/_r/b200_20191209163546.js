/**
 * RB200 controller
 * @author Linhnc - 5/12/2017
*/

const B200_MODEL = require('../../models/_r/b200_model'),
  FController = require('../fcontroller');

module.exports = class B200 {

  constructor() {
    this.rb200_model = new B200_MODEL()
  }

  _reportOfTabB200_p6(req, res) {
    this.rb200_model._reportOfTabB200_p6(req.query, rs => res.send(rs))
  }
  _reportOfTabB200_p5(req, res) {
    this.rb200_model._reportOfTabB200_p5(req.query, rs => res.send(rs))
  }
  _reportOfTabN850F(req, res) {
    this.rb200_model._reportOfTabN850F(req.query, rs => res.send(rs))
  }
  _reportOfTabB200FAC(req, res) {
    this.rb200_model._reportOfTabB200FAC(req.query, rs => res.send(rs))
  }
  _reportOfTabB200EM(req, res) {
    this.rb200_model._reportOfTabB200EM(req.query, rs => res.send(rs))
  }

}
