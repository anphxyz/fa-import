/**
 * S200 Router
 * @author Linhnc - 5/12/2017
 */
const S200 = require('../../controllers/_s/s200.js')

module.exports = (app) => {

  this.ctrlS200 = new S200()

  // http://devlg.smooveo.com:3010/s200/list_oftabs200ht?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=2&pnLIMIT=10
  app.get('/s200/list_oftabs200ht', (req, res) => { this.ctrlS200._listOfTabS200HT(req, res) })
  // http://devlg.smooveo.com:3010/s200/insert_tabs200_p4
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/s200/insert_tabs200_p4', (req, res) => { this.ctrlS200._insertTabS200_p4(req, res) })      //loi
  // http://devlg.smooveo.com:3010/s200/insert_tabs200_p26
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/s200/insert_tabs200_p26', (req, res) => { this.ctrlS200._insertTabS200_p26(req, res) })
  // http://devlg.smooveo.com:3010/s200/storno_tabs200
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/s200/storno_tabs200', (req, res) => { this.ctrlS200._stornoTabS200(req, res) })

}
