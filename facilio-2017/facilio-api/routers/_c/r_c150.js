/**
 * C150 Router
 * @author Linhnc - 5/12/2017
 */
const C150 = require('../../controllers/_c/c150.js')

module.exports = (app) => {

  this.ctrlC150 = new C150()

  // http://devlg.smooveo.com:3010/c150/list_oftabc150c?pvLOGIN=NMKL_FACIADMIN&pnFH000=4&pnFH200=10006&pnOFFSET=5&pnLIMIT=10
  app.get('/c150/list_oftabc150c', (req, res) => { this.ctrlC150._listOfTabC150C(req, res) })
  // http://devlg.smooveo.com:3010/c150/list_oftabc150s?pvLOGIN=NMKL_FACIADMIN&pnFH000=4&pnFH200=10006&pnOFFSET=5&pnLIMIT=10
  app.get('/c150/list_oftabc150s', (req, res) => { this.ctrlC150._listOfTabC150S(req, res) })
  // http://devlg.smooveo.com:3010/c150/list_oftabc150per?pvLOGIN=NMKL_FACIADMIN&pnFH000=4&pnFH200=10006&pnOFFSET=5&pnLIMIT=10
  app.get('/c150/list_oftabc150per', (req, res) => { this.ctrlC150._listOfTabC150PER(req, res) })
  // http://devlg.smooveo.com:3010/c150/get_rowcountc150
  // DATA: {"pnFH000":4,"pvLOGIN":"NMKL_FACIADMIN","pnFH200":10006}
  app.post('/c150/get_rowcountc150', (req, res) => { this.ctrlC150._getRowCountC150(req, res) })
  // http://devlg.smooveo.com:3010/c150/get_tododayofc150
  app.post('/c150/get_tododayofc150', (req, res) => { this.ctrlC150._getTodoDayOfC150(req, res) })
  // http://devlg.smooveo.com:3010/c150/get_todopercentage
  app.post('/c150/get_todopercentage', (req, res) => { this.ctrlC150._getTodoPercentage(req, res) })
  // http://devlg.smooveo.com:3010/c150/get_tododayofparent
  app.post('/c150/get_tododayofparent', (req, res) => { this.ctrlC150._getTodoDayOfParent(req, res) })
  // http://devlg.smooveo.com:3010/c150/get_todopercforparent
  app.post('/c150/get_todopercforparent', (req, res) => { this.ctrlC150._getTodoPercForParent(req, res) })
  // http://devlg.smooveo.com:3010/c150/set_fs200Ofc150
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c150/set_fs200Ofc150', (req, res) => { this.ctrlC150._setFS200OfC150(req, res) })
  // http://devlg.smooveo.com:3010/c150/insert_tabc150
  // DATA: {"pnFH000":4,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c150/insert_tabc150', (req, res) => { this.ctrlC150._insertTabC150(req, res) }) //loi
  // http://devlg.smooveo.com:3010/c150/set_completedc150
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c150/set_completedc150', (req, res) => { this.ctrlC150._setCompletedC150(req, res) })
  // http://devlg.smooveo.com:3010/c150/storno_tabc150_p2
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c150/storno_tabc150_p2', (req, res) => { this.ctrlC150._stornoTabC150_p2(req, res) })
  // http://devlg.smooveo.com:3010/c150/storno_tabc150_p3
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c150/storno_tabc150_p3', (req, res) => { this.ctrlC150._stornoTabC150_p3(req, res) })
  // http://devlg.smooveo.com:3010/c150/update_tabc150_p4
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c150/update_tabc150_p4', (req, res) => { this.ctrlC150._updateTabC150_p4(req, res) })
  // http://devlg.smooveo.com:3010/c150/update_tabc150_p5
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c150/update_tabc150_p5', (req, res) => { this.ctrlC150._updateTabC150_p5(req, res) })
  // http://devlg.smooveo.com:3010/c150/update_tabc150_p6
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c150/update_tabc150_p6', (req, res) => { this.ctrlC150._updateTabC150_p6(req, res) })

}
