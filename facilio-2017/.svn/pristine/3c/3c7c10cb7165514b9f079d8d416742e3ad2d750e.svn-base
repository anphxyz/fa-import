/**
 * B275 Router
 * @author Toailq - 5/12/2017
 */
const B275 = require('../../controllers/_b/b275')
module.exports = (app) => {

  this.ctrlB275 = new B275()

  // http://devlg.smooveo.com:3010/b275/lst_oftabb275?pvFB200=null
  // TODO: lỗi database
  app.get('/b275/lst_oftabb275', (req, res) => { this.ctrlB275._listOfTabB275(req, res) })
  //---------------faci-------------
  app.post('/b275/insert_tabt275_p10', (req, res) => { this.ctrlB275._insertTabB275_p10(req, res) })
  app.post('/b275/insert_tabb275_p3_f1', (req, res) => { this.ctrlB275._insertTabB275_p3_f1(req, res) })
  app.post('/b275/insert_tabb275_p3_f2', (req, res) => { this.ctrlB275._insertTabB275_p3_f2(req, res) })

}