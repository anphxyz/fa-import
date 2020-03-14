/**
 * N850 Router
 * @author Linhnc - 5/12/2017
 */
const N850 = require('../../controllers/_n/n850.js')

module.exports = (app) => {

  this.ctrlN850 = new N850()

  // http://devlg.smooveo.com:3010/n850/list_oftabn850?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/n850/list_oftabn850', (req, res) => { this.ctrlN850._listOfTabN850(req, res) })
  // http://devlg.smooveo.com:3010/n850/insert_tabn850
  // DATA: {"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n850/insert_tabn850', (req, res) => { this.ctrlN850._insertTabN850(req, res) })
  // http://devlg.smooveo.com:3010/n850/storno_tabn850
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n850/storno_tabn850', (req, res) => { this.ctrlN850._stornoTabN850(req, res) })

}
