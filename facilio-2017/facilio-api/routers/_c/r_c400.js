/**
 * C400 Router
 * @author Linhnc - 5/12/2017
 */
const C400 = require('../../controllers/_c/c400.js')

module.exports = (app) => {

  this.ctrlC400 = new C400()

  // http://devlg.smooveo.com:3010/c400/list_oftabc400?pvLOGIN=NMKL_FACIADMIN&pnFH000=4
  app.get('/c400/list_oftabc400', (req, res) => { this.ctrlC400._listOfTabC400(req, res) })
  // http://devlg.smooveo.com:3010/c400/insert_tabc400
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c400/insert_tabc400', (req, res) => { this.ctrlC400._insertTabC400(req, res) })
  // http://devlg.smooveo.com:3010/c400/storno_tabc400
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c400/storno_tabc400', (req, res) => { this.ctrlC400._stornoTabC400(req, res) })

}
