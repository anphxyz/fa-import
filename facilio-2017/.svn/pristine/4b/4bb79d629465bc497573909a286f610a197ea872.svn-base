/**
 * * B450_MODEL
 * @author Toailq - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class B450_MODEL extends Model {
  constructor() {
    super()
  }

  /**
  * DANH SACH CONG VIEC BAO TRI CHO TUNG MAY (FB050)
  *  @param pnFH000  
  *  @param pnFH200 -- cho ca Cty | Chi nhanh | Phan xuong | Lau | Line 
  *  @param pnFB400
  *  @param pvLOGIN
    
  */
  _listOfTabB450(req_PARAM, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB450',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB400 = !!req_PARAM.pnFB400 ? +req_PARAM.pnFB400 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null


    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB400, pvLOGIN], callback)
  }
}