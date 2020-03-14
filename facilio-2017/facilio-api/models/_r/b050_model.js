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
  _listOfTabB050E(params, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ListOfTabB050E',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFB050, pnFS250, pvFC550, pvBV003, pvLOGIN], callback)
  }

  _reportOfTabB050BS(params, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'ReportOfTabB050BS',
    pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
    pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
    pdFRDAT = !!params.pdFRDAT ? new Date(params.pdFRDAT) : new Date(),
    pdTODAT = !!params.pdTODAT ? new Date(params.pdTODAT) : new Date(),
    pvSEARC = !!params.pvSEARC ? params.pvSEARC : null,
    pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
    pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
    pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pdFRDAT, pdTODAT, pvSEARC, pnOFFSET, pnLIMIT, pvLOGIN], callback)
  }

  _histOfTabB050(params, callback) {

    const procName = this.SYNONYM.R2017_CUR + 'HistOfTabB050',
    pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0, 
    pdCD153F = !!params.pdCD153F ? new Date(params.pdCD153F) : new Date(),
    pdCD153T = !!params.pdCD153T ? new Date(params.pdCD153T) : new Date(),
    pvMTYPE = !!params.pvMTYPE ? params.pvMTYPE : null, 
    pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFB050, pdCD153F, pdCD153T, pvMTYPE, pvLOGIN], callback)
  }

 
}