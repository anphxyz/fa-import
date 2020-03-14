/**
 * V500 Router
 * @author Toailq - 5/12/2017
 */
const V500 = require('../../controllers/_v/v500')
module.exports = (app) => {

    this.ctrlV500 = new V500()

    // http://devlg.smooveo.com:3010/v500/lst_oftabv500ebs?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v500/lst_oftabv500ebs', (req, res) => { this.ctrlV500._listOfTabV500EBS(req, res) })
    // http://devlg.smooveo.com:3010/v500/lst_oftabv500ebs_p1?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v500/lst_oftabv500ebs_p1', (req, res) => { this.ctrlV500._listOfTabV500EBS_p1(req, res) })
    // http://devlg.smooveo.com:3010/v500/lst_oftabv500ebs_p6?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v500/lst_oftabv500ebs_p6', (req, res) => { this.ctrlV500._listOfTabV500EBS_p6(req, res) })
    // http://devlg.smooveo.com:3010/v500/lst_oftabv500ebs_p7?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v500/lst_oftabv500ebs_p7', (req, res) => { this.ctrlV500._listOfTabV500EBS_p7(req, res) })
    // http://devlg.smooveo.com:3010/v500/lst_oftabv500ein?pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
    app.get('/v500/lst_oftabv500ein', (req, res) => { this.ctrlV500._listOfTabV500EIN(req, res) })
    app.post('/v500/merge_ebstabv500', (req, res) => { this.ctrlV500._mergeEbsTabV500(req, res) })
    app.post('/v500/merge_ebstabv500it', (req, res) => { this.ctrlV500._mergeEbsTabV500IT(req, res) })


}