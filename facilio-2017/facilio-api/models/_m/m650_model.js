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
  _listOfTabM650_p11(params, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFC300 = !!params.pnFC300 ? +params.pnFC300 : 0,
      pnFF000 = !!params.pnFF000 ? +params.pnFF000 : 0,
      pnMN654 = !!params.pnMN654 ? +params.pnMN654 : 0,
      pvMV656 = !!params.pvMV656 ? params.pvMV656 : null,
      pnMN657 = !!params.pnMN657 ? +params.pnMN657 : 0,
      pnMN658 = !!params.pnMN658 ? +params.pnMN658 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _listOfTabM650_p10(params, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFC300 = !!params.pnFC300 ? +params.pnFC300 : 0,
      pnFF000 = !!params.pnFF000 ? +params.pnFF000 : 0,
      pnMN654 = !!params.pnMN654 ? +params.pnMN654 : 0,
      pvMV656 = !!params.pvMV656 ? params.pvMV656 : null,
      pnMN658 = !!params.pnMN658 ? +params.pnMN658 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _listOfTabM650_p9(params, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFC300 = !!params.pnFC300 ? +params.pnFC300 : 0,
      pnFF000 = !!params.pnFF000 ? +params.pnFF000 : 0,
      pnMN654 = !!params.pnMN654 ? +params.pnMN654 : 0,
      pvMV656 = !!params.pvMV656 ? params.pvMV656 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _listOfTabM650_p12(params, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFC150 = !!params.pnFC150 ? +params.pnFC150 : 0,
      pnFF000 = !!params.pnFF000 ? +params.pnFF000 : 0,
      pnMN654 = !!params.pnMN654 ? +params.pnMN654 : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _listOfTabM650_p8(params, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFC150 = !!params.pnFC150 ? +params.pnFC150 : 0,
      pnFF000 = !!params.pnFF000 ? +params.pnFF000 : 0,
      pnMN654 = !!params.pnMN654 ? +params.pnMN654 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _listOfTabM650_p7(params, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pvMV660 = !!params.pvMV660 ? params.pvMV660 : null,
      pnFF000 = !!params.pnFF000 ? +params.pnFF000 : 0,
      pvMV656 = !!params.pvMV656 ? params.pvMV656 : null,
      pvMV659 = !!params.pvMV659 ? params.pvMV659 : null,
      pnMN658 = !!params.pnMN658 ? +params.pnMN658 : 0,
      pvMV655 = !!params.pvMV655 ? params.pvMV655 : null,
      pnMN654 = !!params.pnMN654 ? +params.pnMN654 : 0
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
  _listOfTabM650_p15(params, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFF000 = !!params.pnFF000 ? +params.pnFF000 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pvMV656 = !!params.pvMV656 ? params.pvMV656 : null,
      pvMV660 = !!params.pvMV660 ? params.pvMV660 : null,
      pdMD666F = !!params.pdMD666F ? params.pdMD666F : null,
      pdMD666T = !!params.pdMD666T ? params.pdMD666T : null,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _listOfTabM650S(params, callback) {
    const procName = this.SYNONYM.M2017_CUR + "ListOfTabM650S",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFC300 = !!params.pnFC300 ? +params.pnFC300 : 0,
      pnFF000 = !!params.pnFF000 ? +params.pnFF000 : 0,
      pnMN654 = !!params.pnMN654 ? +params.pnMN654 : 0,
      pvMV656 = !!params.pvMV656 ? params.pvMV656 : null,
      pnMN657 = !!params.pnMN657 ? +params.pnMN657 : 0,
      pnMN658 = !!params.pnMN658 ? +params.pnMN658 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _insertTabM650C(params, callback) {
    const funcName = this.SYNONYM.M2017_FACI + "InsertTabM650C",
      pnPM650 = !!params.pnPM650 ? +params.pnPM650 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFC300 = !!params.pnFC300 ? +params.pnFC300 : 0,
      pvMV651 = !!params.pvMV651 ? params.pvMV651 : "",
      pvMV652 = !!params.pvMV652 ? params.pvMV652 : null,
      pvMV653 = !!params.pvMV653 ? params.pvMV653 : null,
      pnMN654 = !!params.pnMN654 ? +params.pnMN654 : 0,
      pvMV655 = !!params.pvMV655 ? params.pvMV655 : "",
      pvMV656 = !!params.pvMV656 ? params.pvMV656 : null,
      pnMN657 = !!params.pnMN657 ? +params.pnMN657 : 0,
      pnMN658 = !!params.pnMN658 ? +params.pnMN658 : 0,
      pvMV659 = !!params.pvMV659 ? params.pvMV659 : null,
      pvMV660 = !!params.pvMV660 ? params.pvMV660 : "",
      pnFF000 = !!params.pnFF000 ? +params.pnFF000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPM650, pnFH000, pnFH200, pnFB050, pnFH150, pvFC150, pnFC300,
      pvMV651, pvMV652, pvMV653, pnMN654, pvMV655, pvMV656, pnMN657, pnMN658, pvMV659, pvMV660, pnFF000, pvLOGIN], callback)
  }

  /**
    * -- huy chung tu, tai lieu 
    * @param pnPM650                     
    */
  _stornoTabM650(params, callback) {
    const funcName = this.SYNONYM.M2017_FACI + "StornoTabM650",
      pnPM650 = !!params.pnPM650 ? +params.pnPM650 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnPM650, pvLOGIN], callback)
  }
}