/**
 * V050_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class V050_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * chi tiet ve kho
  * @param pnFH000  -- phan he chuong trinh su dung
  * @param pnFH200L -- Login
  * @param pnFH200S -- Selected
  * @param pvLOGIN
  */
  _listOfTabV050(params, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV050",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200L = !!params.pnFH200L ? +params.pnFH200L : 0,
      pnFH200S = !!params.pnFH200S ? +params.pnFH200S : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvLOGIN], callback)
  }
  /**
  * chi tiet ve kho
  * @param pnFH000  
  * @param pnFH200 
  */
  _listOfTabV050FAC(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV050FAC",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
  * chi tiet ve kho
  * @param pnPV050
  * @param pnFH000
  * @param pnFH200
  * @param pvVV051  -- MA KHO
  * @param pvVV052  -- TEN KHO
  * @param pvVV053  -- LOAI KHO
  * @param pvVV054  -- TN_NM (tram nghien / nha may)
  * @param pvVV055  -- Ma ddon vi 
  * @param pnEXTID
  */
  _insertTabV050(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'InsertTabV050',
      pnPV050 = !!params.pnPV050 ? +params.pnPV050 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvVV051 = !!params.pvVV051 ? params.pvVV051 : null,
      pvVV052 = !!params.pvVV052 ? params.pvVV052 : null,
      pvVV053 = !!params.pvVV053 ? params.pvVV053 : null,
      pvVV054 = !!params.pvVV054 ? params.pvVV054 : null,
      pvVV055 = !!params.pvVV055 ? params.pvVV055 : null,
      pnEXTID = !!params.pnEXTID ? +params.pnEXTID : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV050, pnFH000, pnFH200, pvVV051, pvVV052, pvVV054, pvVV055, pnEXTID, pvVV053, pvLOGIN], callback)
  }

  /**
  * huy cac chi tiet thuoc ve KHO
  * @param pnPV050
  */
  _stornoTabV050(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'StornoTabV050',
      pnPV050 = !!params.pnPV050 ? +params.pnPV050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV050, pvLOGIN], callback)
  }
  /**
  * hole die Daten aus dem EBS-System
  * @param pnFH000
  * @param pnFH200
  * @param pnORGID
  */
  _mergeEbsTabV050(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'MergeEbsTabV050',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnORGID = !!params.pnORGID ? +params.pnORGID : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnORGID, pvLOGIN], callback)
  }


}