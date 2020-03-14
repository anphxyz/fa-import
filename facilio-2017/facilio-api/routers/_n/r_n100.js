/**
 * N100 Router
 * @author Linhnc - 5/12/2017
 */
const N100 = require('../../controllers/_n/n100.js')

module.exports = (app) => {

  this.ctrlN100 = new N100()

  // http://devlg.smooveo.com:3010/n100/list_oftabn100?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=2&pnLIMIT=10
  app.get('/n100/list_oftabn100', (req, res) => { this.ctrlN100._listOfTabN100(req, res) })
  // http://devlg.smooveo.com:3010/n100/storno_tabn100
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n100/storno_tabn100', (req, res) => { this.ctrlN100._stornoTabN100(req, res) })
  // http://devlg.smooveo.com:3010/n100/insert_tabn100
  // DATA: {"pnFH000":4,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n100/insert_tabn100', (req, res) => { this.ctrlN100._insertTabN100(req, res) })
  // http://devlg.smooveo.com:3010/n100/insert_tabn100bs
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n100/insert_tabn100bs', (req, res) => { this.ctrlN100._insertTabN100BS(req, res) })
  // http://devlg.smooveo.com:3010/n100/check_loginexist
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n100/check_loginexist', (req, res) => { this.ctrlN100._checkLoginExist(req, res) })
  // http://devlg.smooveo.com:3010/n100/update_tabn100_p3
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n100/update_tabn100_p3', (req, res) => { this.ctrlN100._updateTabN100_p3(req, res) })
  // http://devlg.smooveo.com:3010/n100/update_tabn100_p6
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n100/update_tabn100_p6', (req, res) => { this.ctrlN100._updateTabN100_p6(req, res) })

}
