/**
 * N420_MODEL
 * @author Linhnc - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class N420_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * @param pnFH000
   * @param pnFH200
   * @param pnNN430F
   * @param pnNN430T
   * @param pnNN431
   * @param pvLOGIN
   */
  _listOfTabN420(req_PARAM, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN420',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnNN430F = !!req_PARAM.pnNN430F ? +req_PARAM.pnNN430F : 0,
      pnNN430T = !!req_PARAM.pnNN430T ? +req_PARAM.pnNN430T : 0,
      pnNN431 = !!req_PARAM.pnNN431 ? +req_PARAM.pnNN431 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnNN430F, pnNN430T, pnNN431, pvLOGIN], callback)
  }

  /**
   * @param pnFH200
   * @param pnINTER
   * @param pdND421F
   * @param pdND421T
   * @param pvLOGIN
   */
  _listOfTabN420OEE(req_PARAM, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN420OEE',
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnINTER = !!req_PARAM.pnINTER ? +req_PARAM.pnINTER : 0,
      pdND421F = !!req_PARAM.pdND421F ? req_PARAM.pdND421F : null,
      pdND421T = !!req_PARAM.pdND421T ? req_PARAM.pdND421T : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH200, pnINTER, pdND421F, pdND421T, pvLOGIN], callback)
  }

  /**
   * @param pnFH200
   * @param pvLOGIN
   */
  _listOfTabN420OEEY(req_PARAM, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN420OEEY',
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH200, pvLOGIN], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

   /**
   * -- nhom nhan vien cung voi cac khu vuc QL 
   *
   * @param pnPN420
   * @param pdND421 -- NGAY THANG NHAP THONG KE
   * @param pnNN422 -- THOI GIAN DUNG (NGAY) CO KE HOACH TRONG THANG SCL
   * @param pnNN423 -- THOI GIAN DUNG (NGAY) DO SU CO LE TRONG NAM SCNN
   * @param pnNN424 -- THOI GIAN DUNG MAY (NGAY) DO SU CO LE TRONG THANG SCNT = SCNN / 12
   * @param pnNN425 -- CONG SUAT / NANG SUAT TRUNG BINH THUC TE TRONG THANG (TAN / NGAY)
   * @param pnNN426 -- CONG SUAT / NANG SUAT TRUNG BINH THIET KE (TAN / GIO)
   * @param pnNN427 -- SAN LUONG LAM RA TRONG THANG (TAN)
   * @param pnNN428 -- TONG PHE PHAM TRONG THANG
   * @param pvNV429 -- GHI CHU
   * @param pnNN430 -- THANG  4
   * @param pnNN431 -- NAM   2014
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _insertTabN420(req_PARAM, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN420',
      pnPN420 = !!req_PARAM.pnPN420 ? +req_PARAM.pnPN420 : 0,
      pdND421 = !!req_PARAM.pdND421 ? req_PARAM.pdND421 : null,
      pnNN422 = !!req_PARAM.pnNN422 ? +req_PARAM.pnNN422 : 0,
      pnNN423 = !!req_PARAM.pnNN423 ? +req_PARAM.pnNN423 : 0,
      pnNN424 = !!req_PARAM.pnNN424 ? +req_PARAM.pnNN424 : 0,
      pnNN425 = !!req_PARAM.pnNN425 ? +req_PARAM.pnNN425 : 0,
      pnNN426 = !!req_PARAM.pnNN426 ? +req_PARAM.pnNN426 : 0,
      pnNN427 = !!req_PARAM.pnNN427 ? +req_PARAM.pnNN427 : 0,
      pnNN428 = !!req_PARAM.pnNN428 ? +req_PARAM.pnNN428 : 0,
      pvNV429 = !!req_PARAM.pvNV429 ? req_PARAM.pvNV429 : null,
      pnNN430 = !!req_PARAM.pnNN430 ? +req_PARAM.pnNN430 : 0,
      pnNN431 = !!req_PARAM.pnNN431 ? +req_PARAM.pnNN431 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN420, pdND421, pnNN422, pnNN423, pnNN424, pnNN425, pnNN426, pnNN427, pnNN428, pvNV429, pnNN430, pnNN431, pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * -- CAP NHAT OEE HANG NGAY
   * 
   * @param pnPN420
   * @param pdND421
   * @param pnNN422
   * @param pnNN423
   * @param pnNN424
   * @param pnNN428
   * @param pnNN430
   * @param pnNN431
   * @param pnFH200
   * @param pvLOGIN
   */
  _insertTabN420OEE(req_PARAM, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN420OEE',
      pnPN420 = !!req_PARAM.pnPN420 ? +req_PARAM.pnPN420 : 0,
      pdND421 = !!req_PARAM.pdND421 ? req_PARAM.pdND421 : null,
      pnNN422 = !!req_PARAM.pnNN422 ? +req_PARAM.pnNN422 : 0,
      pnNN423 = !!req_PARAM.pnNN423 ? +req_PARAM.pnNN423 : 0,
      pnNN424 = !!req_PARAM.pnNN424 ? +req_PARAM.pnNN424 : 0,
      pnNN428 = !!req_PARAM.pnNN428 ? +req_PARAM.pnNN428 : 0,
      pnNN430 = !!req_PARAM.pnNN430 ? +req_PARAM.pnNN430 : 0,
      pnNN431 = !!req_PARAM.pnNN431 ? +req_PARAM.pnNN431 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN420, pdND421, pnNN422, pnNN423, pnNN424, pnNN428, pnNN430, pnNN431, pnFH200, pvLOGIN], callback)
  }

  /**
   * -- TONG SAN PHAM LAM RA VA DAT CHAT LUONG THEO THANG
   * 
   * @param pnPN420
   * @param pdND421
   * @param pvNV429 -- GHI CHU
   * @param pnNN430 -- TONG SAN PHAM DAT YEU CAU CHAT LUONG
   * @param pnNN431 -- TONG SAN PHAM LAM RA
   * @param pnFH200
   * @param pvLOGIN
   */
  _insertTabN420END(req_PARAM, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN420END',
      pnPN420 = !!req_PARAM.pnPN420 ? +req_PARAM.pnPN420 : 0,
      pdND421 = !!req_PARAM.pdND421 ? req_PARAM.pdND421 : null,
      pvNV429 = !!req_PARAM.pvNV429 ? req_PARAM.pvNV429 : null,
      pnNN430 = !!req_PARAM.pnNN430 ? +req_PARAM.pnNN430 : 0,
      pnNN431 = !!req_PARAM.pnNN431 ? +req_PARAM.pnNN431 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN420, pdND421, pvNV429, pnNN430, pnNN431, pnFH200, pvLOGIN], callback)
  }

}