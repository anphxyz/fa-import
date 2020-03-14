/**
 * * B275_MODEL
 * @author Toailq - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class B275_MODEL extends Model {
  constructor() {
    super()
  }

  /**
  * Danh sach kiem tra theo Phieu BT
  *  @param pvFB200 
  */
  _listOfTabB275(req_PARAM, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB275',
      pvFB200 = !!req_PARAM.pvFB200 ? req_PARAM.pvFB200 : null

    this.oracleUtilModel._callProcerdure(procName, [pvFB200], callback)
  }

  /** -------------------B2017_FACI-------------- */

  /**
  * -- Danh sach checklist dda kiem tra truc thuoc cong viec bao tri 
  * @param pvFB200                    
  * @param pnFB450
  * @param pnFB400  
  * @param pvBV276  
  * @param pvBV277  
  * @param pnBN278  
  * @param pnBN279  
  * @param pdBD280  
  * @param pdBD281  
  */
  _insertTabB275_p10(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB275',
      pvFB200 = !!req_PARAM.pvFB200 ? req_PARAM.pvFB200 : null,
      pnFB450 = !!req_PARAM.pnFB450 ? +req_PARAM.pnFB450 : 0,
      pnFB400 = !!req_PARAM.pnFB400 ? +req_PARAM.pnFB400 : 0,
      pvBV276 = !!req_PARAM.pvBV276 ? req_PARAM.pvBV276 : null,
      pvBV277 = !!req_PARAM.pvBV277 ? req_PARAM.pvBV277 : null,
      pnBN278 = !!req_PARAM.pnBN278 ? +req_PARAM.pnBN278 : 0,
      pnBN279 = !!req_PARAM.pnBN279 ? +req_PARAM.pnBN279 : 0,
      pdBD280 = !!req_PARAM.pdBD280 ? req_PARAM.pdBD280 : null,
      pdBD281 = !!req_PARAM.pdBD281 ? req_PARAM.pdBD281 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFB200, pnFB450, pnFB400, pvBV276, pvBV277, pnBN278, pnBN279,
      pdBD280, pdBD281, pvLOGIN], callback)
  }

  /**
  * ----- Danh sach checklist dda kiem tra truc thuoc cong viec bao tri ----------
  * ----- Khi cong viec dduoc bao cao hoan thanh 100% ma khong can den checklist -
  * @param pvFB200                    
  * @param pnPERCE
  */
  _insertTabB275_p3_f1(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB275',
      pvFB200 = !!req_PARAM.pvFB200 ? req_PARAM.pvFB200 : null,
      pnPERCE = !!req_PARAM.pnPERCE ? +req_PARAM.pnPERCE : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFB200, pnPERCE, pvLOGIN], callback)
  }

  /**
* ----- Danh sach checklist dda kiem tra truc thuoc cong viec bao tri ----------
* @param pvFB200                    
* @param pvCARRAY
*/
  _insertTabB275_p3_f2(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB275',
      pvFB200 = !!req_PARAM.pvFB200 ? req_PARAM.pvFB200 : null,
      pvCARRAY = !!req_PARAM.pvCARRAY ? req_PARAM.pvCARRAY : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFB200, pvCARRAY, pvLOGIN], callback)
  }
}