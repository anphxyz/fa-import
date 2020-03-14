/**
 * * B670_MODEL
 * @author Toailq - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class B670_MODEL extends Model {
  constructor() {
    super()
  }

  /**
  * danh sach VAT TU THEO NHAN VIEN VA NGAY LAM VIEC
  *  @param pdBD676   -- ngay can vat tu
  *  @param pvBV677   -- ca nhan nhan vat tu
  *  @param pnFH000
  *  @param pnFH200
  *  @param pnOFFSET   -- giong nhu binh thuong cua facilio
  *  @param pnLIMIT    -- giong nhu binh thuong cua facilio
  *  @param pnSORT     -- giong nhu binh thuong cua facilio
  *  @param pnDIRECTION   -- ngay len ke hoach sua chua
  *  @param pvLOGIN
  */
  _listOfTabB670(req_PARAM, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB670',
      pdBD676 = !!req_PARAM.pdBD676 ? req_PARAM.pdBD676 : null,
      pvBV677 = !!req_PARAM.pvBV677 ? req_PARAM.pvBV677 : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
      pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
      pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pdBD676, pvBV677, pnFH000, pnFH200, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
}