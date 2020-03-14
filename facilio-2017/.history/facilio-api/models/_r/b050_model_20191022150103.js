/**
 * B050_MODEL
 * @author Linhnc - 22/12/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class B050_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
  * -- xuat ra file PDF hoac excel cho tung may (vi tri)
  * 
  * @param pnFB050
  * @param pnFS250 
  * @param pvFC550
  * @param pvBV003
  * @param pvLOGIN
  */
  _listOfTabB050E(req_PARAM, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ListOfTabB050E',
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFS250 = !!req_PARAM.pnFS250 ? +req_PARAM.pnFS250 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFB050, pnFS250, pvFC550, pvBV003, pvLOGIN], callback)
  }

  _reportOfTabB050BS(req_PARAM, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ReportOfTabB050BS',
    pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
    pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
    pdFRDAT = !!req_PARAM.pdFRDAT ? new Date(req_PARAM.pdFRDAT) : new Date(),
    pdTODAT = !!req_PARAM.pdTODAT ? new Date(req_PARAM.pdTODAT) : new Date(),
    pvSEARC = !!req_PARAM.pvSEARC ? req_PARAM.pvSEARC : null,
    pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
    pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
    pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pdFRDAT, pdTODAT, pvSEARC, pnOFFSET, pnLIMIT, pvLOGIN], callback)
  }

  _histOfTabB050(req_PARAM, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'HistOfTabB050',
    pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0, 
    pdCD153F = !!req_PARAM.pdCD153F ? new Date(req_PARAM.pdCD153F) : new Date(),
    pdCD153T = !!req_PARAM.pdCD153T ? new Date(req_PARAM.pdCD153T) : new Date(),
    pvMTYPE = !!req_PARAM.pvMTYPE ? req_PARAM.pvMTYPE : null, 
    pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFB050, pdCD153F, pdCD153T, pvMTYPE, pvLOGIN], callback)
  }

 
}