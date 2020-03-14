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
  _listOfTabB275(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB275',
      pvFB200 = !!params.pvFB200 ? params.pvFB200 : null

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
  _insertTabB275_p10(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB275',
      pvFB200 = !!params.pvFB200 ? params.pvFB200 : null,
      pnFB450 = !!params.pnFB450 ? +params.pnFB450 : 0,
      pnFB400 = !!params.pnFB400 ? +params.pnFB400 : 0,
      pvBV276 = !!params.pvBV276 ? params.pvBV276 : null,
      pvBV277 = !!params.pvBV277 ? params.pvBV277 : null,
      pnBN278 = !!params.pnBN278 ? +params.pnBN278 : 0,
      pnBN279 = !!params.pnBN279 ? +params.pnBN279 : 0,
      pdBD280 = !!params.pdBD280 ? params.pdBD280 : null,
      pdBD281 = !!params.pdBD281 ? params.pdBD281 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFB200, pnFB450, pnFB400, pvBV276, pvBV277, pnBN278, pnBN279,
      pdBD280, pdBD281, pvLOGIN], callback)
  }

  /**
  * ----- Danh sach checklist dda kiem tra truc thuoc cong viec bao tri ----------
  * ----- Khi cong viec dduoc bao cao hoan thanh 100% ma khong can den checklist -
  * @param pvFB200                    
  * @param pnPERCE
  */
  _insertTabB275_p3_f1(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB275',
      pvFB200 = !!params.pvFB200 ? params.pvFB200 : null,
      pnPERCE = !!params.pnPERCE ? +params.pnPERCE : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFB200, pnPERCE, pvLOGIN], callback)
  }

  /**
* ----- Danh sach checklist dda kiem tra truc thuoc cong viec bao tri ----------
* @param pvFB200                    
* @param pvCARRAY
*/
  _insertTabB275_p3_f2(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB275',
      pvFB200 = !!params.pvFB200 ? params.pvFB200 : null,
      pvCARRAY = !!params.pvCARRAY ? params.pvCARRAY : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFB200, pvCARRAY, pvLOGIN], callback)
  }
}