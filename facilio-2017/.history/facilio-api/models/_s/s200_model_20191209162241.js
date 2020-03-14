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
  _listOfTabS200HT(params, callback) {

    const procName = this.SYNONYM.S2017_CUR + 'ListOfTabS200HT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvSV202 = !!params.pvSV202 ? params.pvSV202 : null,
      pvSV217 = !!params.pvSV217 ? params.pvSV217 : null,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _insertTabS200_p4(params, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'InsertTabS200',
      pnPS200 = !!params.pnPS200 ? +params.pnPS200 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _insertTabS200_p26(params, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'InsertTabS200',
      pnPS200 = !!params.pnPS200 ? +params.pnPS200 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFH300 = !!params.pnFH300 ? +params.pnFH300 : 0,
      pnFV200 = !!params.pnFV200 ? +params.pnFV200 : 0,
      pnFC000 = !!params.pnFC000 ? +params.pnFC000 : 0,
      pnFC550 = !!params.pnFC550 ? +params.pnFC550 : 0,
      pnFC425 = !!params.pnFC425 ? +params.pnFC425 : 0,
      pvSV201 = !!params.pvSV201 ? params.pvSV201 : null,
      pvSV202 = !!params.pvSV202 ? params.pvSV202 : null,
      pvSV203 = !!params.pvSV203 ? params.pvSV203 : null,
      pvSV204 = !!params.pvSV204 ? params.pvSV204 : null,
      pvSV205 = !!params.pvSV205 ? params.pvSV205 : null,
      pvSV206 = !!params.pvSV206 ? params.pvSV206 : null,
      pvSV207 = !!params.pvSV207 ? params.pvSV207 : null,
      pvSV208 = !!params.pvSV208 ? params.pvSV208 : null,
      pvSV209 = !!params.pvSV209 ? params.pvSV209 : null,
      pvSV210 = !!params.pvSV210 ? params.pvSV210 : null,
      pvSV211 = !!params.pvSV211 ? params.pvSV211 : null,
      pvSV212 = !!params.pvSV212 ? params.pvSV212 : null,
      pvSV213 = !!params.pvSV213 ? params.pvSV213 : null,
      pvSV214 = !!params.pvSV214 ? params.pvSV214 : null,
      pnSN215 = !!params.pnSN215 ? +params.pnSN215 : 0,
      pnSN216 = !!params.pnSN216 ? +params.pnSN216 : 0,
      pvSV217 = !!params.pvSV217 ? params.pvSV217 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPS200, pnFH000, pnFH200, pnFH300, pnFV200, pnFC000, pnFC550, pnFC425, pvSV201, pvSV202, pvSV203, pvSV204, pvSV205, pvSV206, pvSV207, pvSV208, pvSV209, pvSV210, pvSV211, pvSV212, pvSV213, pvSV214, pnSN215, pnSN216, pvSV217, pvLOGIN], callback)
  }

  /**
   *  -- xoa bo san pham, dich vu
   * 
   * @param pnPS200
   * @param pvLOGIN
   */
  _stornoTabS200(params, callback) {

    const funcName = this.SYNONYM.S2017_FACI + 'StornoTabS200',
      pnPS200 = +params.pnPS200 || 0,
      pvLOGIN = params.pvLOGIN || null

    this.oracleUtilModel._callFunction(funcName, [pnPS200, pvLOGIN], callback)
  }

}