/**
 * M075_MODEL
 * @author Anph - 27/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class M075_MODEL extends Model {
  constructor() {
    super()
  }

  ListOfTabM075F(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM075F"
    this.oracleUtilModel._callProcerdure(procName, [], callback)
  }

  /**
  * HO TRO TIM HO SO, CHUNG TU DDA CAP NHAT TRONG HE THONG 
  * @param pnPM075
  * @param pnFH000            
  * @param pnFH200  -- Cty | Chi nhanh | phan xuong | Lau | Line
  * @param pnSTATY  
  * @param pnFC500  
  * @param pvSTATUS  
  * @param pnFN850  
  * @param pvUSER  
  * @param pdMD075  -- TU NGAY 
  * @param pdMD076  -- DDEN NGAY
  * @param pnBN212 
  * @param pvSEARC 
  * @param pnOFFSET 
  * @param pnLIMIT 
  * @param pnSORT 
  * @param pnDIRECTION 
  */
  _listOfTabM075FAC(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM075FAC",
    pnPM075 = !!req_PARAM.pnPM075 ? +req_PARAM.pnPM075 : 0,
    pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
    pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
    pnSTATY = !!req_PARAM.pnSTATY ? +req_PARAM.pnSTATY : 0,
    pnFC500 = !!req_PARAM.pnFC500 ? +req_PARAM.pnFC500 : 0,
    pvSTATUS = !!req_PARAM.pvSTATUS ? req_PARAM.pvSTATUS : null,
    pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
    pvUSER = !!req_PARAM.pvUSER ? req_PARAM.pvUSER : null,
    pdMD075 = !!req_PARAM.pdMD075 ? req_PARAM.pdMD075 : null,
    pdMD076 = !!req_PARAM.pdMD076 ? req_PARAM.pdMD076 : null,
    pnBN212 = !!req_PARAM.pnBN212 ? +req_PARAM.pnBN212 : 0,
    pvSEARC = !!req_PARAM.pvSEARC ? req_PARAM.pvSEARC : null,
    pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
    pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
    pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
    pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
    pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
  this.oracleUtilModel._callProcerdure(procName, [pnPM075, pnFH000, pnFH200, pnSTATY, pnFC500, pvSTATUS, pnFN850, pvUSER,
    pdMD075, pdMD076, pnBN212, pvSEARC, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
}