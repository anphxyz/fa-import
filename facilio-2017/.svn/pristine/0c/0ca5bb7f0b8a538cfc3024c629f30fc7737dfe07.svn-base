/**
 * * B400_MODEL
 * @author Toailq - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class B400_MODEL extends Model {
  constructor() {
    super()
  }

  /**
  * DANH SACH CAC PHUONG AN BAO TRI THUOC VE MOT TB
  *  @param pnFB050  
  *  @param pvFC550 -- M,E,T,O
  *  @param pvLOGIN      
  */
  _listOfTabB400BS(req_PARAM, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB400BS',
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null


    this.oracleUtilModel._callProcerdure(procName, [pnFB050, pvFC550, pvLOGIN], callback)
  }

  /** -------------------B2017_IMP-------------- */

  /**
  * DANH SACH CAC PHUONG AN BAO TRI THEO THIET BI
  *  @param pnFB050 -- THIET BI
  *  @param pvBV003 -- NGON NGU (vi)
  *  @param pvLOGIN      
  */
  _listOfTabB400(req_PARAM, callback) {

    const procName = this.SYNONYM.B2017_CURIMP + 'ListOfTabB400',
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null


    this.oracleUtilModel._callProcerdure(procName, [pnFB050, pvBV003, pvLOGIN], callback)
  }

  /** -------------------B2017_FACI-------------- */

  /**
  * xoa tat ca phuong an bao tri (B400) va danh sach cong viec (B450)
  * @param pnFH000  -- PHAN HE                      
  * @param pnFH200  -- MUC QL
  * @param pnFB050  -- POSITION
  * @param pnFS200  -- LOAI MAY
  * @param pvFC550  -- MA CHU KY
  */
  _historyTabB400(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'HistoryTabB400',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFB050, pnFS200, pvFC550, pvLOGIN], callback)
  }

  /**
  * DIEU CHINH PHUONG AN BAO TRI CUA TUNG MAY QUA BANG EXCEL
  * @param pnFH000                      
  * @param pnFH200
  * @param pnFB050  
  * @param pnFS200  
  * @param pnFS250  
  * @param pvFC550  -- Co, dien
  * @param pnFB100  
  * @param pvBV001  -- chu ky
  * @param pvBV003  -- ngon ngu
  * @param pvBV451  -- Checkpoint
  * @param pnBN402  -- so ngay
  * @param pnBN405  -- khuyen cao theo so gio SX 
  * @param pnBN406  -- khuyen cao theo so ngay SX
  * @param pvBV408  -- ngay trong tuan
  * @param pvBV410  -- (Y) khuyen cao hoac (N) khong khuyen cao
  * @param pnBN413  -- han muc
  * @param pdBD415  -- ngay trong thang hoac quy
  */
  _updateTabB400_p18(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB400',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pnFS250 = !!req_PARAM.pnFS250 ? +req_PARAM.pnFS250 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? +req_PARAM.pvFC550 : 0,
      pnFB100 = !!req_PARAM.pnFB100 ? +req_PARAM.pnFB100 : 0,
      pvBV001 = !!req_PARAM.pvBV001 ? req_PARAM.pvBV001 : null,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvBV451 = !!req_PARAM.pvBV451 ? req_PARAM.pvBV451 : null,
      pnBN402 = !!req_PARAM.pnBN402 ? +req_PARAM.pnBN402 : 0,
      pnBN405 = !!req_PARAM.pnBN405 ? +req_PARAM.pnBN405 : 0,
      pnBN406 = !!req_PARAM.pnBN406 ? +req_PARAM.pnBN406 : 0,
      pvBV408 = !!req_PARAM.pvBV408 ? req_PARAM.pvBV408 : null,
      pvBV410 = !!req_PARAM.pvBV410 ? req_PARAM.pvBV410 : null,
      pnBN413 = !!req_PARAM.pnBN413 ? +req_PARAM.pnBN413 : 0,
      pdBD415 = !!req_PARAM.pdBD415 ? req_PARAM.pdBD415 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFB050, pnFS200, pnFS250, pvFC550, pnFB100,
      pvBV001, pvBV003, pvBV451, pnBN402, pnBN405, pnBN406, pvBV408, pvBV410, pnBN413, pdBD415, pvLOGIN], callback)
  }

  /**
  *  -- XOA BO PHUONG AN BAO TRI PHU THUOC CUA MAY B050
  * @param pnPB400                      
  */
  _stornoTabB400(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'StornoTabB400',
      pnPB400 = !!req_PARAM.pnPB400 ? +req_PARAM.pnPB400 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB400, pvLOGIN], callback)
  }

  /**
  *  -- THAY DOI THOI GIAN DU KIEN
  * @param pnFB400 -- ID PHUONG AN BAO TRI 
  * @param pnBN404 -- so ngay                    
  */
  _updateTabB400_p3(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB400',
      pnFB400 = !!req_PARAM.pnFB400 ? +req_PARAM.pnFB400 : 0,
      pnBN404 = !!req_PARAM.pnBN404 ? +req_PARAM.pnBN404 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB400, pnBN404, pvLOGIN], callback)
  }

  /**
  * -- PHUONG AN BT LUON XUAT PHAT TU PHUONG AN CHUNG (B100), NHUNG CHO MOI MAY DDEU SE CO MOT PHUONG AN 
  * -- RIENG TUY THUOC VAO MUC DDICH, NANG SUAT SAN XUAT VA TINH TRANG CUA TUNG MAY
  * @param pnPB400
  * @param pnFB050  -- Vi tri may (position) neu co
  * @param pnFS250
  * @param pnFC450  -- muc ddo uu tien
  * @param pvFC550  -- type
  * @param pnBN401  -- muc ddo kinh nghiem can co (1 - 10)
  * @param pnBN402   -- so ngay can bao tri, in Tagen
  * @param pdBD403  -- ngay bao tri lan cuoi
  * @param pnBN404  -- thoi gian bao tri du kien (in Minuten)  
  * @param pnBN405  -- tinh nguoc xuoi tuy theo ddon vi tinh: 1 (tang), 0 (giam)
  * @param pnBN406
  * @param pvBV407  -- dien giai
  * @param pvBV408  -- supervisor
  * @param pvBV409  -- customer's view
  * @param pvBV410  -- KHUYEN CAO THAY THE PHU TUNG
  * @param pnBN411  -- theo so gio production
  * @param pnBN412  -- theo so ngay (30, 60, 90, 180)
  * @param pnBN413  -- muc toi thieu
  * @param pdBD414
  * @param pdBD415
  * @param pdBD416
  * @param pnFH000
  * @param pnFH200  -- cho ca Cty | Chi nhanh | Phan xuong | Lau | Line 
  * @param pnFS200  -- phuong an bao tri ap ddat cho may 
  * @param pnFB100   -- Luon ddi kem voi mot loai BAO TRI (wartungytp)
  * @param pnFB000
  * @param pvBV001
  * @param pvVV501
  */
  _insertTabB400(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB400',
      pnPB400 = !!req_PARAM.pnPB400 ? +req_PARAM.pnPB400 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFS250 = !!req_PARAM.pnFS250 ? +req_PARAM.pnFS250 : 0,
      pnFC450 = !!req_PARAM.pnFC450 ? +req_PARAM.pnFC450 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pnBN401 = !!req_PARAM.pnBN401 ? +req_PARAM.pnBN401 : 0,
      pnBN402 = !!req_PARAM.pnBN402 ? +req_PARAM.pnBN402 : 0,
      pdBD403 = !!req_PARAM.pdBD403 ? req_PARAM.pdBD403 : null,
      pnBN404 = !!req_PARAM.pnBN404 ? +req_PARAM.pnBN404 : 0,
      pnBN405 = !!req_PARAM.pnBN405 ? +req_PARAM.pnBN405 : 0,
      pnBN406 = !!req_PARAM.pnBN406 ? +req_PARAM.pnBN406 : 0,
      pvBV407 = !!req_PARAM.pvBV407 ? req_PARAM.pvBV407 : null,
      pvBV408 = !!req_PARAM.pvBV408 ? req_PARAM.pvBV408 : null,
      pvBV409 = !!req_PARAM.pvBV409 ? req_PARAM.pvBV409 : null,
      pvBV410 = !!req_PARAM.pvBV410 ? req_PARAM.pvBV410 : null,
      pnBN411 = !!req_PARAM.pnBN411 ? +req_PARAM.pnBN411 : 0,
      pnBN412 = !!req_PARAM.pnBN412 ? +req_PARAM.pnBN412 : 0,
      pnBN413 = !!req_PARAM.pnBN413 ? +req_PARAM.pnBN413 : 0,
      pdBD414 = !!req_PARAM.pdBD414 ? req_PARAM.pdBD414 : null,
      pdBD415 = !!req_PARAM.pdBD415 ? req_PARAM.pdBD415 : null,
      pdBD416 = !!req_PARAM.pdBD416 ? req_PARAM.pdBD416 : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pnFB100 = !!req_PARAM.pnFB100 ? +req_PARAM.pnFB100 : 0,
      pnFB000 = !!req_PARAM.pnFB000 ? +req_PARAM.pnFB000 : 0,
      pvBV001 = !!req_PARAM.pvBV001 ? req_PARAM.pvBV001 : null,
      pvVV501 = !!req_PARAM.pvVV501 ? req_PARAM.pvVV501 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB400, pnFB050, pnFS250, pnFC450, pvFC550, pnBN401, pnBN402,
      pdBD403, pnBN404, pnBN405, pnBN406, pvBV407, pvBV408, pvBV409, pvBV410, pnBN411, pnBN412, pnBN413,
      pdBD414, pdBD415, pdBD416, pnFH000, pnFH200, pnFS200, pnFB100, pnFB000, pvBV001, pvVV501, pvLOGIN], callback)
  }

  /** -------------------B2017_FACI-------------- */

  /**
  *  -- CHINH SUA VA CAP NHAT MOI CHO PHUONG AN BAO TRI CUA 1 THIET BI FB050
  * @param pnFB400  -- PHUONG AN BT
  * @param pvBV401  --B400.BN401%TYPE -- SL = 0
  * @param pnBN402  -- so ngay
  * @param pvBV408  -- ngay trong tuan MO
  * @param pnBN412  -- Co (1), Dien (2)
  * @param pnBN413  -- han muc LIM
  * @param pvBV001  -- MA CHU KY
  * @param pvBV003  -- NGON NGU (vi)
  * @param pvVV501  -- Ma vat tu
  * @param pnFB450  -- ID CHECKLIST
  * @param pvBV451  -- ten cong viec
  * @param pnBN452  -- so thu tu
  * @param pvBV453  -- CV trong yeu (1)
  * @param pvBV454  -- yeu cau ky thuat
  * @param pnBN458  -- trang thai 1: may chay, 0: may dung 
  * @param pvBV203  -- ngay BT cuoi
  * @param pnFB100  -- ID B100
  * @param pvBV052  -- MTS
  * @param pnFB050  -- ID THIET BI
  * @param pnFN850  -- NHOM TO
  * @param pvSV251  -- Bo phan
  * @param pnFS250  -- ID BO PHAN THIET BI
  * @param pnFS200  -- LOAI MAY
  * @param pnFH200  -- Khu vuc
  * @param pnFH000
  */
  _updateTabB400PM(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_IMP + 'UpdateTabB400PM',
      pnFB400 = !!req_PARAM.pnFB400 ? +req_PARAM.pnFB400 : 0,
      pvBV401 = !!req_PARAM.pvBV401 ? req_PARAM.pvBV401 : null,
      pnBN402 = !!req_PARAM.pnBN402 ? +req_PARAM.pnBN402 : 0,
      pvBV408 = !!req_PARAM.pvBV408 ? req_PARAM.pvBV408 : null,
      pnBN412 = !!req_PARAM.pnBN412 ? +req_PARAM.pnBN412 : 0,
      pnBN413 = !!req_PARAM.pnBN413 ? +req_PARAM.pnBN413 : 0,
      pvBV001 = !!req_PARAM.pvBV001 ? req_PARAM.pvBV001 : null,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvVV501 = !!req_PARAM.pvVV501 ? req_PARAM.pvVV501 : null,
      pnFB450 = !!req_PARAM.pnFB450 ? +req_PARAM.pnFB450 : 0,
      pvBV451 = !!req_PARAM.pvBV451 ? req_PARAM.pvBV451 : null,
      pnBN452 = !!req_PARAM.pnBN452 ? +req_PARAM.pnBN452 : 0,
      pvBV453 = !!req_PARAM.pvBV453 ? req_PARAM.pvBV453 : null,
      pvBV454 = !!req_PARAM.pvBV454 ? req_PARAM.pvBV454 : null,
      pnBN458 = !!req_PARAM.pnBN458 ? +req_PARAM.pnBN458 : 0,
      pvBV203 = !!req_PARAM.pvBV203 ? req_PARAM.pvBV203 : null,
      pnFB100 = !!req_PARAM.pnFB100 ? +req_PARAM.pnFB100 : 0,
      pvBV052 = !!req_PARAM.pvBV052 ? req_PARAM.pvBV052 : null,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvSV251 = !!req_PARAM.pvSV251 ? req_PARAM.pvSV251 : null,
      pnFS250 = !!req_PARAM.pnFS250 ? +req_PARAM.pnFS250 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB400, pvBV401, pnBN402, pvBV408, pnBN412,
      pnBN413, pvBV001, pvBV003, pvVV501, pnFB450, pvBV451, pnBN452, pvBV453, pvBV454, pnBN458,
      pvBV203, pnFB100, pvBV052, pnFB050, pnFN850, pvSV251, pnFS250, pnFS200, pnFH200, pnFH000, pvLOGIN], callback)
  }

  /**
  *  -- CHINH SUA VA CAP NHAT MOI CHO PHUONG AN BAO TRI CUA 1 THIET BI FB050
  * @param pnFB400  -- ID PHUONG AN BAO TRI
  * @param pvBV401  -- B400.BN401%TYPE -- SL = BN457
  * @param pnBN402  -- so ngay
  * @param pvBV408  -- ngay trong tuan MO
  * @param pnBN412  -- Co (1), Dien (2)
  * @param pnBN413  -- han muc LIM
  * @param pvBV001  -- MA CHU KY
  * @param pvBV003  -- NGON NGU (vi)
  * @param pvVV501  -- Ma vat tu
  * @param pnFB450  -- ID CHECKLIST
  * @param pvBV451  -- ten cong viec
  * @param pnBN452  -- so thu tu
  * @param pvBV453  ---chung loai
  * @param pvBV455  -- Chung loai goc
  * @param pnBN458  -- vi tri
  * @param pvBV203  -- ngay BT cuoi
  * @param pnFB100  -- ID B100
  * @param pvBV052  -- MTS
  * @param pnFB050  -- ID THIET BI
  * @param pnFN850  -- NHOM TO
  * @param pvSV251  -- Bo phan
  * @param pnFS250  -- ID BO PHAN THIET BI
  * @param pnFS200  -- LOAI MAY
  * @param pnFH200  -- Khu vuc
  * @param pnFH000
  */
  _updateTabB400BT(req_PARAM, callback) {

    const funcName = this.SYNONYM.B2017_IMP + 'UpdateTabB400BT',
      pnFB400 = !!req_PARAM.pnFB400 ? +req_PARAM.pnFB400 : 0,
      pvBV401 = !!req_PARAM.pvBV401 ? req_PARAM.pvBV401 : null,
      pnBN402 = !!req_PARAM.pnBN402 ? +req_PARAM.pnBN402 : 0,
      pvBV408 = !!req_PARAM.pvBV408 ? req_PARAM.pvBV408 : null,
      pnBN412 = !!req_PARAM.pnBN412 ? +req_PARAM.pnBN412 : 0,
      pnBN413 = !!req_PARAM.pnBN413 ? +req_PARAM.pnBN413 : 0,
      pvBV001 = !!req_PARAM.pvBV001 ? req_PARAM.pvBV001 : null,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvVV501 = !!req_PARAM.pvVV501 ? req_PARAM.pvVV501 : null,
      pnFB450 = !!req_PARAM.pnFB450 ? +req_PARAM.pnFB450 : 0,
      pvBV451 = !!req_PARAM.pvBV451 ? req_PARAM.pvBV451 : null,
      pnBN452 = !!req_PARAM.pnBN452 ? +req_PARAM.pnBN452 : 0,
      pvBV453 = !!req_PARAM.pvBV453 ? req_PARAM.pvBV453 : null,
      pvBV455 = !!req_PARAM.pvBV455 ? req_PARAM.pvBV455 : null,
      pnBN458 = !!req_PARAM.pnBN458 ? +req_PARAM.pnBN458 : 0,
      pvBV203 = !!req_PARAM.pvBV203 ? req_PARAM.pvBV203 : null,
      pnFB100 = !!req_PARAM.pnFB100 ? +req_PARAM.pnFB100 : 0,
      pvBV052 = !!req_PARAM.pvBV052 ? req_PARAM.pvBV052 : null,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvSV251 = !!req_PARAM.pvSV251 ? req_PARAM.pvSV251 : null,
      pnFS250 = !!req_PARAM.pnFS250 ? +req_PARAM.pnFS250 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB400, pvBV401, pnBN402, pvBV408, pnBN412,
      pnBN413, pvBV001, pvBV003, pvVV501, pnFB450, pvBV451, pnBN452, pvBV453, pvBV455, pnBN458,
      pvBV203, pnFB100, pvBV052, pnFB050, pnFN850, pvSV251, pnFS250, pnFS200, pnFH200, pnFH000, pvLOGIN], callback)
  }
}