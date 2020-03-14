/**
 * B400 Router
 * @author Toailq - 5/12/2017
 */
const B400 = require('../../controllers/_b/b400')
module.exports = (app) => {

  this.ctrlB400 = new B400()
// http://devlg.smooveo.com:3010/b400/lst_oftabb400bs?pvLOGIN=NMKL_FACIADMIN
app.get('/b400/lst_oftabb400bs', (req, res) => { this.ctrlB400._listOfTabB400BS(req, res) })
// http://devlg.smooveo.com:3010/b400/lst_oftabb400?pvLOGIN=NMKL_FACIADMIN // lỗi
// cannot read property 'metaData' od null
app.get('/b400/lst_oftabb400', (req, res) => { this.ctrlB400._listOfTabB400(req, res) })
//---------------faci-------------
app.post('/b400/history_tabb400', (req, res) => { this.ctrlB400._historyTabB400(req, res) })
app.post('/b400/update_tabb400_p18', (req, res) => { this.ctrlB400._updateTabB400_p18(req, res) })
app.post('/b400/storno_tabb400', (req, res) => { this.ctrlB400._stornoTabB400(req, res) })
app.post('/b400/update_tabb400_p3', (req, res) => { this.ctrlB400._updateTabB400_p3(req, res) })
app.post('/b400/insert_tabb400', (req, res) => { this.ctrlB400._insertTabB400(req, res) })
//---------------imp-------------
app.post('/b400/update_tabb400pm', (req, res) => { this.ctrlB400._updateTabB400PM(req, res) })
app.post('/b400/update_tabb400bt', (req, res) => { this.ctrlB400._updateTabB400BT(req, res) })
  

}