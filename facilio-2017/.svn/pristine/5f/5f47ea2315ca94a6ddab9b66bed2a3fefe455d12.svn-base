/**
 * B350 Router
 * @author Toailq - 5/12/2017
 */
const B350 = require('../../controllers/_b/b350')
module.exports = (app) => {

  this.ctrlB350 = new B350()
// http://devlg.smooveo.com:3010/b350/lst_oftabb350_p7?pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
app.get('/b350/lst_oftabb350_p7', (req, res) => { this.ctrlB350._listOfTabB350_p7(req, res) })
// http://devlg.smooveo.com:3010/b350/lst_oftabb350bt?pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
app.get('/b350/lst_oftabb350bt', (req, res) => { this.ctrlB350._listOfTabB350BT(req, res) })
// http://devlg.smooveo.com:3010/b350/lst_oftabb350_p8?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
app.get('/b350/lst_oftabb350_p8', (req, res) => { this.ctrlB350._listOfTabB350_p8(req, res) })
//---------------faci-------------
app.post('/b350/update_tabb350b', (req, res) => { this.ctrlB350._updateTabB350B(req, res) })
  

}