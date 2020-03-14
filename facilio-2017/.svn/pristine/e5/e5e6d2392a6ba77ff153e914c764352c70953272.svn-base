/**
 * C300_MODEL
 * @author Linhnc - 24/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class C300_MODEL extends Model {
  constructor() {
    super()
  }

  /**
   * @param pvLOGIN
   * @param pnFC600 -- FC600: chi tiet tong hop ve cong viec
   * @param pvCV314 -- CV314: ticket nr
   * @param pnFIRSTROW
   * @param pnROWCOUNT
   * @param pnSORT
   */
  _listOfTabC300C_p6(req_PARAM, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC300C',
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFC600 = !!req_PARAM.pnFC600 ? +req_PARAM.pnFC600 : 0,
      pvCV314 = !!req_PARAM.pvCV314 ? req_PARAM.pvCV314 : null,
      pnFIRSTROW = !!req_PARAM.pnFIRSTROW ? +req_PARAM.pnFIRSTROW : 0,
      pnROWCOUNT = !!req_PARAM.pnROWCOUNT ? +req_PARAM.pnROWCOUNT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0

    this.oracleUtilModel._callProcerdure(procName, [pvLOGIN, pnFC600, pvCV314, pnFIRSTROW, pnROWCOUNT, pnSORT], callback)
  }

  /**
   * @param pvLOGIN
   * @param pnFC600
   * @param pnFIRSTROW
   * @param pnROWCOUNT
   * @param pnSORT
   */
  _listOfTabC300C_p5(req_PARAM, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC300C',
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFC600 = !!req_PARAM.pnFC600 ? req_PARAM.pnFC600 : null, // o duoi database nhan kieu string
      pnFIRSTROW = !!req_PARAM.pnFIRSTROW ? +req_PARAM.pnFIRSTROW : 0,
      pnROWCOUNT = !!req_PARAM.pnROWCOUNT ? +req_PARAM.pnROWCOUNT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0

    this.oracleUtilModel._callProcerdure(procName, [pvLOGIN, pnFC600, pnFIRSTROW, pnROWCOUNT, pnSORT], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * -- cap nhat nhanh cong viec bao tri
   * 
   * @param pnFH000
   * @param pvFC600
   * @param pdCD302 -- ngay hoan thanh
   * @param pvLOGIN
   */
  _insertTabC300PMFAST(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC300PMFAST',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvFC600 = !!req_PARAM.pvFC600 ? req_PARAM.pvFC600 : null,
      pdCD302 = !!req_PARAM.pdCD302 ? req_PARAM.pdCD302 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pvFC600, pdCD302, pvLOGIN], callback)
  }

  /**
   * -- BAO CAO NHANH CHO CM
   * 
   * @param pvFC600
   * @param pvLOGIN
   */
  _insertTabC300CMFAST(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC300CMFAST',
      pvFC600 = !!req_PARAM.pvFC600 ? req_PARAM.pvFC600 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFC600, pvLOGIN], callback)
  }

  /**
   * @param pvFC600
   * @param pnPC300
   * @param pnFC500
   * @param pnFN100
   * @param pnFN550
   * @param pdCD301
   * @param pdCD302
   * @param pdCD303
   * @param pvCV304
   * @param pvCV305
   * @param pvCV306
   * @param pnCN307
   * @param pvCV308
   * @param pnCN309
   * @param pnCN310
   * @param pvCV311
   * @param pvCV312
   * @param pvCV313
   * @param pvCV314
   * @param pnCN315
   * @param pnCN316
   * @param plCB317
   * @param pnFC200
   * @param pvLOGIN
   * @param pnFH000
   */
  _insertTabC300(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC300',
      pvFC600 = !!req_PARAM.pvFC600 ? req_PARAM.pvFC600 : null,
      pnPC300 = !!req_PARAM.pnPC300 ? +req_PARAM.pnPC300 : 0,
      pnFC500 = !!req_PARAM.pnFC500 ? +req_PARAM.pnFC500 : 0,
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFN550 = !!req_PARAM.pnFN550 ? +req_PARAM.pnFN550 : 0,
      pdCD301 = !!req_PARAM.pdCD301 ? new Date(req_PARAM.pdCD301) : new Date(),
      pdCD302 = !!req_PARAM.pdCD302 ? new Date(req_PARAM.pdCD302) : new Date(),
      pdCD303 = !!req_PARAM.pdCD303 ? new Date(req_PARAM.pdCD303) : new Date(),
      pvCV304 = !!req_PARAM.pvCV304 ? req_PARAM.pvCV304 : null,
      pvCV305 = !!req_PARAM.pvCV305 ? req_PARAM.pvCV305 : null,
      pvCV306 = !!req_PARAM.pvCV306 ? req_PARAM.pvCV306 : null,
      pnCN307 = !!req_PARAM.pnCN307 ? +req_PARAM.pnCN307 : 0,
      pvCV308 = !!req_PARAM.pvCV308 ? req_PARAM.pvCV308 : null,
      pnCN309 = !!req_PARAM.pnCN309 ? +req_PARAM.pnCN309 : 0,
      pnCN310 = !!req_PARAM.pnCN310 ? +req_PARAM.pnCN310 : 0,
      pvCV311 = !!req_PARAM.pvCV311 ? req_PARAM.pvCV311 : null,
      pvCV312 = !!req_PARAM.pvCV312 ? req_PARAM.pvCV312 : null,
      pvCV313 = !!req_PARAM.pvCV313 ? req_PARAM.pvCV313 : null,
      pvCV314 = !!req_PARAM.pvCV314 ? req_PARAM.pvCV314 : null,
      pnCN315 = !!req_PARAM.pnCN315 ? +req_PARAM.pnCN315 : 0,
      pnCN316 = !!req_PARAM.pnCN316 ? +req_PARAM.pnCN316 : 0,
      plCB317 = !!req_PARAM.plCB317 ? req_PARAM.plCB317 : null,
      pnFC200 = !!req_PARAM.pnFC200 ? +req_PARAM.pnFC200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0

    this.oracleUtilModel._callFunction(funcName, [pvFC600, pnPC300, pnFC500, pnFN100, pnFN550, pdCD301, pdCD302, pdCD303, pvCV304, pvCV305, pvCV306, pnCN307, pvCV308, pnCN309, pnCN310, pvCV311, pvCV312, pvCV313, pvCV314, pnCN315, pnCN316, plCB317, pnFC200, pvLOGIN, pnFH000], callback)
  }

  /**
   * @param pnFC600
   * @param pnPC300
   * @param pvCV314
   * @param pvLOGIN
   */
  _stornoTabC300(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC300',
      pnFC600 = !!req_PARAM.pnFC600 ? req_PARAM.pnFC600 : null,//ban cu su dung string
      pnPC300 = !!req_PARAM.pnPC300 ? +req_PARAM.pnPC300 : 0,
      pvCV314 = !!req_PARAM.pvCV314 ? req_PARAM.pvCV314 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFC600, pnPC300, pvCV314, pvLOGIN], callback)
  }

}