/**
 * ADM Router
 * @author Toailq - 6/12/2017
 */
const ADM = require('../../controllers/_a/adm')
module.exports = (app) => {

  this.ctrlADM = new ADM()
  // http://devlg.smooveo.com:3010/adm/exec_rechteliste
  app.get('/adm/exec_rechteliste', (req, res) => { this.ctrlADM._execRechteListe(req, res) })
  app.post('/adm/check_userlogin_p2', (req, res) => { this.ctrlADM._checkUserLogin_p2(req, res) })
  app.post('/adm/check_userlogin_p3', (req, res) => { this.ctrlADM._checkUserLogin_p3(req, res) }) // lỗi
  app.post('/adm/check_userLoginht', (req, res) => { this.ctrlADM._checkUserLoginHT(req, res) }) // lỗi
  app.post('/adm/create_dataq050', (req, res) => { this.ctrlADM._createDataQ050(req, res) })
  app.post('/adm/storno_tabq050', (req, res) => { this.ctrlADM._stornoTabQ050(req, res) }) // lỗi
  app.post('/adm/create_dataq100', (req, res) => { this.ctrlADM._createDataQ100(req, res) })
  app.post('/adm/change_tabq100', (req, res) => { this.ctrlADM._changeTabQ100(req, res) })
  app.post('/adm/create_dataq150_p4', (req, res) => { this.ctrlADM._createDataQ150_p4(req, res) })
  app.post('/adm/create_dataq150_p3', (req, res) => { this.ctrlADM._createDataQ150_p3(req, res) })
  app.post('/adm/storno_dataq150', (req, res) => { this.ctrlADM._stornoDataQ150(req, res) })
  app.post('/adm/create_dataq175', (req, res) => { this.ctrlADM._createDataQ175(req, res) })
  app.post('/adm/storno_dataq175', (req, res) => { this.ctrlADM._stornoDataQ175(req, res) })
  app.post('/adm/create_dataq200_p4', (req, res) => { this.ctrlADM._createDataQ200_p4(req, res) })
  app.post('/adm/create_dataq200_p3', (req, res) => { this.ctrlADM._createDataQ200_p3(req, res) })
  app.post('/adm/storno_dataq200', (req, res) => { this.ctrlADM._stornoDataQ200(req, res) })
  app.post('/adm/create_dataq300', (req, res) => { this.ctrlADM._createDataQ300(req, res) })
  app.post('/adm/storno_dataQ300', (req, res) => { this.ctrlADM._stornoDataQ300(req, res) })
  app.post('/adm/create_dataq350', (req, res) => { this.ctrlADM._createDataQ350(req, res) })
  app.post('/adm/storno_dataq350', (req, res) => { this.ctrlADM._stornoDataQ350(req, res) }) // lỗi
  app.post('/adm/create_dataq400', (req, res) => { this.ctrlADM._createDataQ400(req, res) })
  app.post('/adm/copy_dataofq400', (req, res) => { this.ctrlADM._copyDataOfQ400(req, res) }) // lỗi
  app.post('/adm/storno_dataq400', (req, res) => { this.ctrlADM._stornoDataQ400(req, res) }) // lỗi
  app.post('/adm/can_executefunc', (req, res) => { this.ctrlADM._canExecuteFunc(req, res) })
  app.post('/adm/create_dataq950', (req, res) => { this.ctrlADM._createDataQ950(req, res) })
  app.post('/adm/storno_dataq950', (req, res) => { this.ctrlADM._stornoDataQ950(req, res) })
  app.post('/adm/have_right2exec', (req, res) => { this.ctrlADM._haveRight2Exec(req, res) })
}
