/**
 * * B000_MODEL
 * @author Toailq - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class B000_MODEL extends Model {
  constructor() {
    super()
  }

  /**
  * Danh sach cac so do su dung trong viec tinh chu ky bao tri & bao hanh
  *  @param pnFH000
  *  @param pnFH200L
  *  @param pnFH200S
  *  @param pvBV003
  *  @param pvLOGIN
  */
  _listOfTabB000(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB000',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200L = !!params.pnFH200L ? +params.pnFH200L : 0,
      pnFH200S = !!params.pnFH200S ? +params.pnFH200S : 0,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvBV003, pvLOGIN], callback)
  }

  /** -------------------B2017_FACI-------------- */

  /**
  * bo sung thong tin ve ddon vi tinh cho chu ky thuoc phuong an bao tri
  * @param pnPB000
  * @param pnFH000
  * @param pnFH200
  * @param pvBV001
  * @param pvBV002
  * @param pvBV003
  * @param pnFB000
  * @param pvLOGIN
  */
  _insertTabB000(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB000',
      pnPB000 = !!params.pnPB000 ? +params.pnPB000 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvBV001 = !!params.pvBV001 ? params.pvBV001 : null,
      pvBV002 = !!params.pvBV002 ? params.pvBV002 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pnFB000 = !!params.pnFB000 ? +params.pnFB000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB000, pnFH000, pnFH200, pvBV001, pvBV002, pvBV003, pnFB000, pvLOGIN], callback)
  }

  /**
    * xoa bo thong tin ve ddon vi tinh cho chu ky thuoc phuong an bao tri
    * @param pnPB000
    * @param pvLOGIN
    */
  _stornoTabB000(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'StornoTabB000',
      pnPB000 = !!params.pnPB000 ? +params.pnPB000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB000, pvLOGIN], callback)
  }

}
