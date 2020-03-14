/**
 * B050 controller
 * @author Linhnc - 22/12/2017
*/

const B050_MODEL = require('../../models/_r/b050_model')

const fController = require('../fcontroller');

module.exports = class B050 {

  constructor() {
    this.rb050_model = new B050_MODEL()
  }

  _listOfTabB050E(req, res) {
    this.rb050_model._listOfTabB050E(req.query, rs => res.send(rs))
  }

  _reportOfTabB050BS(req, res) {
    this.rb050_model._reportOfTabB050BS(req.query, rs => { res.send(rs) })
  }

  _histOfTabB050(req, res) {
    this.rb050_model._histOfTabB050(req.query, rs => { res.send(rs) })
  }

}