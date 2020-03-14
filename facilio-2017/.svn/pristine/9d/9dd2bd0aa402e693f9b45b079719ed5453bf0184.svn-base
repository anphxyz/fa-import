/**
 * RV650 Router
 * @author Linhnc - 5/12/2017
 */
const RV650 = require('../../controllers/_r/v650.js')

module.exports = (app) => {

  this.ctrlRV650 = new RV650()

  // http://devlg.smooveo.com:3010/rv650/report_oftabv650?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/rv650/report_oftabv650', (req, res) => { this.ctrlRV650._reportOfTabV650(req, res) })

}
