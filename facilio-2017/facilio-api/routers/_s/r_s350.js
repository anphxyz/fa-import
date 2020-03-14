/**
 * S350 Router
 * @author Linhnc - 5/12/2017
 */
const S350 = require('../../controllers/_s/s350.js')

module.exports = (app) => {

  this.ctrlS350 = new S350()

  // http://devlg.smooveo.com:3010/s350/list_oftabs350l?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/s350/list_oftabs350l', (req, res) => { this.ctrlS350._listOfTabS350L(req, res) })
  // http://devlg.smooveo.com:3010/s350/list_oftabs350r?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/s350/list_oftabs350r', (req, res) => { this.ctrlS350._listOfTabS350R(req, res) })
  // http://devlg.smooveo.com:3010/s350/list_oftabs350v?pnFH000=4&pnFH200=10006
  app.get('/s350/list_oftabs350v', (req, res) => { this.ctrlS350._listOfTabS350V(req, res) })
  // http://devlg.smooveo.com:3010/s350/insert_tabs350
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/s350/insert_tabs350', (req, res) => { this.ctrlS350._insertTabS350(req, res) })
  // http://devlg.smooveo.com:3010/s350/storno_tabs350
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/s350/storno_tabs350', (req, res) => { this.ctrlS350._stornoTabS350(req, res) })

}
