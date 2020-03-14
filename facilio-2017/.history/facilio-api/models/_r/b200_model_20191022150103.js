/**
 * RB200_MODEL
 * @author Linhnc - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class B200_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
  * -- NHOM TO VA SO LUONG CONG VIEC BAO TRI THEO THOI GIAN TU CHON
  * 
  * @param pnFH000
  * @param pnFH200 
  * @param pnFN850
  * @param pdBD201F -- BD201F: default sysdate - 360
  * @param pdBD201T -- BD201T: default sysdate + 360
  * @param pvLOGIN
  */
  _reportOfTabB200_p6(req_PARAM, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ReportOfTabB200',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pdBD201F = !!req_PARAM.pdBD201F ? req_PARAM.pdBD201F : null,
      pdBD201T = !!req_PARAM.pdBD201T ? req_PARAM.pdBD201T : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pdBD201F, pdBD201T, pvLOGIN], callback)
  }

  /**
  * -- NHOM TO VA SO LUONG CONG VIEC BAO TRI THEO THOI GIAN
  * -- DAYS =  -1: SO LUONG CONG VIEC BAO TRI KHONG DAT THEO NHU LICH BAO TRI
  * -- DAYS =   1: SO LUONG CONG VIEC BAO TRI TRONG NGAY
  * -- DAYS =   7: SO LUONG CONG VIEC BAO TRI TRONG TUAN DEN
  * -- DAYS =  14: SO LUONG CONG VIEC BAO TRI TRONG 2 TUAN DEN
  * -- DAYS =  30: SO LUONG CONG VIEC BAO TRI TRONG 1 THANG
  * -- DAYS =  60: SO LUONG CONG VIEC BAO TRI TRONG 2 THANG
  * -- DAYS =  90: SO LUONG CONG VIEC BAO TRI TRONG 3 THANG
  * -- DAYS = 180: SO LUONG CONG VIEC BAO TRI TRONG 6 THANG
  * -- DAYS = 360: SO LUONG CONG VIEC BAO TRI TRONG 1 NAM
  * 
  * @param pnFH000
  * @param pnFH200 
  * @param pnFN850
  * @param pnDAYS
  * @param pvLOGIN
  */
  _reportOfTabB200_p5(req_PARAM, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ReportOfTabB200',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pnDAYS = !!req_PARAM.pnDAYS ? +req_PARAM.pnDAYS : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pnDAYS, pvLOGIN], callback)
  }

  /**
  *  -- DANH SACH CAC PHONG BAN / NHOM TO DAM TRACH CONG VIEC BAO TRI
  * 
  * @param pnFH000
  * @param pnFH200 
  * @param pvLOGIN
  */
  _reportOfTabN850F(req_PARAM, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ReportOfTabN850F',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
  *  -- NHOM TO VA SO LUONG CONG VIEC BAO TRI THEO THOI GIAN TU CHON
  * 
  * @param pnFH000
  * @param pnFH200 
  * @param pnFN850
  * @param pdBD201F -- BD201F: default sysdate - 360
  * @param pdBD201T -- BD201T: default sysdate + 360
  * @param pvFC550
  * @param pvLOGIN
  */
  _reportOfTabB200FAC(req_PARAM, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ReportOfTabB200FAC',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pdBD201F = !!req_PARAM.pdBD201F ? req_PARAM.pdBD201F : null,
      pdBD201T = !!req_PARAM.pdBD201T ? req_PARAM.pdBD201T : null,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pdBD201F, pdBD201T, pvFC550, pvLOGIN], callback)
  }

  /**
  *  -- SO LUONG CV HOAN THANH THEO TUNG CA NHAN, NGAY (Employee)
  * 
  * @param pvFC550
  * @param pdBD201F 
  * @param pdBD201T
  * @param pnFN850
  * @param pnFH200
  * @param pnFH000
  * @param pvLOGIN
  */
  _reportOfTabB200EM(req_PARAM, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ReportOfTabB200EM',
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pdBD201F = !!req_PARAM.pdBD201F ? req_PARAM.pdBD201F : null,
      pdBD201T = !!req_PARAM.pdBD201T ? req_PARAM.pdBD201T : null,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pvFC550, pdBD201F, pdBD201T, pnFN850, pnFH200, pnFH000, pvLOGIN], callback)
  }
    
  // ===========================================================================
  // FUNCTION
  // ===========================================================================

 
}