/**
 * * B350_MODEL
 * @author Toailq - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class B350_MODEL extends Model {
  constructor() {
    super()
  }

  /**
  * danh sach nhung may CAN cap nhat SO GIO HOAT DDONG
  *  @param pnFN850 
  *  @param pnFB050    
  *  @param pnOFFSET   -- giong nhu binh thuong cua facilio
  *  @param pnLIMIT   -- giong nhu binh thuong cua facilio
  *  @param pnSORT   -- giong nhu binh thuong cua facilio
  *  @param pnDIRECTION   -- TAB tim kiem: 1: PM, 2: BT
  */
  _listOfTabB350_p7(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB350',
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFN850, pnFB050, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
  /**
  * danh sach nhung may CAN cap nhat SO GIO HOAT DDONG
  *  @param pnFN850 
  *  @param pnFB050    
  *  @param pnOFFSET   -- giong nhu binh thuong cua facilio
  *  @param pnLIMIT   -- giong nhu binh thuong cua facilio
  *  @param pnSORT   -- giong nhu binh thuong cua facilio
  *  @param pnDIRECTION   -- TAB tim kiem: 1: PM, 2: BT
  */
  _listOfTabB350BT(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB350BT',
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFN850, pnFB050, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
  /**
  * danh sach nhung may ddang cap nhat thong so hoat ddong
  *  @param pnFH000 
  *  @param pnFH200    
  *  @param pnFB050   -- vi tri may hoac thiet bi
  *  @param pnFS250   
  *  @param pnFB000   
  *  @param pvBV003 -- ngôn ngữ
  *  @param pvBV353   
  */
  _listOfTabB350_p8(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB350',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnFB000 = !!params.pnFB000 ? +params.pnFB000 : 0,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvBV353 = !!params.pvBV353 ? params.pvBV353 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pnFS250, pnFB000, pvBV003, pvBV353, pvLOGIN], callback)
  }

  /** -------------------B2017_FACI-------------- */

  /**
  * cap nhat thong tin (ddon vi) tinh chu ky bao tri (theo gio hoat ddong, theo dung luong va theo so ddo)
  * @param pnFB050                    
  * @param pnBN351
  */
  _updateTabB350B(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB350B',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnBN351 = !!params.pnBN351 ? +params.pnBN351 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pnBN351, pvLOGIN], callback)
  }
}