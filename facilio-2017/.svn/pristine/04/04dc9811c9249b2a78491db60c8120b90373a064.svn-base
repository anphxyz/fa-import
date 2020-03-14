/**
 * * B150_MODEL
 * @author Toailq - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class B150_MODEL extends Model {
  constructor() {
    super()
  }

  /**
  * _listOfTabB150
  *  @param pnFH000 
  *  @param pnFH200
  *  @param pnFB100
  *  @param pvLOGIN
  */
  _listOfTabB150(req_PARAM, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB150',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB100 = !!req_PARAM.pnFB100 ? +req_PARAM.pnFB100 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB100, pvLOGIN], callback)
  }

  /** -------------------B2017_FACI-------------- */

  /**
  * -- moi cong viec bao tri se ddi kem theo la danh sach kiem tra (checklist)
  * -- nham tranh viec nham lan, bo qua mot so cong viec khi can bao tri 
  * @param pnFH000                    
  * @param pnFH200
  * @param pnFB100  
  * @param pnPB150  -- ID thuoc Checklist
  * @param pvBV151  -- dien giai
  * @param pnBN152  -- so thu tu trong qui trinh bao tri    
  * @param pvBV153  -- du phong
  * @param pvBV154  
  * @param pvBV155  
  * @param pnBN156  
  * @param pnBN157  
  * @param pnBN158  
  * @param pdBD159  
  * @param pdBD160  
  * @param pvLOGIN  
  */
  _insertTabB150(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB150',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB100 = !!req_PARAM.pnFB100 ? +req_PARAM.pnFB100 : 0,
      pnPB150 = !!req_PARAM.pnPB150 ? +req_PARAM.pnPB150 : 0,
      pvBV151 = !!req_PARAM.pvBV151 ? req_PARAM.pvBV151 : null,
      pnBN152 = !!req_PARAM.pnBN152 ? +req_PARAM.pnBN152 : 0,
      pvBV153 = !!req_PARAM.pvBV153 ? req_PARAM.pvBV153 : null,
      pvBV154 = !!req_PARAM.pvBV154 ? req_PARAM.pvBV154 : null,
      pvBV155 = !!req_PARAM.pvBV155 ? req_PARAM.pvBV155 : null,
      pnBN156 = !!req_PARAM.pnBN156 ? +req_PARAM.pnBN156 : 0,
      pnBN157 = !!req_PARAM.pnBN157 ? +req_PARAM.pnBN157 : 0,
      pnBN158 = !!req_PARAM.pnBN158 ? +req_PARAM.pnBN158 : 0,
      pdBD159 = !!req_PARAM.pdBD159 ? req_PARAM.pdBD159 : null,
      pdBD160 = !!req_PARAM.pdBD160 ? req_PARAM.pdBD160 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFB100, pnPB150, pvBV151, pnBN152, pvBV153,
      pvBV154, pvBV155, pnBN156, pnBN157, pnBN158, pdBD159, pdBD160, pvLOGIN], callback)
  }

  /**
  * -- xoa bo thong tin ve cac buoc khi bao tri (qui trinh bao tri)
  * @param pnFB100  -- ID thuoc Checklist                    
  * @param pnPB150  -- Loai BAO TRI (Wartungstyp)
  * @param pvLOGIN  
  */
  _stornoTabB150(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'StornoTabB150',
      pnFB100 = !!req_PARAM.pnFB100 ? +req_PARAM.pnFB100 : 0,
      pnPB150 = !!req_PARAM.pnPB150 ? +req_PARAM.pnPB150 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB100, pnPB150, pvLOGIN], callback)
  }
}