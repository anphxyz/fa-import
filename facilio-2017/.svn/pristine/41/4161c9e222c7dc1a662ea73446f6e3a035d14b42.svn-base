/**
 * Q300 Router
 * @author Toailq - 5/12/2017
 */
const Q300 = require('../../controllers/_q/q300')
module.exports = (app) => {

    this.ctrlQ300 = new Q300()

    // http://devlg.smooveo.com:3010/q300/lst_oftabq300_p2?pnFH000=4
    app.get('/q300/lst_oftabq300_p2', (req, res) => { this.ctrlQ300._listOfTabQ300_p2(req, res) })
    // http://devlg.smooveo.com:3010/q300/lst_oftabq300_p4?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
    app.get('/q300/lst_oftabq300_p4', (req, res) => { this.ctrlQ300._listOfTabQ300_p4(req, res) })

}