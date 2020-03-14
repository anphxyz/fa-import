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
  _listOfTabC300C_p6(params, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC300C',
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null,
      pnFC600 = !!params.pnFC600 ? +params.pnFC600 : 0,
      pvCV314 = !!params.pvCV314 ? params.pvCV314 : null,
      pnFIRSTROW = !!params.pnFIRSTROW ? +params.pnFIRSTROW : 0,
      pnROWCOUNT = !!params.pnROWCOUNT ? +params.pnROWCOUNT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0

    this.oracleUtilModel._callProcerdure(procName, [pvLOGIN, pnFC600, pvCV314, pnFIRSTROW, pnROWCOUNT, pnSORT], callback)
  }

  /**
   * @param pvLOGIN
   * @param pnFC600
   * @param pnFIRSTROW
   * @param pnROWCOUNT
   * @param pnSORT
   */
  _listOfTabC300C_p5(params, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC300C',
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null,
      pnFC600 = !!params.pnFC600 ? params.pnFC600 : null, // o duoi database nhan kieu string
      pnFIRSTROW = !!params.pnFIRSTROW ? +params.pnFIRSTROW : 0,
      pnROWCOUNT = !!params.pnROWCOUNT ? +params.pnROWCOUNT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0

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
  _insertTabC300PMFAST(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC300PMFAST',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pvFC600 = !!params.pvFC600 ? params.pvFC600 : null,
      pdCD302 = !!params.pdCD302 ? params.pdCD302 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pvFC600, pdCD302, pvLOGIN], callback)
  }

  /**
   * -- BAO CAO NHANH CHO CM
   * 
   * @param pvFC600
   * @param pvLOGIN
   */
  _insertTabC300CMFAST(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC300CMFAST',
      pvFC600 = !!params.pvFC600 ? params.pvFC600 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _insertTabC300(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC300',
      pvFC600 = !!params.pvFC600 ? params.pvFC600 : null,
      pnPC300 = !!params.pnPC300 ? +params.pnPC300 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFN550 = !!params.pnFN550 ? +params.pnFN550 : 0,
      pdCD301 = !!params.pdCD301 ? new Date(params.pdCD301) : new Date(),
      pdCD302 = !!params.pdCD302 ? new Date(params.pdCD302) : new Date(),
      pdCD303 = !!params.pdCD303 ? new Date(params.pdCD303) : new Date(),
      pvCV304 = !!params.pvCV304 ? params.pvCV304 : null,
      pvCV305 = !!params.pvCV305 ? params.pvCV305 : null,
      pvCV306 = !!params.pvCV306 ? params.pvCV306 : null,
      pnCN307 = !!params.pnCN307 ? +params.pnCN307 : 0,
      pvCV308 = !!params.pvCV308 ? params.pvCV308 : null,
      pnCN309 = !!params.pnCN309 ? +params.pnCN309 : 0,
      pnCN310 = !!params.pnCN310 ? +params.pnCN310 : 0,
      pvCV311 = !!params.pvCV311 ? params.pvCV311 : null,
      pvCV312 = !!params.pvCV312 ? params.pvCV312 : null,
      pvCV313 = !!params.pvCV313 ? params.pvCV313 : null,
      pvCV314 = !!params.pvCV314 ? params.pvCV314 : null,
      pnCN315 = !!params.pnCN315 ? +params.pnCN315 : 0,
      pnCN316 = !!params.pnCN316 ? +params.pnCN316 : 0,
      plCB317 = !!params.plCB317 ? params.plCB317 : null,
      pnFC200 = !!params.pnFC200 ? +params.pnFC200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0

    this.oracleUtilModel._callFunction(funcName, [pvFC600, pnPC300, pnFC500, pnFN100, pnFN550, pdCD301, pdCD302, pdCD303, pvCV304, pvCV305, pvCV306, pnCN307, pvCV308, pnCN309, pnCN310, pvCV311, pvCV312, pvCV313, pvCV314, pnCN315, pnCN316, plCB317, pnFC200, pvLOGIN, pnFH000], callback)
  }

  /**
   * @param pnFC600
   * @param pnPC300
   * @param pvCV314
   * @param pvLOGIN
   */
  _stornoTabC300(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC300',
      pnFC600 = !!params.pnFC600 ? params.pnFC600 : null,//ban cu su dung string
      pnPC300 = !!params.pnPC300 ? +params.pnPC300 : 0,
      pvCV314 = !!params.pvCV314 ? params.pvCV314 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFC600, pnPC300, pvCV314, pvLOGIN], callback)
  }

}