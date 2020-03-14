/**
 * H250 Router
 * @author Linhnc - 5/12/2017
 */
const H250 = require('../../controllers/_h/h250.js')

module.exports = (app) => {

  this.ctrlH250 = new H250()

  // http://devlg.smooveo.com:3010/h250/list_oftabh250?pnFH000=4&pnFH200=10006
  app.get('/h250/list_oftabh250', (req, res) => { this.ctrlH250._listOfTabH250(req, res) })
  // http://devlg.smooveo.com:3010/h250/insert_tabh250
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/h250/insert_tabh250', (req, res) => { this.ctrlH250._insertTabH250(req, res) })
  // http://devlg.smooveo.com:3010/h250/storno_tabh250
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/h250/storno_tabh250', (req, res) => { this.ctrlH250._stornoTabH250(req, res) })

}
