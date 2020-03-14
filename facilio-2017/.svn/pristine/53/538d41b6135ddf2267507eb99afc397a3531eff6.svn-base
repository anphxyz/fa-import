/**
 * H200_MODEL
 * @author Linhnc - 28/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class H200_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * -- Co ID CHA, ddi tim danh sach CON
   * 
   * @param pvLOGIN
   * @param pnPH200 -- PH200: ID thuoc Cty (C) | Chi nhanh (B) | Phan xuong (D)
   * @param pnFH000
   * @param pvHV451 -- HV451: Cty | Customer (C), Chi Nhanh (B), Phan xuong hoac Van Phong (D)
   * @param pnFK100
   */
  _listOfTabH200C(req_PARAM, callback) {

    const procName = this.SYNONYM.H2017_CUR + 'ListOfTabH200C',
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnPH200 = !!req_PARAM.pnPH200 ? +req_PARAM.pnPH200 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvHV451 = !!req_PARAM.pvHV451 ? req_PARAM.pvHV451 : null,
      pnFK100 = !!req_PARAM.pnFK100 ? +req_PARAM.pnFK100 : 0

    this.oracleUtilModel._callProcerdure(procName, [pvLOGIN, pnPH200, pnFH000, pvHV451, pnFK100], callback)
  }

  /**
   * -- Danh sach cac chi nhanh, phan xuong, .... thuoc 1 cty
   * -- TreeView cho Master Data
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _listOfTabH200MA(req_PARAM, callback) {

    const procName = this.SYNONYM.H2017_CUR + 'ListOfTabH200MA',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * -- Danh sach cac chi nhanh, phan xuong, .... thuoc 1 cty
   * -- TreeView cho NGUOI DANG NHAP
   * 
   * @param pnFN850
   * @param pnFH200
   * @param pnFH000
   * @param pvLOGIN
   */
  _listOfTabH200LO(req_PARAM, callback) {

    const procName = this.SYNONYM.H2017_CUR + 'ListOfTabH200LO',
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFN850, pnFH200, pnFH000, pvLOGIN], callback)
  }

  /**
   * -- Danh sach cac khu vuc quan ly cua Nhom (N850) the hien theo cay
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pnFN850
   * @param pvLOGIN
   */
  _listOfTabH200G(req_PARAM, callback) {

    const procName = this.SYNONYM.H2017_CUR + 'ListOfTabH200G',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pvLOGIN], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

}
