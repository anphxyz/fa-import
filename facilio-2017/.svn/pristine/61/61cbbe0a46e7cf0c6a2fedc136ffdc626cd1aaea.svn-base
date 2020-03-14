/**
 * V170 Router
 * @author Toailq - 5/12/2017
 */
const V170 = require('../../controllers/_v/v170')
module.exports = (app) => {

    this.ctrlV170 = new V170()

    // http://devlg.smooveo.com:3010/v170/lst_ofpurposdispos?pvLOGIN=NMKL_FACIADMIN
    app.get('/v170/lst_ofpurposdispos', (req, res) => { this.ctrlV170._listOfPurPosDispos(req, res) })
    // http://devlg.smooveo.com:3010/v170/lst_oftabv170ht?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v170/lst_oftabv170ht', (req, res) => { this.ctrlV170._listOfTabV170HT(req, res) })
    // http://devlg.smooveo.com:3010/v170/lst_oftabv170l?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v170/lst_oftabv170l', (req, res) => { this.ctrlV170._listOfTabV170L(req, res) })
    // http://devlg.smooveo.com:3010/v170/lst_oftabv170r?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v170/lst_oftabv170r', (req, res) => { this.ctrlV170._listOfTabV170R(req, res) })
    app.post('/v170/insert_tabv170', (req, res) => { this.ctrlV170._insertTabV170(req, res) })
    app.post('/v170/storno_tabv170', (req, res) => { this.ctrlV170._stornoTabV170(req, res) })


}