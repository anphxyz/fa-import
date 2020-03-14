/**
 * B450 Router
 * @author Toailq - 5/12/2017
 */
const B450 = require('../../controllers/_b/b450')
module.exports = (app) => {

  this.ctrlB450 = new B450()

  // http://devlg.smooveo.com:3010/b450/lst_oftabb450?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/b450/lst_oftabb450', (req, res) => { this.ctrlB450._listOfTabB450(req, res) })
  

}