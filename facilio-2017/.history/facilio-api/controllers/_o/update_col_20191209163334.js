/**
 * UPDATE_COL controller
 * @author Toailq - 11/01/2018
*/
const UPDATE_COL_MODEL = require('../../models/_o/update_col_model'),
  FController = require('../fcontroller');

module.exports = class UPDATE_COL extends FController {
  constructor() {
    this.update_cod_model = new UPDATE_COL_MODEL();
  }
  _updateColOfTable(req, res) { this.update_cod_model._updateColOfTable(req.body, rs => { res.send(rs) }) }

}