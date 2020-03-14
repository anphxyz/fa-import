/**
 * V050 Router
 * @author Toailq - 5/12/2017
 */
const V050 = require('../../controllers/_v/v050')
module.exports = app => {

    this.ctrlV050 = new V050()

    // http://devlg.smooveo.com:3010/v050/lst_oftabv050?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
    app.get('/v050/lst_oftabv050', (req, res) => { this.ctrlV050._listOfTabV050(req, res) })
    // http://devlg.smooveo.com:3010/v050/lst_oftabv050fac?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v050/lst_oftabv050fac', (req, res) => { this.ctrlV050._listOfTabV050FAC(req, res) })
    app.post('/v050/insert_tabv050', (req, res) => { this.ctrlV050._insertTabV050(req, res) })
    app.post('/v050/merge_ebstabv050', (req, res) => { this.ctrlV050._mergeEbsTabV050(req, res) })
    app.post('/v050/storno_tabv050', (req, res) => { this.ctrlV050._stornoTabV050(req, res) })

}