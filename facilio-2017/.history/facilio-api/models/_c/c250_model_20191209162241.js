/**
 * C250_MODEL
 * @author Linhnc - 27/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class C250_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * -- CAC CA LAM VIEC THEO TUNG CHI NHANH, CTY
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pnPC250
   * @param pvCV251 -- BEZKURZ
   * @param pvCV252 -- BEZLANG
   * @param pvCV253 -- DIEN GIAI
   * @param pvCV254 -- thoi gian bat ddau cua CA
   * @param pvCV255 -- thoi gian ket thuc cua CA
   * @param pvCV256 -- MAU HIEN THI CHO CA
   * @param pvCV257
   * @param pvLOGIN
   */
  _insertTabC250(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC250',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnPC250 = !!params.pnPC250 ? +params.pnPC250 : 0,
      pvCV251 = !!params.pvCV251 ? params.pvCV251 : null,
      pvCV252 = !!params.pvCV252 ? params.pvCV252 : null,
      pvCV253 = !!params.pvCV253 ? params.pvCV253 : null,
      pvCV254 = !!params.pvCV254 ? params.pvCV254 : null,
      pvCV255 = !!params.pvCV255 ? params.pvCV255 : null,
      pvCV256 = !!params.pvCV256 ? params.pvCV256 : null,
      pvCV257 = !!params.pvCV257 ? params.pvCV257 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnPC250, pvCV251, pvCV252, pvCV253, pvCV254, pvCV255, pvCV256, pvCV257, pvLOGIN], callback)
  }

  /**
   * -- HUY CA LAM VIEC TAI MOT CTY, CHI NHANH, VPDD
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pnPC250
   * @param pvLOGIN
   */
  _stornoTabC250(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC250',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnPC250 = !!params.pnPC250 ? +params.pnPC250 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnPC250, pvLOGIN], callback)
  }

}