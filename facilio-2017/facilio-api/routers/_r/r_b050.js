/**
 * B050 Router
 * @author Linhnc - 22/12/2017
 */
const RB050 = require('../../controllers/_r/b050.js')

module.exports = (app) => {

  this.ctrlRB050 = new RB050()

  // http://devlg.smooveo.com:3010/rb050/list_oftabb050e?pvLOGIN=NMKL_FACIADMIN
  app.get('/rb050/list_oftabb050e', (req, res) => { this.ctrlRB050._listOfTabB050E(req, res) })
  // http://devlg.smooveo.com:3010/rb050/report_oftabb050bs?pvLOGIN=NMKL_FACIADMIN
  app.get('/rb050/report_oftabb050bs', (req, res) => { this.ctrlRB050._reportOfTabB050BS(req, res) })
  // http://devlg.smooveo.com:3010/rb050/hist_oftabb050?pvLOGIN=NMKL_FACIADMIN
  app.get('/rb050/hist_oftabb050', (req, res) => { this.ctrlRB050._histOfTabB050(req, res) })


}