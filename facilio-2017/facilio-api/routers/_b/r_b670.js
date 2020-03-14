/**
 * B670 Router
 * @author Toailq - 5/12/2017
 */
const B670 = require('../../controllers/_b/b670')
module.exports = (app) => {

  this.ctrlB670 = new B670()

  // http://devlg.smooveo.com:3010/b670/lst_oftabb670?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/b670/lst_oftabb670', (req, res) => { this.ctrlB670._listOfTabB670(req, res) })
  

}