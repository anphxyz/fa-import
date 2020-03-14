/**
 * Q400 Router
 * @author Toailq - 5/12/2017
 */
const Q400 = require('../../controllers/_q/q400')
module.exports = (app) => {

    this.ctrlQ400 = new Q400()

    // http://devlg.smooveo.com:3010/q400/lst_oftabq400_p1
    app.get('/q400/lst_oftabq400_p1', (req, res) => { this.ctrlQ400._listOfTabQ400_p1(req, res) })
    // http://devlg.smooveo.com:3010/q400/lst_oftabq400_p2?pnFH000=4
    app.get('/q400/lst_oftabq400_p2', (req, res) => { this.ctrlQ400._listOfTabQ400_p2(req, res) })
    // http://devlg.smooveo.com:3010/q400/lst_oftabq400_p4?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
    app.get('/q400/lst_oftabq400_p4', (req, res) => { this.ctrlQ400._listOfTabQ400_p4(req, res) })


}