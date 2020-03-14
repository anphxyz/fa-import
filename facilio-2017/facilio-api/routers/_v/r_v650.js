/**
 * V650 Router
 * @author Toailq - 5/12/2017
 */
const V650 = require('../../controllers/_v/v650')
module.exports = app => {

    this.ctrlV650 = new V650()

    // http://devlg.smooveo.com:3010/v650/lst_oftabv650_p2?pvLOGIN=NMKL_FACIADMIN
    app.get('/v650/lst_oftabv650_p2', (req, res) => { this.ctrlV650._listOfTabV650_p2(req, res) })
    // http://devlg.smooveo.com:3010/v650/lst_oftabv650_p9?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v650/lst_oftabv650_p9', (req, res) => { this.ctrlV650._listOfTabV650_p9(req, res) })
    // http://devlg.smooveo.com:3010/v650/lstoftabv650ebs?pvLOGIN=NMKL_FACIADMIN
    app.get('/v650/lstoftabv650ebs', (req, res) => { this.ctrlV650._listOfTabV650EBS(req, res) })
    app.post('/v650/check_bestandaebs', (req, res) => { this.ctrlV650._checkBestandAEBS(req, res) })
    app.post('/v650/insert_tabv650ht_p28', (req, res) => { this.ctrlV650._insertTabV650HT_p28(req, res) })//lỗi
    app.post('/v650/insert_tabv650ht_p30', (req, res) => { this.ctrlV650._insertTabV650HT_p30(req, res) })// lỗi
    app.post('/v650/storno_tabv650', (req, res) => { this.ctrlV650._stornoTabV650(req, res) })
    app.post('/v650/update_tabv650ht', (req, res) => { this.ctrlV650._updateTabV650HT(req, res) })//lỗi


}