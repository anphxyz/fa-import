/**
 * N900 Router
 * @author Linhnc - 5/12/2017
 */
const N900 = require('../../controllers/_n/n900.js')

module.exports = (app) => {

  this.ctrlN900 = new N900()

  // http://devlg.smooveo.com:3010/n900/list_oftabn900?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/n900/list_oftabn900', (req, res) => { this.ctrlN900._listOfTabN900(req, res) })
  // http://devlg.smooveo.com:3010/n900/list_oftabn900r?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/n900/list_oftabn900r', (req, res) => { this.ctrlN900._listOfTabN900R(req, res) })
  // http://devlg.smooveo.com:3010/n900/list_oftabn900l?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/n900/list_oftabn900l', (req, res) => { this.ctrlN900._listOfTabN900L(req, res) })
  // http://devlg.smooveo.com:3010/n900/insert_tabn900
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n900/insert_tabn900', (req, res) => { this.ctrlN900._insertTabN900(req, res) })
  // http://devlg.smooveo.com:3010/n900/storno_tabn900
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n900/storno_tabn900', (req, res) => { this.ctrlN900._stornoTabN900(req, res) })

}
