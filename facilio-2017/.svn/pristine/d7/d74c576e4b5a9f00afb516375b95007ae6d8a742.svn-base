/**
 * V200_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class V200_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * danh muc don vi tinh FACILIO
  * @param pnFH000  
  * @param pnFH200 
  */
  _listOfTabV200FAC(req_PARAM, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV200FAC",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }
  /**
  * hole die Daten aus dem EBS-System
  * @param pnFH000
  * @param pnFH200
  * @param pvPV200
  * @param pvVV201
  * @param pvVV202
  */
  _mergeEbsTabV200(req_PARAM, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'MergeEbsTabV200',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvPV200 = !!req_PARAM.pvPV200 ? req_PARAM.pvPV200 : null,
      pvVV201 = !!req_PARAM.pvVV201 ? req_PARAM.pvVV201 : null,
      pvVV202 = !!req_PARAM.pvVV202 ? req_PARAM.pvVV202 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pvPV200, pvVV201, pvVV202, pvLOGIN], callback)
  }

}