/**
 * S250_MODEL
 * @author Linhnc - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class S250_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
  * -- danh sach cac bo phan MAY, MASTER DATA
  * 
  * @param pnFH000
  * @param pnFH200 
  * @param pnFC550
  * @param pvSV253 
  * @param pvSV254 -- PM hoac BT
  * @param pnOFFSET
  * @param pnLIMIT 
  * @param pnSORT 
  * @param pnDIRECTION -- ngay len ke hoach sua chua
  * @param pvLOGIN
  */
  _listOfTabS250HT(req_PARAM, callback) {

    const procName = this.SYNONYM.S2017_CUR + 'ListOfTabS250HT',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFC550 = !!req_PARAM.pnFC550 ? +req_PARAM.pnFC550 : 0,
      pvSV253 = !!req_PARAM.pvSV253 ? req_PARAM.pvSV253 : null,
      pvSV254 = !!req_PARAM.pvSV254 ? req_PARAM.pvSV254 : null,
      pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
      pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
      pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFC550, pvSV253, pvSV254, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

 /**
  * -- nhap, sua thong tin nhom san pham
  * 
  * @param pnFH000
  * @param pnFH200 
  * @param pnPS250 -- PS250: Assembly
  * @param pnFC450 
  * @param pvFC550 
  * @param pvSV251 -- SV251: ten nhom san pham
  * @param pvSV252 
  * @param pvSV253 
  * @param pvSV254
  * @param pnSN255 -- SN255: thoi gian bao tri ddinh ky (standard)
  * @param pnSN256 -- SN256: kinh nghiem can co doi voi nhan vien ky thuat
  * @param pvLOGIN
  */
  _insertTabS250(req_PARAM, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'InsertTabS250',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnPS250 = !!req_PARAM.pnPS250 ? +req_PARAM.pnPS250 : 0,
      pnFC450 = !!req_PARAM.pnFC450 ? +req_PARAM.pnFC450 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvSV251 = !!req_PARAM.pvSV251 ? req_PARAM.pvSV251 : null,
      pvSV252 = !!req_PARAM.pvSV252 ? req_PARAM.pvSV252 : null,
      pvSV253 = !!req_PARAM.pvSV253 ? req_PARAM.pvSV253 : null,
      pvSV254 = !!req_PARAM.pvSV254 ? req_PARAM.pvSV254 : null,
      pnSN255 = !!req_PARAM.pnSN255 ? +req_PARAM.pnSN255 : 0,
      pnSN256 = !!req_PARAM.pnSN256 ? +req_PARAM.pnSN256 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnPS250, pnFC450, pvFC550, pvSV251, pvSV252, pvSV253, pvSV254, pnSN255, pnSN256, pvLOGIN], callback)
  
  }

 /**
  * -- xoa bo nhom san pham
  * 
  * @param pnPS250
  * @param pvLOGIN 
  */
  _stornoTabS250(req_PARAM, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'StornoTabS250',
      pnPS250 = !!req_PARAM.pnPS250 ? +req_PARAM.pnPS250 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPS250, pvLOGIN], callback)
  }

}