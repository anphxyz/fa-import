/**
 * Q150 Router
 * @author Toailq - 5/12/2017
 */
const Q150 = require('../../controllers/_q/q150')
module.exports = (app) => {

    this.ctrlQ150 = new Q150()

    // http://devlg.smooveo.com:3010/q150/lst_oftabq150n?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
    app.get('/q150/lst_oftabq150n', (req, res) => { this.ctrlQ150._listOfTabQ150N(req, res) })
    // http://devlg.smooveo.com:3010/q150/lst_oftabq150l?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
    app.get('/q150/lst_oftabq150l', (req, res) => { this.ctrlQ150._listOfTabQ150L(req, res) })
    // http://devlg.smooveo.com:3010/q150/lst_oftabq150r?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
    app.get('/q150/lst_oftabq150r', (req, res) => { this.ctrlQ150._listOfTabQ150R(req, res) })

}