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
  _listOfTabV050(req_PARAM, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV050",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = !!req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = !!req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvLOGIN], callback)
  }
  /**
  * chi tiet ve kho
  * @param pnFH000  
  * @param pnFH200 
  */
  _listOfTabV050FAC(req_PARAM, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV050FAC",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
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
  _insertTabV050(req_PARAM, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'InsertTabV050',
      pnPV050 = !!req_PARAM.pnPV050 ? +req_PARAM.pnPV050 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvVV051 = !!req_PARAM.pvVV051 ? req_PARAM.pvVV051 : null,
      pvVV052 = !!req_PARAM.pvVV052 ? req_PARAM.pvVV052 : null,
      pvVV053 = !!req_PARAM.pvVV053 ? req_PARAM.pvVV053 : null,
      pvVV054 = !!req_PARAM.pvVV054 ? req_PARAM.pvVV054 : null,
      pvVV055 = !!req_PARAM.pvVV055 ? req_PARAM.pvVV055 : null,
      pnEXTID = !!req_PARAM.pnEXTID ? +req_PARAM.pnEXTID : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV050, pnFH000, pnFH200, pvVV051, pvVV052, pvVV054, pvVV055, pnEXTID, pvVV053, pvLOGIN], callback)
  }

  /**
  * huy cac chi tiet thuoc ve KHO
  * @param pnPV050
  */
  _stornoTabV050(req_PARAM, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'StornoTabV050',
      pnPV050 = !!req_PARAM.pnPV050 ? +req_PARAM.pnPV050 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV050, pvLOGIN], callback)
  }
  /**
  * hole die Daten aus dem EBS-System
  * @param pnFH000
  * @param pnFH200
  * @param pnORGID
  */
  _mergeEbsTabV050(req_PARAM, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'MergeEbsTabV050',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnORGID = !!req_PARAM.pnORGID ? +req_PARAM.pnORGID : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnORGID, pvLOGIN], callback)
  }


}