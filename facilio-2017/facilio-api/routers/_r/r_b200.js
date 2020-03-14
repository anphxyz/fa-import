/**
 * RB200 Router
 * @author Linhnc - 5/12/2017
 */
const RB200 = require('../../controllers/_r/b200.js')

module.exports = (app) => {

  this.ctrlRB200 = new RB200()

  // http://devlg.smooveo.com:3010/rb200/report_oftabb200_p6?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/rb200/report_oftabb200_p6', (req, res) => { this.ctrlRB200._reportOfTabB200_p6(req, res) })
  // http://devlg.smooveo.com:3010/rb200/report_oftabb200_p5?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/rb200/report_oftabb200_p5', (req, res) => { this.ctrlRB200._reportOfTabB200_p5(req, res) })
  // http://devlg.smooveo.com:3010/rb200/report_oftabn850f?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/rb200/report_oftabn850f', (req, res) => { this.ctrlRB200._reportOfTabN850F(req, res) })
  // http://devlg.smooveo.com:3010/rb200/report_oftabb200fac?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/rb200/report_oftabb200fac', (req, res) => { this.ctrlRB200._reportOfTabB200FAC(req, res) })        //loi
  // http://devlg.smooveo.com:3010/rb200/report_oftabb200em?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/rb200/report_oftabb200em', (req, res) => { this.ctrlRB200._reportOfTabB200EM(req, res) })          //loi

}
