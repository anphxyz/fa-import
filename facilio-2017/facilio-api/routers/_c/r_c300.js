/**
 * C300 Router
 * @author Linhnc - 5/12/2017
 */
const C300 = require('../../controllers/_c/c300.js')

module.exports = (app) => {

  this.ctrlC300 = new C300()

  // http://devlg.smooveo.com:3010/c300/list_oftabc300c_p6?pvLOGIN=NMKL_FACIADMIN
  app.get('/c300/list_oftabc300c_p6', (req, res) => { this.ctrlC300._listOfTabC300C_p6(req, res) })
  // http://devlg.smooveo.com:3010/c300/list_oftabc300c_p5?pvLOGIN=NMKL_FACIADMIN&pnFC600=CMKL-0004428
  app.get('/c300/list_oftabc300c_p5', (req, res) => { this.ctrlC300._listOfTabC300C_p5(req, res) }) //loi
  // http://devlg.smooveo.com:3010/c300/insert_tabc300pmfast
  // DATA: {"pnFH000":4,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c300/insert_tabc300pmfast', (req, res) => { this.ctrlC300._insertTabC300PMFAST(req, res) })
  // http://devlg.smooveo.com:3010/c300/insert_tabc300cmfast
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c300/insert_tabc300cmfast', (req, res) => { this.ctrlC300._insertTabC300CMFAST(req, res) })
  // http://devlg.smooveo.com:3010/c300/insert_tabc300
  // DATA: {"pnFH000":4,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c300/insert_tabc300', (req, res) => { this.ctrlC300._insertTabC300(req, res) })
  // http://devlg.smooveo.com:3010/c300/storno_tabc300
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c300/storno_tabc300', (req, res) => { this.ctrlC300._stornoTabC300(req, res) })

}
