/**
 * N420 Router
 * @author Linhnc - 5/12/2017
 */
const N420 = require('../../controllers/_n/n420.js')

module.exports = (app) => {

  this.ctrlN420 = new N420()

  // http://devlg.smooveo.com:3010/n420/list_oftabn420?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/n420/list_oftabn420', (req, res) => { this.ctrlN420._listOfTabN420(req, res) })
  // http://devlg.smooveo.com:3010/n420/list_oftabn420oee?pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/n420/list_oftabn420oee', (req, res) => { this.ctrlN420._listOfTabN420OEE(req, res) })
  // http://devlg.smooveo.com:3010/n420/list_oftabn420Oeey?pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/n420/list_oftabn420Oeey', (req, res) => { this.ctrlN420._listOfTabN420OEEY(req, res) })
  // http://devlg.smooveo.com:3010/n420/insert_tabn420
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n420/insert_tabn420', (req, res) => { this.ctrlN420._insertTabN420(req, res) })
  // http://devlg.smooveo.com:3010/n420/insert_tabn420oee
  // DATA: {"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/n420/insert_tabn420oee', (req, res) => { this.ctrlN420._insertTabN420OEE(req, res) }) //loi
  // http://devlg.smooveo.com:3010/n420/insert_tabn420end
  // DATA: {"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN","pnNN431":2}
  app.post('/n420/insert_tabn420end', (req, res) => { this.ctrlN420._insertTabN420END(req, res) })

}
