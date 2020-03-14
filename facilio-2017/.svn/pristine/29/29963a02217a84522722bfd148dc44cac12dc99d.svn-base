/**
 * B150 Router
 * @author Toailq - 5/12/2017
 */
const B150 = require('../../controllers/_b/b150')
module.exports = (app) => {

  this.ctrlB150 = new B150()

  // http://devlg.smooveo.com:3010/b150/lst_oftabb150?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/b150/lst_oftabb150', (req, res) => { this.ctrlB150._listOfTabB150(req, res) })
  //---------------faci-------------
  app.post('/b150/insert_tabb150', (req, res) => { this.ctrlB150._insertTabB150(req, res) })
  app.post('/b150/storno_tabb150', (req, res) => { this.ctrlB150._stornoTabB150(req, res) })

}