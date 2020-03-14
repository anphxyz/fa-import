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
  _listOfTabN420(params, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN420',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnNN430F = !!params.pnNN430F ? +params.pnNN430F : 0,
      pnNN430T = !!params.pnNN430T ? +params.pnNN430T : 0,
      pnNN431 = !!params.pnNN431 ? +params.pnNN431 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnNN430F, pnNN430T, pnNN431, pvLOGIN], callback)
  }

  /**
   * @param pnFH200
   * @param pnINTER
   * @param pdND421F
   * @param pdND421T
   * @param pvLOGIN
   */
  _listOfTabN420OEE(params, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN420OEE',
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnINTER = !!params.pnINTER ? +params.pnINTER : 0,
      pdND421F = !!params.pdND421F ? params.pdND421F : null,
      pdND421T = !!params.pdND421T ? params.pdND421T : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH200, pnINTER, pdND421F, pdND421T, pvLOGIN], callback)
  }

  /**
   * @param pnFH200
   * @param pvLOGIN
   */
  _listOfTabN420OEEY(params, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN420OEEY',
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _insertTabN420(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN420',
      pnPN420 = !!params.pnPN420 ? +params.pnPN420 : 0,
      pdND421 = !!params.pdND421 ? params.pdND421 : null,
      pnNN422 = !!params.pnNN422 ? +params.pnNN422 : 0,
      pnNN423 = !!params.pnNN423 ? +params.pnNN423 : 0,
      pnNN424 = !!params.pnNN424 ? +params.pnNN424 : 0,
      pnNN425 = !!params.pnNN425 ? +params.pnNN425 : 0,
      pnNN426 = !!params.pnNN426 ? +params.pnNN426 : 0,
      pnNN427 = !!params.pnNN427 ? +params.pnNN427 : 0,
      pnNN428 = !!params.pnNN428 ? +params.pnNN428 : 0,
      pvNV429 = !!params.pvNV429 ? params.pvNV429 : null,
      pnNN430 = !!params.pnNN430 ? +params.pnNN430 : 0,
      pnNN431 = !!params.pnNN431 ? +params.pnNN431 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _insertTabN420OEE(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN420OEE',
      pnPN420 = !!params.pnPN420 ? +params.pnPN420 : 0,
      pdND421 = !!params.pdND421 ? params.pdND421 : null,
      pnNN422 = !!params.pnNN422 ? +params.pnNN422 : 0,
      pnNN423 = !!params.pnNN423 ? +params.pnNN423 : 0,
      pnNN424 = !!params.pnNN424 ? +params.pnNN424 : 0,
      pnNN428 = !!params.pnNN428 ? +params.pnNN428 : 0,
      pnNN430 = !!params.pnNN430 ? +params.pnNN430 : 0,
      pnNN431 = !!params.pnNN431 ? +params.pnNN431 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _insertTabN420END(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN420END',
      pnPN420 = !!params.pnPN420 ? +params.pnPN420 : 0,
      pdND421 = !!params.pdND421 ? params.pdND421 : null,
      pvNV429 = !!params.pvNV429 ? params.pvNV429 : null,
      pnNN430 = !!params.pnNN430 ? +params.pnNN430 : 0,
      pnNN431 = !!params.pnNN431 ? +params.pnNN431 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN420, pdND421, pvNV429, pnNN430, pnNN431, pnFH200, pvLOGIN], callback)
  }

}