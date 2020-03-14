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
  _listOfTabB670(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB670',
      pdBD676 = !!params.pdBD676 ? params.pdBD676 : null,
      pvBV677 = !!params.pvBV677 ? params.pvBV677 : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pdBD676, pvBV677, pnFH000, pnFH200, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
}