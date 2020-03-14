/**
 * B275 controller
 * @author Toailq - 5/12/2017
*/
const B275_MODEL = require('../../models/_b/b275_model');

const FController = require('../fcontroller');

module.exports = class B275 extends FController  {
  constructor() {
    this.b275_model = new B275_MODEL();
  }
  _listOfTabB275(req, res)        { this.b275_model._listOfTabB275        (req.query, rs => res.send(rs)) }
  _insertTabB275_p10(req, res)    { this.b275_model._insertTabB275_p10    (req.body, rs => res.send(rs)) }
  _insertTabB275_p3_f1(req, res)  { this.b275_model._insertTabB275_p3_f1  (req.body, rs => res.send(rs)) }
  _insertTabB275_p3_f2(req, res)  { this.b275_model._insertTabB275_p3_f2  (req.body, rs => res.send(rs)) }
}