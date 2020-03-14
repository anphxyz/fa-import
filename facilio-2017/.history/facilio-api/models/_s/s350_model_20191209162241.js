/**
 * S350_MODEL
 * @author Linhnc - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class S350_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
  * -- Danh sach bo phan may S250 KHONG thuoc may S200
  * 
  * @param pnFH000
  * @param pnFH200 
  * @param pnFS200
  * @param pnPS250 
  * @param pvSV253 --ma bo phan may
  * @param pvLOGIN
  */
  _listOfTabS350L(params, callback) {

    const procName = this.SYNONYM.S2017_CUR + 'ListOfTabS350L',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnPS250 = !!params.pnPS250 ? +params.pnPS250 : 0,
      pvSV253 = !!params.pvSV253 ? params.pvSV253 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pnPS250, pvSV253, pvLOGIN], callback)
  }

  /**
  * -- Danh sach bo phan may S250 cua mot may S200
  * 
  * @param pnFH000
  * @param pnFH200 -- FH200: Cong ty
  * @param pnFS200 -- FS200: san pham
  * @param pvSEARC
  * @param pvLOGIN 
  */
  _listOfTabS350R(params, callback) {

    const procName = this.SYNONYM.S2017_CUR + 'ListOfTabS350R',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pvSEARC = !!params.pvSEARC ? params.pvSEARC : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvSEARC, pvLOGIN], callback)
  }

  /**
  * -- Danh sach cac bo phan S250 thuoc may S200 (dung cho Vat tu V175)
  * 
  * @param pnFH000
  * @param pnFH200 
  * @param pnFS200
  * @param pnPS250
  */
  _listOfTabS350V(params, callback) {

    const procName = this.SYNONYM.S2017_CUR + 'ListOfTabS350V',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnPS250 = !!params.pnPS250 ? +params.pnPS250 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pnPS250], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

 /**
  * -- nhap, sua thong tin ve moi lien quan giua san pham va nhom san pham
	* -- qui trinh lam viec
  * 
  * @param pnPS350
  * @param pnFH000 
  * @param pnFH200 -- FH200: Cty | Chi nhanh | Phan xuong | Lau | Line
  * @param pnFS200 
  * @param pnFS250 -- FS250: san pham
  * @param pdSD351 -- SD351: ngay bat ddau co hieu luc (bat buoc)
  * @param pdSD352 -- SD352: ngay het hieu luc
  * @param pvSV353 -- SV353: SV205-SV251
  * @param pnSN354 -- SN354: chuyen mon can co
  * @param pvSV355 
  * @param pvSV356 
  * @param pvSV357
  * @param pvLOGIN
  * @param pnMAINT
  */
  _insertTabS350(params, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'InsertTabS350',
      pnPS350 = !!params.pnPS350 ? +params.pnPS350 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pdSD351 = !!params.pdSD351 ? params.pdSD351 : null,
      pdSD352 = !!params.pdSD352 ? params.pdSD352 : null,
      pvSV353 = !!params.pvSV353 ? params.pvSV353 : null,
      pnSN354 = !!params.pnSN354 ? +params.pnSN354 : 0,
      pvSV355 = !!params.pvSV355 ? +params.pvSV355 : 0,
      pvSV356 = !!params.pvSV356 ? +params.pvSV356 : 0,
      pvSV357 = !!params.pvSV357 ? params.pvSV357 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null,
      pnMAINT = !!params.pnMAINT ? +params.pnMAINT : 0

    this.oracleUtilModel._callFunction(funcName, [pnPS350, pnFH000, pnFH200, pnFS200, pnFS250, pdSD351, pdSD352, pvSV353, pnSN354, pvSV355, pvSV356, pvSV357, pvLOGIN, pnMAINT], callback)
  
  }

 /**
  * -- xoa bo moi lien quan giua san pham va nhom san pham
  * 
  * @param pnFS200
  * @param pnFS250 
  * @param pdSD351 
  * @param pvLOGIN 
  */
  _stornoTabS350(params, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'StornoTabS350',
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pdSD351 = !!params.pdSD351 ? params.pdSD351 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFS200, pnFS250, pdSD351, pvLOGIN], callback)
  }

}