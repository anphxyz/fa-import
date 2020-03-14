/**
 * Q350 Router
 * @author Toailq - 5/12/2017
 */
const Q350 = require('../../controllers/_q/q350')
module.exports = (app) => {

    this.ctrlQ350 = new Q350()

    // http://devlg.smooveo.com:3010/q350/lst_oftabq350?pnFH000=4
    app.get('/q350/lst_oftabq350', (req, res) => { this.ctrlQ350._listOfTabQ350(req, res) })


}