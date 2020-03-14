/**
 * C550 Router
 * @author Linhnc - 5/12/2017
 */
const C550 = require('../../controllers/_c/c550.js')

module.exports = (app) => {

  this.ctrlC550 = new C550()

  // http://devlg.smooveo.com:3010/c550/list_oftabc550
  app.get('/c550/list_oftabc550', (req, res) => { this.ctrlC550._listOfTabC550(req, res) })

}
