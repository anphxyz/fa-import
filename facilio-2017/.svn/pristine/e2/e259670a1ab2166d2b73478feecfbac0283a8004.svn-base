/**
 * V200 Router
 * @author Toailq - 5/12/2017
 */
const V200 = require('../../controllers/_v/v200')
module.exports = (app) => {

    this.ctrlV200 = new V200()

    // http://devlg.smooveo.com:3010/v200/lst_oftabv200fac?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v200/lst_oftabv200fac', (req, res) => { this.ctrlV200._listOfTabV200FAC(req, res) })
    app.post('/v200/merge_ebstabv200', (req, res) => { this.ctrlV200._mergeEbsTabV200(req, res) })


}