/**
 * C250 Router
 * @author Linhnc - 5/12/2017
 */
const C250 = require('../../controllers/_c/c250.js')

module.exports = (app) => {

  this.ctrlC250 = new C250()

  // http://devlg.smooveo.com:3010/c250/insert_tabc250
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c250/insert_tabc250', (req, res) => { this.ctrlC250._insertTabC250(req, res) })
  // http://devlg.smooveo.com:3010/c250/storno_tabc250
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/c250/storno_tabc250', (req, res) => { this.ctrlC250._stornoTabC250(req, res) })

}
