/**
 * V750 Router
 * @author Toailq - 5/12/2017
 */
const V750 = require('../../controllers/_v/v750')
module.exports = (app) => {

    this.ctrlV750 = new V750()

    // http://devlg.smooveo.com:3010/v750/lst_ofdepartment?pvLOGIN=NMKL_FACIADMIN
    app.get('/v750/lst_ofdepartment', (req, res) => { this.ctrlV750._listOfDepartment(req, res) })
    // http://devlg.smooveo.com:3010/v750/lst_ofemployee?pvLOGIN=NMKL_FACIADMIN
    app.get('/v750/lst_ofemployee', (req, res) => { this.ctrlV750._listOfEmployee(req, res) })
    // http://devlg.smooveo.com:3010/v750/lst_oftabv750?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN // lỗi
    app.get('/v750/lst_oftabv750', (req, res) => { this.ctrlV750._listOfTabV750(req, res) })
    // http://devlg.smooveo.com:3010/v750/lst_oftabv750his?pvLOGIN=NMKL_FACIADMIN
    app.get('/v750/lst_oftabv750his', (req, res) => { this.ctrlV750._listOfTabV750HIS(req, res) })
    app.post('/v750/check_sssetcodeebs', (req, res) => { this.ctrlV750._checkAsseTCodeEBS(req, res) })
    app.post('/v750/combo_rganizationebs', (req, res) => { this.ctrlV750._comBOrganizationEBS(req, res) })
    app.post('/v750/confirm_tabv750', (req, res) => { this.ctrlV750._confirmTabV750(req, res) })
    app.post('/v750/create_tabv750v650', (req, res) => { this.ctrlV750._createTabV750V650(req, res) })  // lỗi no data found
    app.post('/v750/facilioupdates', (req, res) => { this.ctrlV750._fACILIOUPDATEBS(req, res) })
    app.post('/v750/insert_tabv750', (req, res) => { this.ctrlV750._insertTabV750(req, res) }) //lỗi
    app.post('/v750/saciliosend2ebs', (req, res) => { this.ctrlV750._sACILIOSEND2EBS(req, res) })
    app.post('/v750/sendrequest2ebs', (req, res) => { this.ctrlV750._sENDREQUEST2EBS(req, res) })
    app.post('/v750/storno_tabv750', (req, res) => { this.ctrlV750._stornoTabV750(req, res) })
    app.post('/v750/storno_tabv750ebs', (req, res) => { this.ctrlV750._stornoTabV750EBS(req, res) })
    app.post('/v750/update_tabv750ebs_p2', (req, res) => { this.ctrlV750._UpdateTabV750EBS_p2(req, res) })
    app.post('/v750/update_tabv750ebs_p3', (req, res) => { this.ctrlV750._UpdateTabV750EBS_p3(req, res) })


}