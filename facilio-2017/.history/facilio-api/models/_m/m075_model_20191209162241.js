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

  ListOfTabM075F(params, callback) {
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
  _listOfTabM075FAC(params, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM075FAC",
    pnPM075 = !!params.pnPM075 ? +params.pnPM075 : 0,
    pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
    pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
    pnSTATY = !!params.pnSTATY ? +params.pnSTATY : 0,
    pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
    pvSTATUS = !!params.pvSTATUS ? params.pvSTATUS : null,
    pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
    pvUSER = !!params.pvUSER ? params.pvUSER : null,
    pdMD075 = !!params.pdMD075 ? params.pdMD075 : null,
    pdMD076 = !!params.pdMD076 ? params.pdMD076 : null,
    pnBN212 = !!params.pnBN212 ? +params.pnBN212 : 0,
    pvSEARC = !!params.pvSEARC ? params.pvSEARC : null,
    pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
    pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
    pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
    pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
    pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
  this.oracleUtilModel._callProcerdure(procName, [pnPM075, pnFH000, pnFH200, pnSTATY, pnFC500, pvSTATUS, pnFN850, pvUSER,
    pdMD075, pdMD076, pnBN212, pvSEARC, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
}