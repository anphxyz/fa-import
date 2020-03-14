/**
 * V500_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class V500_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * ListOfTabV500EBS
  * @param pnFH000  
  * @param pnFH200 
  * @param pnORGID 
  * @param pnVN508
  * @param pvVV501
  * @param pvLOGIN
  */
  _listOfTabV500EBS(params, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV500EBS",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnORGID = !!params.pnORGID ? +params.pnORGID : 0,
      pnVN508 = !!params.pnVN508 ? +params.pnVN508 : 0,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnORGID, pnVN508, pvVV501, pvLOGIN], callback)
  }
  /**
  * chi tiet ve vat tu / san pham
  * @param pnFH000  
  * @param pnFH200  -- chi nhanh
  * @param pnSITID  
  * @param pnORGID 
  * @param pnVN508  -- Phong ban quan ly kho
  * @param pvVV501  -- nhom vat tu viet tat, ma so vat tu
  */
  _listOfTabV500EBS_p7(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV500EBS",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnSITID = !!params.pnSITID ? +params.pnSITID : 0,
      pnORGID = !!params.pnORGID ? +params.pnORGID : 0,
      pnVN508 = !!params.pnVN508 ? +params.pnVN508 : 0,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnSITID, pnORGID, pnVN508, pvVV501, pvLOGIN], callback)
  }
  /**
  * ListOfTabV500EBS
  * @param pnFH000  
  * @param pnFH200  -- chi nhanh
  * @param pnORGID 
  * @param pnVN508  -- Phong ban quan ly kho
  * @param pvVV501  -- nhom vat tu viet tat, ma so vat tu
  */
  _listOfTabV500EBS_p6(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV500EBS",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnORGID = !!params.pnORGID ? +params.pnORGID : 0,
      pnVN508 = !!params.pnVN508 ? +params.pnVN508 : 0,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnORGID, pnVN508, pvVV501, pvLOGIN], callback)
  }
  /**
  * danh muc vat tu EBS
  */
  _listOfTabV500EBS_p1(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV500EBS",
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pvLOGIN], callback)
  }
  /**
  * chi tiet ve vat tu / san pham
  * @param pnFH200  -- chi nhanh
  * @param pnSITID  
  * @param pnORGID 
  * @param pnVN508  -- Phong ban quan ly kho
  * @param pvVV501  -- nhom vat tu viet tat, ma so vat tu
  */
  _listOfTabV500EIN(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV500EIN",
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnSITID = !!params.pnSITID ? +params.pnSITID : 0,
      pnORGID = !!params.pnORGID ? +params.pnORGID : 0,
      pnVN508 = !!params.pnVN508 ? +params.pnVN508 : 0,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH200, pnSITID, pnORGID, pnVN508, pvVV501, pvLOGIN], callback)
  }

  /**
  * hole die Daten aus dem EBS-System
  * @param pnFH000
  * @param pnFH200
  * @param pnEXTID
  * @param pnVN509
  */
  _mergeEbsTabV500IT(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'MergeEbsTabV500IT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnEXTID = !!params.pnEXTID ? +params.pnEXTID : 0,
      pnVN509 = !!params.pnVN509 ? +params.pnVN509 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnEXTID, pnVN509, pvLOGIN], callback)
  }
  /**
  * hole die Daten aus dem EBS-System
  * @param pnFH000
  * @param pnFH200
  * @param pnEXTID
  */
  _mergeEbsTabV500(params, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'MergeEbsTabV500',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnEXTID = !!params.pnEXTID ? +params.pnEXTID : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnEXTID, pvLOGIN], callback)
  }
}