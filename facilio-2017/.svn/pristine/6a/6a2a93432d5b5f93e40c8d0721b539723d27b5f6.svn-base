/**
 * Q050 Router
 * @author Toailq - 5/12/2017
 */
const Q050 = require('../../controllers/_q/q050')
module.exports = (app) => {

    this.ctrlQ050 = new Q050()

    // http://devlg.smooveo.com:3010/q050/lst_oftabq050?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
    app.get('/q050/lst_oftabq050', (req, res) => { this.ctrlQ050._listOfTabQ050(req, res) })

}
