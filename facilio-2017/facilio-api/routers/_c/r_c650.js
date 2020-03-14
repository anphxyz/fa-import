/**
 * C650 Router
 * @author Linhnc - 5/12/2017
 */
const C650 = require('../../controllers/_c/c650.js')

module.exports = (app) => {

  this.ctrlC650 = new C650()

  // http://devlg.smooveo.com:3010/c650/list_oftabc650
  app.get('/c650/list_oftabc650', (req, res) => { this.ctrlC650._listOfTabC650(req, res) })
  // http://devlg.smooveo.com:3010/c650/list_oftabc650r_pv?pvLOGIN=NMKL_FACIADMIN&pnFH000=4
  app.get('/c650/list_oftabc650r_pv', (req, res) => { this.ctrlC650._listOfTabC650R_pv(req, res) })
  // http://devlg.smooveo.com:3010/c650/list_oftabc650r_pn
  app.get('/c650/list_oftabc650r_pn', (req, res) => { this.ctrlC650._listOfTabC650R_pn(req, res) }) //loi
  // http://devlg.smooveo.com:3010/c650/list_oftabc650l_p4
  app.get('/c650/list_oftabc650l_p4', (req, res) => { this.ctrlC650._listOfTabC650L_p4(req, res) })
  // http://devlg.smooveo.com:3010/c650/list_oftabc650l_p10?pnFH000=4
  app.get('/c650/list_oftabc650l_p10', (req, res) => { this.ctrlC650._listOfTabC650L_p10(req, res) })
  // http://devlg.smooveo.com:3010/c650/get_userlisttabc650
  app.post('/c650/get_userlisttabc650', (req, res) => { this.ctrlC650._getUserListTabC650(req, res) })
  // http://devlg.smooveo.com:3010/c650/get_userfromtabc650
  app.post('/c650/get_userfromtabc650', (req, res) => { this.ctrlC650._getUserFromTabC650(req, res) })
  // http://devlg.smooveo.com:3010/c650/get_userfromtabc650c
  app.post('/c650/get_userfromtabc650c', (req, res) => { this.ctrlC650._getUserFromTabC650C(req, res) })
  // http://devlg.smooveo.com:3010/c650/insert_tabc650
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c650/insert_tabc650', (req, res) => { this.ctrlC650._insertTabC650(req, res) })
  // http://devlg.smooveo.com:3010/c650/storno_tabc650
  // DATA: {"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c650/storno_tabc650', (req, res) => { this.ctrlC650._stornoTabC650(req, res) })

}
