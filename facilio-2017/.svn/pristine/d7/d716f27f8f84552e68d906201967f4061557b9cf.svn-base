/**
 * UPDATE_COL Router
 * @author Toailq - 11/01/2018
 */
const UPDATE_COL = require('../../controllers/_o/update_col')
module.exports = (app) => {

  this.ctrlUpdateCol = new UPDATE_COL()

  // http://devlg.smooveo.com:3010/update_col/update_coloftable
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/update_col/update_coloftable', (req, res) => { this.ctrlUpdateCol._updateColOfTable(req, res) })
}