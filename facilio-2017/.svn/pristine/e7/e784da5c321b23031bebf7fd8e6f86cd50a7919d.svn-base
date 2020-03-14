/**
 * B100 Router
 * @author Toailq - 5/12/2017
 */
const B100 = require('../../controllers/_b/b100')
module.exports = (app) => {

  this.ctrlB100 = new B100()

  // http://devlg.smooveo.com:3010/b100/lst_oftabb100_p5?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  // http://devlg.smooveo.com:3010/b100/lst_oftabb100_p6?pnFH000=4
  // http://devlg.smooveo.com:3010/b100/lst_oftabb100bs?pvLOGIN=NMKL_FACIADMIN
  // http://devlg.smooveo.com:3010/b100/lst_oftabb100?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/b100/lst_oftabb100_p5',   (req, res) => this.ctrlB100._listOfTabB100_p5 (req, res) )
  app.get('/b100/lst_oftabb100_p6',   (req, res) => this.ctrlB100._listOfTabB100_p6 (req, res) )
  app.get('/b100/lst_oftabb100',      (req, res) => this.ctrlB100._listOfTabB100    (req, res) )
  app.get('/b100/lst_oftabb100bs',    (req, res) => this.ctrlB100._listOfTabB100BS  (req, res) )
  app.post('/b100/create_tabb100pm',  (req, res) => this.ctrlB100._createTabB100PM  (req, res) )
  app.post('/b100/create_tabb100bt',  (req, res) => this.ctrlB100._createTabB100BT  (req, res) )
  app.post('/b100/update_tabb100',    (req, res) => this.ctrlB100._updateTabB100    (req, res) )
  app.post('/b100/update_Tabb100bt',  (req, res) => this.ctrlB100._updateTabB100BT  (req, res) )
  app.post('/b100/insert_tabb100',    (req, res) => this.ctrlB100._insertTabB100    (req, res) )
  app.post('/b100/storno_tabb100',    (req, res) => this.ctrlB100._stornoTabB100    (req, res) )
  app.post('/b100/insert_tabb100pm',  (req, res) => this.ctrlB100._insertTabB100PM  (req, res) )
  app.post('/b100/insert_tabb100bt',  (req, res) => this.ctrlB100._insertTabB100BT  (req, res) )
  app.post('/b100/update_tabb100pma', (req, res) => this.ctrlB100._updateTabB100PMA (req, res) )
  app.post('/b100/make_big_import',   (req, res) => this.ctrlB100._makeBigImport    (req, res) )
}