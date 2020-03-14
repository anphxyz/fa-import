/**
 * S250 Router
 * @author Linhnc - 5/12/2017
 */
const S250 = require('../../controllers/_s/s250.js')

module.exports = (app) => {

  this.ctrlS250 = new S250()

  // http://devlg.smooveo.com:3010/s250/list_oftabs250ht?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=2&pnLIMIT=10
  app.get('/s250/list_oftabs250ht', (req, res) => { this.ctrlS250._listOfTabS250HT(req, res) })
  // http://devlg.smooveo.com:3010/s250/insert_tabs250
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/s250/insert_tabs250', (req, res) => { this.ctrlS250._insertTabS250(req, res) })
  // http://devlg.smooveo.com:3010/s250/storno_tabs250
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/s250/storno_tabs250', (req, res) => { this.ctrlS250._stornoTabS250(req, res) })

}
