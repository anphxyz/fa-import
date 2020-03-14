/**
 * M065 Router
 * @author Toailq - 5/12/2017
 */
const M065 = require('../../controllers/_m/m650')
module.exports = (app) => {

  this.ctrlM065 = new M065()

  // http://devlg.smooveo.com:3010/m650/lst_oftabm650_p11?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/m650/lst_oftabm650_p11', (req, res) => { this.ctrlM065._listOfTabM650_p11(req, res) })
  // http://devlg.smooveo.com:3010/m650/lst_oftabm650_p10?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/m650/lst_oftabm650_p10', (req, res) => { this.ctrlM065._listOfTabM650_p10(req, res) })
  // http://devlg.smooveo.com:3010/m650/lst_oftabm650_p9?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/m650/lst_oftabm650_p9', (req, res) => { this.ctrlM065._listOfTabM650_p9(req, res) })
  // http://devlg.smooveo.com:3010/m650/lst_oftabm650_p12?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/m650/lst_oftabm650_p12', (req, res) => { this.ctrlM065._listOfTabM650_p12(req, res) })
  // http://devlg.smooveo.com:3010/m650/lst_oftabm650_p8?pvLOGIN=NMKL_FACIADMIN
  app.get('/m650/lst_oftabm650_p8', (req, res) => { this.ctrlM065._listOfTabM650_p8(req, res) })
  // http://devlg.smooveo.com:3010/m650/lst_oftabm650_p7?pvMV660=null
  app.get('/m650/lst_oftabm650_p7', (req, res) => { this.ctrlM065._listOfTabM650_p7(req, res) })
  // http://devlg.smooveo.com:3010/m650/lst_oftabm650_p15?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/m650/lst_oftabm650_p15', (req, res) => { this.ctrlM065._listOfTabM650_p15(req, res) })
  // http://devlg.smooveo.com:3010/m650/lst_oftabm650s?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/m650/lst_oftabm650s', (req, res) => { this.ctrlM065._listOfTabM650S(req, res) })
  app.post('/m650/insert_tabm650c', (req, res) => { this.ctrlM065._insertTabM650C(req, res) })
  app.post('/m650/storno_tabm650', (req, res) => { this.ctrlM065._stornoTabM650(req, res) })
  

}