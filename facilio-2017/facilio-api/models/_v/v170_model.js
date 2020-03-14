/**
 * V170_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class V170_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * danh sach Vat tu V500 THEO THIET BI B050
  * @param pnFH000 -- phan he chuong trinh su dung
  * @param pnFH200 
  * @param pnFN850 -- Phong ban quan ly kho
  * @param pnFB050
  */
  _listOfTabV170HT(params, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV170HT",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pnFB050, pvLOGIN], callback)
  }
  /**
  * danh sach Vat tu V500 KHONG thuoc thiet bi (B050)
  * @param pnFH000 -- phan he chuong trinh su dung
  * @param pnFH200 
  * @param pnFN850 -- Phong ban quan ly kho
  * @param pnFB050
  */
  _listOfTabV170L(params, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV170L",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvVV501 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvVV501, pnFB050, pvLOGIN], callback)
  }
  /**
  * danh sach Vat tu V500 thuoc thiet bi (S350)
  * @param pnFH000 -- phan he chuong trinh su dung
  * @param pnFH200 
  * @param pnFN850 -- Phong ban quan ly kho
  * @param pnFB050
  */
  _listOfTabV170R(params, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV170R",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pvLOGIN], callback)
  }
  /**
  * danh muc ma tai san ap dung cho B050 
  * @param pnFV050  
  * @param pnMDSDU 
  */
  _listOfPurPosDispos(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfPurPosDispos",
      pnFV050 = !!params.pnFV050 ? +params.pnFV050 : 0,
      pnMDSDU = !!params.pnMDSDU ? +params.pnMDSDU : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFV050, pnMDSDU, pvLOGIN], callback)
  }

  /**
  * Thiet lap vat tu V500 phu thuoc bo phan may S350 (S200 + S250)
  * @param pnFH000
  * @param pnFH200
  * @param pnFV500  -- ID Vat tu
  * @param pnFB050
  * @param pnFS200  -- ID may
  * @param pnFS250  -- ID Bo phan
  * @param pvVV171
  * @param pnVN173
  * @param pvVV172
  */
  _insertTabV170(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'InsertTabV170',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFV500 = !!params.pnFV500 ? +params.pnFV500 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pvVV171 = !!params.pvVV171 ? params.pvVV171 : null,
      pvVV172 = !!params.pvVV172 ? params.pvVV172 : null,
      pnVN173 = !!params.pnVN173 ? +params.pnVN173 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFV500, pnFB050, pnFS200, pnFS250, pvVV171, pvVV172, pnVN173, pvLOGIN], callback)
  }
  /**
  * huy vat tu V500 phu thuoc THIET BI
  * @param pnFB050
  * @param pnFV500
  */
  _stornoTabV170(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'StornoTabV170',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFV500 = !!params.pnFV500 ? +params.pnFV500 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pnFV500, pvLOGIN], callback)
  }
}