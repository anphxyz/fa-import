/**
 * M075 Router
 * @author Toailq - 5/12/2017
 */
const M075 = require('../../controllers/_m/m075')
module.exports = (app) => {

  this.ctrlM075 = new M075()

  // http://devlg.smooveo.com:3010/m075/lst_oftabm075fac?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10 // meta data
  // cannot read property 'metaData' od null
  app.get('/m075/lst_oftabm075fac', (req, res) => { this.ctrlM075._listOfTabM075FAC(req, res) })
  

}