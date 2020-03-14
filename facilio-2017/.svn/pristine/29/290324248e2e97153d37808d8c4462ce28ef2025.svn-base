/**
 * C050 Router
 * @author Linhnc - 5/12/2017
 */
const C050 = require('../../controllers/_c/c050.js')

module.exports = (app) => {
  this.ctrlC050 = new C050()

  // http://devlg.smooveo.com:3010/c050/list_oftabc050?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/c050/list_oftabc050', (req, res) => { this.ctrlC050._listOfTabC050(req, res) })
  // http://devlg.smooveo.com:3010/c050/insert_tabc050
  // DATA: {"pnFH000":4,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c050/insert_tabc050', (req, res) => { this.ctrlC050._insertTabC050(req, res) })
  // http://devlg.smooveo.com:3010/c050/storno_tabc050
  // DATA: {"pnFH000":4,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c050/storno_tabc050', (req, res) => { this.ctrlC050._stornoTabC050(req, res) })

}
