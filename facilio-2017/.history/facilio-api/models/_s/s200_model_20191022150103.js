/**
 * S200_MODEL
 * @author Linhnc - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class S200_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * -- danh sach tat ca cac san pham, dich vu, may moc dung cho Avanti/Facilio
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pvSV202 -- Model
   * @param pvSV217 -- PM hoac BT
   * @param pnOFFSET 
   * @param pnLIMIT 
   * @param pnSORT 
   * @param pnDIRECTION -- ngay len ke hoach sua chua
   * @param pvLOGIN
   */
  _listOfTabS200HT(req_PARAM, callback) {

    const procName = this.SYNONYM.S2017_CUR + 'ListOfTabS200HT',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvSV202 = !!req_PARAM.pvSV202 ? req_PARAM.pvSV202 : null,
      pvSV217 = !!req_PARAM.pvSV217 ? req_PARAM.pvSV217 : null,
      pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
      pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
      pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvSV202, pvSV217, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   *  -- bo sung may moc ve cho cac chi nhanh thuoc Cty
   * 
   * @param pnPS200
   * @param pnFH000 -- FH000: phan he quan ly 
   * @param pnFH200 -- FH200: Cty hoac chi nhanh can dduoc bo sung may
   * @param pvLOGIN
   */
  _insertTabS200_p4(req_PARAM, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'InsertTabS200',
      pnPS200 = !!req_PARAM.pnPS200 ? +req_PARAM.pnPS200 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPS200, pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   *  -- bo sung may moc ve cho cac chi nhanh thuoc Cty
   * 
   * @param pnPS200
   * @param pnFH000 -- FH000: phan he quan ly 
   * @param pnFH200 -- thuoc Cty
   * @param pnFH300
   * @param pnFV200 -- DON VI
   * @param pnFC000 -- muc thue ap ddat cho dich vu (neu co)
   * @param pnFC550 -- chuyen mon can co
   * @param pnFC425 -- NN hoac noi nghiep
   * @param pvSV201 -- General Data: Machine
   * @param pvSV202 -- Model
   * @param pvSV203 -- Order No
   * @param pvSV204 -- Serial No
   * @param pvSV205 -- Machine Code
   * @param pvSV206 -- Customer
   * @param pvSV207 -- Technical Data: Voltage 
   * @param pvSV208 -- Frequency
   * @param pvSV209 -- Auxiliary Circuit
   * @param pvSV210 -- Installed Power
   * @param pvSV211 -- Installed Current
   * @param pvSV212 -- Control
   * @param pvSV213 -- Layout Position
   * @param pvSV214 -- Working direction
   * @param pnSN215 -- DDON GIA
   * @param pnSN216 -- kinh nghiem can co / so ngay thi cong
   * @param pvSV217 -- file name
   * @param pvLOGIN
   */
  _insertTabS200_p26(req_PARAM, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'InsertTabS200',
      pnPS200 = !!req_PARAM.pnPS200 ? +req_PARAM.pnPS200 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH300 = !!req_PARAM.pnFH300 ? +req_PARAM.pnFH300 : 0,
      pnFV200 = !!req_PARAM.pnFV200 ? +req_PARAM.pnFV200 : 0,
      pnFC000 = !!req_PARAM.pnFC000 ? +req_PARAM.pnFC000 : 0,
      pnFC550 = !!req_PARAM.pnFC550 ? +req_PARAM.pnFC550 : 0,
      pnFC425 = !!req_PARAM.pnFC425 ? +req_PARAM.pnFC425 : 0,
      pvSV201 = !!req_PARAM.pvSV201 ? req_PARAM.pvSV201 : null,
      pvSV202 = !!req_PARAM.pvSV202 ? req_PARAM.pvSV202 : null,
      pvSV203 = !!req_PARAM.pvSV203 ? req_PARAM.pvSV203 : null,
      pvSV204 = !!req_PARAM.pvSV204 ? req_PARAM.pvSV204 : null,
      pvSV205 = !!req_PARAM.pvSV205 ? req_PARAM.pvSV205 : null,
      pvSV206 = !!req_PARAM.pvSV206 ? req_PARAM.pvSV206 : null,
      pvSV207 = !!req_PARAM.pvSV207 ? req_PARAM.pvSV207 : null,
      pvSV208 = !!req_PARAM.pvSV208 ? req_PARAM.pvSV208 : null,
      pvSV209 = !!req_PARAM.pvSV209 ? req_PARAM.pvSV209 : null,
      pvSV210 = !!req_PARAM.pvSV210 ? req_PARAM.pvSV210 : null,
      pvSV211 = !!req_PARAM.pvSV211 ? req_PARAM.pvSV211 : null,
      pvSV212 = !!req_PARAM.pvSV212 ? req_PARAM.pvSV212 : null,
      pvSV213 = !!req_PARAM.pvSV213 ? req_PARAM.pvSV213 : null,
      pvSV214 = !!req_PARAM.pvSV214 ? req_PARAM.pvSV214 : null,
      pnSN215 = !!req_PARAM.pnSN215 ? +req_PARAM.pnSN215 : 0,
      pnSN216 = !!req_PARAM.pnSN216 ? +req_PARAM.pnSN216 : 0,
      pvSV217 = !!req_PARAM.pvSV217 ? req_PARAM.pvSV217 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPS200, pnFH000, pnFH200, pnFH300, pnFV200, pnFC000, pnFC550, pnFC425, pvSV201, pvSV202, pvSV203, pvSV204, pvSV205, pvSV206, pvSV207, pvSV208, pvSV209, pvSV210, pvSV211, pvSV212, pvSV213, pvSV214, pnSN215, pnSN216, pvSV217, pvLOGIN], callback)
  }

  /**
   *  -- xoa bo san pham, dich vu
   * 
   * @param pnPS200
   * @param pvLOGIN
   */
  _stornoTabS200(req_PARAM, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'StornoTabS200',
      pnPS200 = +req_PARAM.pnPS200 || 0,
      pvLOGIN = req_PARAM.pvLOGIN || null

    this.oracleUtilModel._callFunction(funcName, [pnPS200, pvLOGIN], callback)
  }

}