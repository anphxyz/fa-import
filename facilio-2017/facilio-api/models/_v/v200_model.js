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
  _listOfTabV200FAC(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV200FAC",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _mergeEbsTabV200(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'MergeEbsTabV200',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvPV200 = !!params.pvPV200 ? params.pvPV200 : null,
      pvVV201 = !!params.pvVV201 ? params.pvVV201 : null,
      pvVV202 = !!params.pvVV202 ? params.pvVV202 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pvPV200, pvVV201, pvVV202, pvLOGIN], callback)
  }

}