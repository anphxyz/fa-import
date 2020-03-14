/**
 * H200 Router
 * @author Linhnc - 5/12/2017
 */
const H200 = require('../../controllers/_h/h200.js')

module.exports = (app) => {

  this.ctrlH200 = new H200()

  // http://devlg.smooveo.com:3010/h200/list_oftabh200c?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/h200/list_oftabh200c', (req, res) => { this.ctrlH200._listOfTabH200C(req, res) })
  // http://devlg.smooveo.com:3010/h200/list_oftabh200ma?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/h200/list_oftabh200ma', (req, res) => { this.ctrlH200._listOfTabH200MA(req, res) })
  // http://devlg.smooveo.com:3010/h200/list_oftabh200lo?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/h200/list_oftabh200lo', (req, res) => { this.ctrlH200._listOfTabH200LO(req, res) })
  // http://devlg.smooveo.com:3010/h200/list_oftabh200g?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/h200/list_oftabh200g', (req, res) => { this.ctrlH200._listOfTabH200G(req, res) })

}
