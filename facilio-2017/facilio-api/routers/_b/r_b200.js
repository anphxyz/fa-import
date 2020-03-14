/**
 * B200 Router
 * @author Toailq - 5/12/2017
 */
const B200 = require('../../controllers/_b/b200')
module.exports = (app) => {

  this.ctrlB200 = new B200()

  // http://devlg.smooveo.com:3010/b200/lst_oftabb200de?pvLOGIN=NMKL_FACIADMIN
  app.get('/b200/lst_oftabb200de', (req, res) => { this.ctrlB200._listOfTabB200DE(req, res) })
  // http://devlg.smooveo.com:3010/b200/lst_oftabb200?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/b200/lst_oftabb200', (req, res) => { this.ctrlB200._listOfTabB200(req, res) })
  // http://devlg.smooveo.com:3010/b200/lst_oftabb200ty?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/b200/lst_oftabb200ty', (req, res) => { this.ctrlB200._listOfTabB200TY(req, res) })
  // http://devlg.smooveo.com:3010/b200/lst_oftabb200bt?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/b200/lst_oftabb200bt', (req, res) => { this.ctrlB200._listOfTabB200BT(req, res) })
  // http://devlg.smooveo.com:3010/b200/lst_oftabb200s?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/b200/lst_oftabb200s', (req, res) => { this.ctrlB200._listOfTabB200S(req, res) })
  app.post('/b200/get_rowcounttabb200', (req, res) => { this.ctrlB200._getRowCountTabB200(req, res) })
  //---------------faci-------------
  app.post('/b200/insert_tabb200bt_p11', (req, res) => { this.ctrlB200._insertTabB200BT_p11(req, res) })
  app.post('/b200/insert_tabb200bt_p13', (req, res) => { this.ctrlB200._insertTabB200BT_p13(req, res) })
  app.post('/b200/insert_tabb200bt_p30', (req, res) => { this.ctrlB200._insertTabB200BT_p30(req, res) }) // no data found
  app.post('/b200/insert_tabb200bt_p6', (req, res) => { this.ctrlB200._insertTabB200BT_p6(req, res) })
  app.post('/b200/insert_tabb200pm', (req, res) => { this.ctrlB200._insertTabB200PM(req, res) })
  app.post('/b200/storno_tabb200', (req, res) => { this.ctrlB200._stornoTabB200(req, res) })

  

}