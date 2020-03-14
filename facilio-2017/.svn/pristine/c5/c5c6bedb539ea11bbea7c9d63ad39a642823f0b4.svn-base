/**
 * N400 Router
 * @author Linhnc - 5/12/2017
 */
const N400 = require('../../controllers/_n/n400.js')

module.exports = (app) => {

  this.ctrlN400 = new N400()

  // http://devlg.smooveo.com:3010/n400/list_oftabn400?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/n400/list_oftabn400', (req, res) => { this.ctrlN400._listOfTabN400(req, res) })
  // http://devlg.smooveo.com:3010/n400/storno_tabn400
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n400/storno_tabn400', (req, res) => { this.ctrlN400._stornoTabN400(req, res) })
  // http://devlg.smooveo.com:3010/n400/insert_tabn400
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n400/insert_tabn400', (req, res) => { this.ctrlN400._insertTabN400(req, res) })

}
