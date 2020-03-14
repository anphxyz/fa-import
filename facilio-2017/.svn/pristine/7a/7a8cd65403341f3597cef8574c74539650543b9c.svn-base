/**
 * H450 Router
 * @author Linhnc - 5/12/2017
 */
const H450 = require('../../controllers/_h/h450.js')

module.exports = (app) => {

  this.ctrlH450 = new H450()

  // http://devlg.smooveo.com:3010/h450/insert_tabh450f
  // DATA: {"pnFH000":4,"pvLOGIN":"NMKL_FACIADMIN","pnFH250":2}
  app.post('/h450/insert_tabh450f', (req, res) => { this.ctrlH450._insertTabH450F(req, res) })
  // http://devlg.smooveo.com:3010/h450/storno_tabh450
  // DATA: {"pnFH000":4,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/h450/storno_tabh450', (req, res) => { this.ctrlH450._stornoTabH450(req, res) })
  // http://devlg.smooveo.com:3010/h450/update_tabh450
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/h450/update_tabh450', (req, res) => { this.ctrlH450._updateTabH450(req, res) })
  // http://devlg.smooveo.com:3010/h450/update_tabh450oee
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/h450/update_tabh450oee', (req, res) => { this.ctrlH450._updateTabH450OEE(req, res) })

}
