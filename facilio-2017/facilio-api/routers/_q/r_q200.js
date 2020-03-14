/**
 * Q200 Router
 * @author Toailq - 5/12/2017
 */
const Q200 = require('../../controllers/_q/q200')
module.exports = (app) => {

    this.ctrlQ200 = new Q200()

    // http://devlg.smooveo.com:3010/q200/lst_oftabq200n?pnFH000=4&pnFH000=4&pvLOGIN=NMKL_FACIADMIN
    //error: ORA-06502: PL/SQL: numric or value error: character ti number conversion error
    app.get('/q200/lst_oftabq200n', (req, res) => { this.ctrlQ200._listOfTabQ200N(req, res) })
    // http://devlg.smooveo.com:3010/q200/lst_tftabq200?pnFH000=4&pvLOGIN=NMKL_FACIADMIN"
    app.get('/q200/lst_tftabq200', (req, res) => { this.ctrlQ200._listOfTabQ200(req, res) })

}