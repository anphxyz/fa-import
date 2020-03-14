/**
 * B000 Router
 * @author Toailq - 5/12/2017
 */
const B000 = require('../../controllers/_b/b000')
module.exports = (app) => {

  this.ctrlB000 = new B000()

  // http://devlg.smooveo.com:3010/b000/lst_oftabb000?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/b000/lst_oftabb000', (req, res) => { this.ctrlB000._listOfTabB000(req, res) })
  app.post('/b000/insert_tabb000', (req, res) => { this.ctrlB000._insertTabB000(req, res) })
  app.post('/b000/storno_tabb000', (req, res) => { this.ctrlB000._stornoTabB000(req, res) })
  

}