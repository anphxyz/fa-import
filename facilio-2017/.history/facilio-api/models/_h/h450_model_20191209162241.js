/**
 * H450_MODEL
 * @author Linhnc - 28/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class H450_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * -- cap nhat chi nhanh (Children Notes) vao duoi mot Cty (Parent Note)
   * -- theo phan he quan ly
   * 
   * @param pnFH000
   * @param pnFH200P
   * @param pnFH250
   * @param pvHV201  -- ten Cty , chi nhanh
   * @param pvHV451
   * @param pnFN850  -- Group ID
   * @param pvLOGIN
   */
  _insertTabH450F(params, callback) {

    const funcName = this.SYNONYM.H2017_FACI + 'InsertTabH450F',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200P = !!params.pnFH200P ? +params.pnFH200P : 0,
      pnFH250 = !!params.pnFH250 ? +params.pnFH250 : 0,
      pvHV201 = !!params.pvHV201 ? params.pvHV201 : null,
      pvHV451 = !!params.pvHV451 ? params.pvHV451 : null,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200P, pnFH250, pvHV201, pvHV451, pnFN850, pvLOGIN], callback)
  }

  /**
   * @param pnFH000
   * @param pnFH200P
   * @param pnFH200N
   * @param pvLOGIN  
   */
  _stornoTabH450(params, callback) {

    const funcName = this.SYNONYM.H2017_FACI + 'StornoTabH450',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200P = !!params.pnFH200P ? +params.pnFH200P : 0,
      pnFH200N = !!params.pnFH200N ? +params.pnFH200N : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200P, pnFH200N, pvLOGIN], callback)
  }

  /**
   * -- thay doi ten cong doan san xuat
   * 
   * @param pnPH450
   * @param pvHV451
   * @param pvLOGIN
   */
  _updateTabH450(params, callback) {

    const funcName = this.SYNONYM.H2017_FACI + 'UpdateTabH450',
      pnPH450 = !!params.pnPH450 ? +params.pnPH450 : 0,
      pvHV451 = !!params.pvHV451 ? params.pvHV451 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPH450, pvHV451, pvLOGIN], callback)
  }

  /**
   * -- cap nhat san luong trung binh thiet ke Tan/Ngay
   * 
   * @param pnFH200P
   * @param pnFH200N
   * @param pnHN462
   * @param pvLOGIN
   */
  _updateTabH450OEE(params, callback) {

    const funcName = this.SYNONYM.H2017_FACI + 'UpdateTabH450OEE',
      pnFH200P = !!params.pnFH200P ? +params.pnFH200P : 0,
      pnFH200N = !!params.pnFH200N ? +params.pnFH200N : 0,
      pnHN462 = !!params.pnHN462 ? +params.pnHN462 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH200P, pnFH200N, pnHN462, pvLOGIN], callback)
  }

}