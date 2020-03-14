/**
 * M650_MODEL
 * @author Anph - 27/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class M650_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * DANH SACH HO SO, CHUNG TU DDA SU DUNG TRONG NOTES
  * @param pnFH000            
  * @param pnFH200
  * @param pnFB050  
  * @param pvFC150  
  * @param pnFC300  
  * @param pnFF000 
  * @param pnMN654 
  * @param pvMV656 
  * @param pnMN657 
  * @param pnMN658 
  * @param pvLOGIN 
  */
  _listOfTabM650_p11(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFC300 = !!req_PARAM.pnFC300 ? +req_PARAM.pnFC300 : 0,
      pnFF000 = !!req_PARAM.pnFF000 ? +req_PARAM.pnFF000 : 0,
      pnMN654 = !!req_PARAM.pnMN654 ? +req_PARAM.pnMN654 : 0,
      pvMV656 = !!req_PARAM.pvMV656 ? req_PARAM.pvMV656 : null,
      pnMN657 = !!req_PARAM.pnMN657 ? +req_PARAM.pnMN657 : 0,
      pnMN658 = !!req_PARAM.pnMN658 ? +req_PARAM.pnMN658 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pvFC150, pnFC300, pnFF000, pnMN654, pvMV656,
      pnMN657, pnMN658, pvLOGIN], callback)
  }
  /**
  * DANH SACH HO SO, CHUNG TU DDA SU DUNG TRONG NOTES
  * @param pnFH000            
  * @param pnFH200
  * @param pnFB050  
  * @param pvFC150  
  * @param pnFC300  
  * @param pnFF000 
  * @param pnMN654 
  * @param pvMV656 
  * @param pnMN658 
  * @param pvLOGIN 
  */
  _listOfTabM650_p10(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFC300 = !!req_PARAM.pnFC300 ? +req_PARAM.pnFC300 : 0,
      pnFF000 = !!req_PARAM.pnFF000 ? +req_PARAM.pnFF000 : 0,
      pnMN654 = !!req_PARAM.pnMN654 ? +req_PARAM.pnMN654 : 0,
      pvMV656 = !!req_PARAM.pvMV656 ? req_PARAM.pvMV656 : null,
      pnMN658 = !!req_PARAM.pnMN658 ? +req_PARAM.pnMN658 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pvFC150, pnFC300, pnFF000, pnMN654, pvMV656,
      pnMN658, pvLOGIN], callback)
  }
  /**
    * DANH SACH HO SO, CHUNG TU DDA SU DUNG TRONG NOTES
    * @param pnFH000            
    * @param pnFH200
    * @param pnFB050  
    * @param pvFC150  
    * @param pnFC300  
    * @param pnFF000 
    * @param pnMN654 
    * @param pvMV656 
    * @param pvLOGIN 
    */
  _listOfTabM650_p9(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFC300 = !!req_PARAM.pnFC300 ? +req_PARAM.pnFC300 : 0,
      pnFF000 = !!req_PARAM.pnFF000 ? +req_PARAM.pnFF000 : 0,
      pnMN654 = !!req_PARAM.pnMN654 ? +req_PARAM.pnMN654 : 0,
      pvMV656 = !!req_PARAM.pvMV656 ? req_PARAM.pvMV656 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pvFC150, pnFC300, pnFF000, pnMN654, pvMV656,
      pvLOGIN], callback)
  }
  /**
  * DANH SACH HO SO, CHUNG TU DDA SU DUNG TRONG CONG VIEC MERIAN
  * @param pnFH000            
  * @param pnFH200
  * @param pnFB050  
  * @param pnFH150  
  * @param pnFC150  
  * @param pnFF000 
  * @param pnMN654 
  * @param pnOFFSET 
  * @param pnLIMIT 
  * @param pnSORT 
  * @param pnDIRECTION 
  */
  _listOfTabM650_p12(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFH150 = !!req_PARAM.pnFH150 ? +req_PARAM.pnFH150 : 0,
      pnFC150 = !!req_PARAM.pnFC150 ? +req_PARAM.pnFC150 : 0,
      pnFF000 = !!req_PARAM.pnFF000 ? +req_PARAM.pnFF000 : 0,
      pnMN654 = !!req_PARAM.pnMN654 ? +req_PARAM.pnMN654 : 0,
      pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
      pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
      pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pnFH150, pnFC150, pnFF000, pnMN654, pnOFFSET,
      pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
  /**
  * DANH SACH HO SO, CHUNG TU DDA SU DUNG TRONG CONG VIEC MERIAN
  * @param pnFH000            
  * @param pnFH200
  * @param pnFB050  
  * @param pnFH150  
  * @param pnFC150  
  * @param pnFF000 
  * @param pnMN654 
  */
  _listOfTabM650_p8(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFH150 = !!req_PARAM.pnFH150 ? +req_PARAM.pnFH150 : 0,
      pnFC150 = !!req_PARAM.pnFC150 ? +req_PARAM.pnFC150 : 0,
      pnFF000 = !!req_PARAM.pnFF000 ? +req_PARAM.pnFF000 : 0,
      pnMN654 = !!req_PARAM.pnMN654 ? +req_PARAM.pnMN654 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pnFH150, pnFC150, pnFF000, pnMN654, pvLOGIN], callback)
  }
  /**
  * DANH SACH HO SO, CHUNG TU DDA SU DUNG TRONG CONG VIEC MERIAN
  * @param pvMV660            
  * @param pnFF000
  * @param pvMV656  
  * @param pvMV659  
  * @param pnMN658  
  * @param pvMV655 
  * @param pnMN654 
  */
  _listOfTabM650_p7(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pvMV660 = !!req_PARAM.pvMV660 ? req_PARAM.pvMV660 : null,
      pnFF000 = !!req_PARAM.pnFF000 ? +req_PARAM.pnFF000 : 0,
      pvMV656 = !!req_PARAM.pvMV656 ? req_PARAM.pvMV656 : null,
      pvMV659 = !!req_PARAM.pvMV659 ? req_PARAM.pvMV659 : null,
      pnMN658 = !!req_PARAM.pnMN658 ? +req_PARAM.pnMN658 : 0,
      pvMV655 = !!req_PARAM.pvMV655 ? req_PARAM.pvMV655 : null,
      pnMN654 = !!req_PARAM.pnMN654 ? +req_PARAM.pnMN654 : 0
    this.oracleUtilModel._callProcerdure(procName, [pvMV660, pnFF000, pvMV656, pvMV659, pnMN658, pvMV655, pnMN654], callback)
  }
  /**
  * HO TRO TIM HO SO, CHUNG TU DDA CAP NHAT TRONG HE THONG 
  * @param pnFH000            
  * @param pnFH200
  * @param pnFF000  -- loai file 
  * @param pnFB050  
  * @param pnFS200  -- chuyen muc 
  * @param pnFS250  -- tieu chi 
  * @param pvMV656  -- ref: B200, C150, H150, S200, C300, M275, DOC, ALL
  * @param pvMV660  -- tags 
  * @param pdMD666F -- from 
  * @param pdMD666T -- to 
  * @param pnOFFSET 
  * @param pnLIMIT 
  * @param pnSORT 
  * @param pnDIRECTION 
  */
  _listOfTabM650_p15(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFF000 = !!req_PARAM.pnFF000 ? +req_PARAM.pnFF000 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pnFS250 = !!req_PARAM.pnFS250 ? +req_PARAM.pnFS250 : 0,
      pvMV656 = !!req_PARAM.pvMV656 ? req_PARAM.pvMV656 : null,
      pvMV660 = !!req_PARAM.pvMV660 ? req_PARAM.pvMV660 : null,
      pdMD666F = !!req_PARAM.pdMD666F ? req_PARAM.pdMD666F : null,
      pdMD666T = !!req_PARAM.pdMD666T ? req_PARAM.pdMD666T : null,
      pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
      pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
      pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFF000, pnFB050, pnFS200, pnFS250, pvMV656,
      pvMV660, pdMD666F, pdMD666T, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }


  /**
  * DANH SACH TAI LIEU, HO SO THEO LOAI THIET BI (S200)
  * @param pnFH000            
  * @param pnFH200
  * @param pnFB050  
  * @param pvFC150  
  * @param pnFC300  
  * @param pnFF000 
  * @param pnMN654 
  * @param pvMV656 
  * @param pnMN657 
  * @param pnMN658 
  * @param pvLOGIN 
  */
  _listOfTabM650S(req_PARAM, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650S",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFC300 = !!req_PARAM.pnFC300 ? +req_PARAM.pnFC300 : 0,
      pnFF000 = !!req_PARAM.pnFF000 ? +req_PARAM.pnFF000 : 0,
      pnMN654 = !!req_PARAM.pnMN654 ? +req_PARAM.pnMN654 : 0,
      pvMV656 = !!req_PARAM.pvMV656 ? req_PARAM.pvMV656 : null,
      pnMN657 = !!req_PARAM.pnMN657 ? +req_PARAM.pnMN657 : 0,
      pnMN658 = !!req_PARAM.pnMN658 ? +req_PARAM.pnMN658 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pvFC150, pnFC300, pnFF000, pnMN654, pvMV656,
      pnMN657, pnMN658, pvLOGIN], callback)
  }


  /**
  * CAO NHAT TAI LIEU, HINH ANH CHO FACILIO & MERIAN
  * @param pnPM650                     
  * @param pnFH000  -- phan he
  * @param pnFH200  -- khu vuc
  * @param pnFB050  -- du an
  * @param pnFH150  -- HD
  * @param pvFC150  -- CV
  * @param pnFC300  -- Bao cao
  * @param pvMV651 
  * @param pvMV652                     
  * @param pvMV653
  * @param pnMN654
  * @param pvMV655  
  * @param pvMV656  
  * @param pnMN657  
  * @param pnMN658 
  * @param pvMV659 
  * @param pvMV660 
  * @param pnFF000                     
  */
  _insertTabM650C(req_PARAM, callback) {
    const funcName = this.SYNONYM.M2017_FACI + "InsertTabM650C",
      pnPM650 = !!req_PARAM.pnPM650 ? +req_PARAM.pnPM650 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFH150 = !!req_PARAM.pnFH150 ? +req_PARAM.pnFH150 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFC300 = !!req_PARAM.pnFC300 ? +req_PARAM.pnFC300 : 0,
      pvMV651 = !!req_PARAM.pvMV651 ? req_PARAM.pvMV651 : "",
      pvMV652 = !!req_PARAM.pvMV652 ? req_PARAM.pvMV652 : null,
      pvMV653 = !!req_PARAM.pvMV653 ? req_PARAM.pvMV653 : null,
      pnMN654 = !!req_PARAM.pnMN654 ? +req_PARAM.pnMN654 : 0,
      pvMV655 = !!req_PARAM.pvMV655 ? req_PARAM.pvMV655 : "",
      pvMV656 = !!req_PARAM.pvMV656 ? req_PARAM.pvMV656 : null,
      pnMN657 = !!req_PARAM.pnMN657 ? +req_PARAM.pnMN657 : 0,
      pnMN658 = !!req_PARAM.pnMN658 ? +req_PARAM.pnMN658 : 0,
      pvMV659 = !!req_PARAM.pvMV659 ? req_PARAM.pvMV659 : null,
      pvMV660 = !!req_PARAM.pvMV660 ? req_PARAM.pvMV660 : "",
      pnFF000 = !!req_PARAM.pnFF000 ? +req_PARAM.pnFF000 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPM650, pnFH000, pnFH200, pnFB050, pnFH150, pvFC150, pnFC300,
      pvMV651, pvMV652, pvMV653, pnMN654, pvMV655, pvMV656, pnMN657, pnMN658, pvMV659, pvMV660, pnFF000, pvLOGIN], callback)
  }

  /**
    * -- huy chung tu, tai lieu 
    * @param pnPM650                     
    */
  _stornoTabM650(req_PARAM, callback) {
    const funcName = this.SYNONYM.M2017_FACI + "StornoTabM650",
      pnPM650 = !!req_PARAM.pnPM650 ? +req_PARAM.pnPM650 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnPM650, pvLOGIN], callback)
  }
}