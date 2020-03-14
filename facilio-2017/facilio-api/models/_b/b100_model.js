/**
 * * B100_MODEL
 * @author Toailq - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class B100_MODEL extends Model {
  constructor() {
    super()
  }

  /**
  *  DANH SACH PA BAO TRI THEO PHAN HE QUAN LY & May MOC
  *  Loai bao tri :: Master data
  *  @param pnFH000 -- cho ca Cty | Chi nhanh | Phan xuong | Lau | Line 
  *  @param pnFH200
  *  @param pnFS200
  *  @param pvBV003 -- ngon ngu
  *  @param pvLOGIN
  */
  _listOfTabB100_p5(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB100',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvBV003, pvLOGIN], callback)
  }

  /**
  *  DANH SACH PA BAO TRI THEO PHAN HE QUAN LY & May MOC
  *  Loai bao tri :: Master data
  *  @param pnFH200 -- cho ca Cty | Chi nhanh | Phan xuong | Lau | Line 
  *  @param pnFH200L
  *  @param pnPB300
  *  @param pnFS200
  *  @param pvBV003 -- ngon ngu
  *  @param pnFH000
  */
  _listOfTabB100_p6(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB100',
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFH200L = !!params.pnFH200L ? +params.pnFH200L : 0,
      pnPB300 = !!params.pnPB300 ? +params.pnPB300 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH200, pnFH200L, pnPB300, pnFS200, pvBV003, pnFH000], callback)
  }

  /**
  *  danh sach nhung ddon mau bao tri
  *  @param pvSV201 
  *  @param pnFS200
  *  @param pvMTYPE -- dc su dung ap dung phan biet loai bao tri
  *  @param pvFC550 -- Co hoac dien
  *  @param pvBV003 -- ngon ngu
  *  @param pnFH200
  *  @param pnFH000
  *  @param pvLOGIN
  */
  _listOfTabB100(params) {

    const procName = this.SYNONYM.B2017_CURIMP + 'ListOfTabB100',
      pvSV201 = !!params.pvSV201 ? params.pvSV201 : null,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pvMTYPE = !!params.pvMTYPE ? params.pvMTYPE : null,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    return this.oracleUtilModel._callProcerdureUsePromise(procName, [pvSV201, pnFS200, pvMTYPE, pvFC550, pvBV003, pnFH200, pnFH000, pvLOGIN])
  }

  /**
    *  DU LIEU BAO TRI CO, DIEN, NHOT, MO THEO LOAI MAY
    *  @param pvBV003 -- ngon ngu
    *  @param pvFC550 -- Co hoac dien / Nhot Mo
    *  @param pnFS200 
    *  @param pvLOGIN 
    */
  _listOfTabB100BS(params, callback) {

    const procName = this.SYNONYM.B2017_CURIMP + 'ListOfTabB100BS',
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pvBV003, pvFC550, pnFS200, pvLOGIN], callback)
  }

  /** -------------------B2017_FACI-------------- */

  /**
  * BAO TRI BAO DUONG CO VA DIEN
  * @param pnFH000                      
  * @param pnFH200
  * @param pvSV201  -- Thiet bi
  * @param pvSV251  -- Bo phan
  * @param pvBV001  -- MA CHU KY
  * @param pnBN102  -- so ngay
  * @param pvBV108  -- ngay trong tuan MO
  * @param pnBN112  -- Nhot (1), Mo (2) > Co (1), Dien (2)
  * @param pnBN113  -- han muc LIM
  * @param pvBV151  -- ten cong viec
  * @param pnBN152  -- so thu tu
  * @param pvBV153  -- chung loai su dung > CV trong yeu (1)
  * @param pvBV157  -- SL = 0
  * @param pnBN158  -- Vi tri >> trang thai 1: may chay, 0: may dung 
  * @param pvVV501  -- Ma vat tu
  * @param pvVV502  -- Chung loai goc > yeu cau ky thuat
  * @param pvBV003  -- NGON NGU (vi)
  */
  _createTabB100PM(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'CreateTabB100PM',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvSV201 = !!params.pvSV201 ? params.pvSV201 : null,
      pvSV251 = !!params.pvSV251 ? params.pvSV251 : null,
      pvBV001 = !!params.pvBV001 ? params.pvBV001 : null,
      pnBN102 = !!params.pnBN102 ? +params.pnBN102 : 0,
      pvBV108 = !!params.pvBV108 ? params.pvBV108 : null,
      pnBN112 = !!params.pnBN112 ? +params.pnBN112 : 0,
      pnBN113 = !!params.pnBN113 ? +params.pnBN113 : 0,
      pvBV151 = !!params.pvBV151 ? params.pvBV151 : null,
      pnBN152 = !!params.pnBN152 ? +params.pnBN152 : 0,
      pvBV153 = !!params.pvBV153 ? params.pvBV153 : null,
      pvBV157 = !!params.pvBV157 ? params.pvBV157 : null,
      pnBN158 = !!params.pnBN158 ? +params.pnBN158 : 0,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pvVV502 = !!params.pvVV502 ? params.pvVV502 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pvSV201, pvSV251, pvBV001, pnBN102, pvBV108,
      pnBN112, pnBN113, pvBV151, pnBN152, pvBV153, pvBV157, pnBN158, pvVV502, pvVV501, pvBV003, pvLOGIN], callback)
  }

  /**
  * BAO TRI BOI TRON CHO LOAI THIET BI
  * @param pnFH000                      
  * @param pnFH200
  * @param pvSV201  -- Thiet bi
  * @param pvSV251  -- Bo phan
  * @param pvBV001  -- MA CHU KY
  * @param pnBN102  -- so ngay
  * @param pvBV108  -- ngay trong tuan MO
  * @param pnBN112  -- Nhot (1), Mo (2) > Co (1), Dien (2)
  * @param pnBN113  -- han muc LIM
  * @param pvBV151  -- ten cong viec
  * @param pnBN152  -- so thu tu
  * @param pvBV153  -- chung loai su dung > CV trong yeu (1)
  * @param pvBV157  -- SL = 0
  * @param pnBN158  -- Vi tri >> trang thai 1: may chay, 0: may dung 
  * @param pvVV501  -- Ma vat tu
  * @param pvVV502  -- Chung loai goc > yeu cau ky thuat
  * @param pvBV003  -- NGON NGU (vi)
  */
  _createTabB100BT(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'CreateTabB100BT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvSV201 = !!params.pvSV201 ? params.pvSV201 : null,
      pvSV251 = !!params.pvSV251 ? params.pvSV251 : null,
      pvBV001 = !!params.pvBV001 ? params.pvBV001 : null,
      pnBN102 = !!params.pnBN102 ? +params.pnBN102 : 0,
      pvBV108 = !!params.pvBV108 ? params.pvBV108 : null,
      pnBN112 = !!params.pnBN112 ? +params.pnBN112 : 0,
      pnBN113 = !!params.pnBN113 ? +params.pnBN113 : 0,
      pvBV151 = !!params.pvBV151 ? params.pvBV151 : null,
      pnBN152 = !!params.pnBN152 ? +params.pnBN152 : 0,
      pvBV153 = !!params.pvBV153 ? params.pvBV153 : null,
      pvBV157 = !!params.pvBV157 ? params.pvBV157 : null,
      pnBN158 = !!params.pnBN158 ? +params.pnBN158 : 0,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pvVV502 = !!params.pvVV502 ? params.pvVV502 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pvSV201, pvSV251, pvBV001, pnBN102, pvBV108,
      pnBN112, pnBN113, pvBV151, pnBN152, pvBV153, pvBV157, pnBN158, pvVV502, pvVV501, pvBV003, pvLOGIN], callback)
  }

  /**
  * Dung ID cua may va bo phan may dde tim ID cua B300
  * @param pnFH000                      
  * @param pnFH200
  * @param pnFS200  
  * @param pnFS250  
  * @param pvFC550  -- Co, dien
  * @param pvBV001  -- chu ky
  * @param pvBV003  -- ngon ngu
  * @param pvBV151  -- Checkpoint
  * @param pnBN102  -- so ngay
  * @param pnBN105  -- khuyen cao theo so gio SX 
  * @param pnBN106  -- khuyen cao theo so ngay SX
  * @param pvBV108  -- ngay trong tuan
  * @param pvBV110  -- (Y) khuyen cao hoac (N) khong khuyen cao
  * @param pnBN113  -- han muc
  * @param pdBD115  -- ngay trong thang hoac quy
  */
  _updateTabB100(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB100',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvBV001 = !!params.pvBV001 ? params.pvBV001 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvBV151 = !!params.pvBV151 ? params.pvBV151 : null,
      pnBN102 = !!params.pnBN102 ? +params.pnBN102 : 0,
      pnBN105 = !!params.pnBN105 ? +params.pnBN105 : 0,
      pnBN106 = !!params.pnBN106 ? +params.pnBN106 : 0,
      pvBV108 = !!params.pvBV108 ? params.pvBV108 : null,
      pvBV110 = !!params.pvBV110 ? params.pvBV110 : null,
      pnBN113 = !!params.pnBN113 ? +params.pnBN113 : 0,
      pdBD115 = !!params.pdBD115 ? params.pdBD115 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFS200, pnFS250, pvFC550, pvBV001, pvBV003,
      pvBV151, pnBN102, pnBN105, pnBN106, pvBV108, pvBV110, pnBN113, pdBD115, pvLOGIN], callback)
  }

  /**
  * Dung ID cua may va bo phan may dde tim ID cua B300
  * @param pnFH000                      
  * @param pnFH200
  * @param pnFS200  
  * @param pnFS250  
  * @param pvFC550  -- Co, dien
  * @param pvBV001  -- chu ky
  * @param pvBV003  -- ngon ngu
  * @param pvBV151  -- Checkpoint
  * @param pnBN101  -- so luong
  * @param pnBN102  -- so ngay
  * @param pnBN105  -- khuyen cao theo so gio SX 
  * @param pnBN106  -- khuyen cao theo so ngay SX
  * @param pvBV108  -- ngay trong tuan
  * @param pvBV109  -- Noi dung cong viec BV151
  * @param pvBV110  -- (Y) khuyen cao hoac (N) khong khuyen cao
  * @param pnBN112  -- Nhot (1), Mo (2)
  * @param pnBN113  -- han muc
  * @param pdBD115  -- ngay trong thang hoac quy
  * @param pvVV501  -- Ma vat tu
  */
  _updateTabB100BT(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'UpdateTabB100BT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvBV001 = !!params.pvBV001 ? params.pvBV001 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvBV151 = !!params.pvBV151 ? params.pvBV151 : null,
      pnBN101 = !!params.pnBN101 ? +params.pnBN101 : 0,
      pnBN102 = !!params.pnBN102 ? +params.pnBN102 : 0,
      pnBN105 = !!params.pnBN105 ? +params.pnBN105 : 0,
      pnBN106 = !!params.pnBN106 ? +params.pnBN106 : 0,
      pvBV108 = !!params.pvBV108 ? params.pvBV108 : null,
      pvBV109 = !!params.pvBV109 ? params.pvBV109 : null,
      pvBV110 = !!params.pvBV110 ? params.pvBV110 : null,
      pnBN112 = !!params.pnBN112 ? +params.pnBN112 : 0,
      pnBN113 = !!params.pnBN113 ? +params.pnBN113 : 0,
      pdBD115 = !!params.pdBD115 ? params.pdBD115 : null,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [
      pnFH000, pnFH200, pnFS200, pnFS250, pvFC550, pvBV001, pvBV003,
      pvBV151, pnBN101, pnBN102, pnBN105, pnBN106, pvBV108, pvBV109,
      pvBV110, pnBN112, pnBN113, pdBD115, pvVV501, pvLOGIN], callback)
  }

  /**
  *  -- nhap, sua thong tin PHUONG THUC BAO TRI
  *  -- Phuong thuc (hoac phuong an) bao tri luon dduoc tao tu ddong cung voi loai bao tri
  *  -- khi cac bo phan cua may dduoc thiet lap dde ddap ung cho viec bao tri 
  * @param pnPB100  -- ID thuoc phuong thuc bao tri
    * @param pnFH000  
    * @param pnFH200  -- cho ca Cty | Chi nhanh | Phan xuong | Lau | Line 
    * @param pnFB300  -- Luon ddi kem voi mot loai BAO TRI (wartungytp)
    * @param pnFS200  -- phuong an bao tri ap ddat cho may 
    * @param pnFS250  
    * @param pnFC450  -- muc ddo uu tien
    * @param pvFC550  -- type
    * @param pnBN101  -- muc ddo kinh nghiem can co (1 - 10)
    * @param pnBN102  -- so ngay can bao tri, in Tagen
    * @param pdBD103  -- ngay bao tri lan cuoi
    * @param pnBN104  -- thoi gian bao tri du kien (in Minuten)     
    * @param pnBN105  -- khuyen cao theo so gio san xuat
    * @param pnBN106  -- khuyen cao theo so ngay san xuat
    * @param pvBV107  -- dien giai
    * @param pvBV108  -- supervisor
    * @param pvBV109  -- customer's view
    * @param pvBV110  -- du phong
    * @param pnBN111  
    * @param pnBN112  
    * @param pnBN113  -- muc toi thieu
    * @param pdBD114  
    * @param pdBD115  
    * @param pdBD116  -- du phong
    * @param pnFB000  
    * @param pvVV501  
    * @param pvLOGIN  
  */
  _insertTabB100(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB100',
      pnPB100 = !!params.pnPB100 ? +params.pnPB100 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB300 = !!params.pnFB300 ? +params.pnFB300 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnFC450 = !!params.pnFC450 ? +params.pnFC450 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pnBN101 = !!params.pnBN101 ? +params.pnBN101 : 0,
      pnBN102 = !!params.pnBN102 ? +params.pnBN102 : 0,
      pdBD103 = !!params.pdBD103 ? params.pdBD103 : null,
      pnBN104 = !!params.pnBN104 ? +params.pnBN104 : 0,
      pnBN105 = !!params.pnBN105 ? +params.pnBN105 : 0,
      pnBN106 = !!params.pnBN106 ? +params.pnBN106 : 0,
      pvBV107 = !!params.pvBV107 ? params.pvBV107 : null,
      pvBV108 = !!params.pvBV108 ? params.pvBV108 : null,
      pvBV109 = !!params.pvBV109 ? params.pvBV109 : null,
      pvBV110 = !!params.pvBV110 ? params.pvBV110 : null,
      pnBN111 = !!params.pnBN111 ? +params.pnBN111 : 0,
      pnBN112 = !!params.pnBN112 ? +params.pnBN112 : 0,
      pnBN113 = !!params.pnBN113 ? +params.pnBN113 : 0,
      pdBD114 = !!params.pdBD114 ? params.pdBD114 : null,
      pdBD115 = !!params.pdBD115 ? params.pdBD115 : null,
      pdBD116 = !!params.pdBD116 ? params.pdBD116 : null,
      pnFB000 = !!params.pnFB000 ? +params.pnFB000 : 0,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [
      pnPB100, pnFH000, pnFH200, pnFB300, pnFS200, pnFS250,
      pnFC450, pvFC550, pnBN101, pnBN102, pdBD103, pnBN104,
      pnBN105, pnBN106, pvBV107, pvBV108, pvBV109, pvBV110,
      pnBN111, pnBN112, pnBN113, pdBD114, pdBD115, pdBD116,
      pnFB000, pvVV501, pvLOGIN
    ], callback)
  }

  /**
  * xoa bo thong tin PHUONG THUC BAO TRI 
  * @param pnPB100  -- ID thuoc phuong thuc bao tri                   
  */
  _stornoTabB100(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'StornoTabB100',
      pnPB100 = !!params.pnPB100 ? +params.pnPB100 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPB100, pvLOGIN], callback)
  }

  /**
  *-- CHINH SUA VA CAP NHAT MOI CHO PHUONG AN BAO TRI CUA 1 THIET BI FB050
  *-- FH200: TAT CA PHAI TON TAI ID > 0
  *-- FS200, FS250, FB100, PB150: KHONG TON TAI NEU LA BO SUNG MOI
  * @pnFB100 -- ID PHUONG AN BAO TRI
  * @pvBV101 -- SL = 0
  * @pnBN102 -- so ngay
  * @pvBV106 -- CV trong yeu (1, 0)
  * @pvBV108 -- ngay trong tuan MO
  * @pnBN112 -- Co (1), Dien (2) 
  * @pnBN113 -- han muc LIM
  * @pvBV001 -- MA CHU KY
  * @pvBV003 -- NGON NGU (vi)
  * @pvVV501 -- Ma vat tu
  * @pnFB150 -- ID CHECKLIST
  * @pvBV151 -- ten cong viec
  * @pnBN152 -- so thu tu
  * @pvBV154 -- yeu cau ky thuat
  * @pnBN158 -- trang thai 1: may chay, 0: may dung 
  * @pvSV251 -- ten bo phan
  * @pvSV201 -- Ten loai thiet bi
  * @pnFS250 -- ID BO PHAN THIET BI
  * @pnFS200 -- ID LOAI MAY
  * @pnFH200 -- Khu vuc
  * @pnFH000
  * @pvLOGIN
  */
  _insertTabB100PM(params, callback) {
    const funcName = this.SYNONYM.B2017_IMP + 'InsertTabB100PM',
      pnFB100 = !!params.pnFB100 ? +params.pnFB100 : 0,
      pvBV101 = !!params.pvBV101 ? params.pvBV101 : null,
      pnBN102 = !!params.pnBN102 ? +params.pnBN102 : 0,
      pvBV106 = !!params.pvBV106 ? params.pvBV106 : null,
      pvBV108 = !!params.pvBV108 ? params.pvBV108 : null,
      pnBN112 = !!params.pnBN112 ? +params.pnBN112 : 0,
      pnBN113 = !!params.pnBN113 ? +params.pnBN113 : 0,
      pvBV001 = !!params.pvBV001 ? params.pvBV001 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : null,
      pnFB150 = !!params.pnFB150 ? +params.pnFB150 : 0,
      pvBV151 = !!params.pvBV151 ? params.pvBV151 : null,
      pnBN152 = !!params.pnBN152 ? +params.pnBN152 : 0,
      pvBV154 = !!params.pvBV154 ? params.pvBV154 : null,
      pnBN158 = !!params.pnBN158 ? +params.pnBN158 : 0,
      pvSV251 = !!params.pvSV251 ? params.pvSV251 : null,
      pvSV201 = !!params.pvSV201 ? params.pvSV201 : null,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [
      pnFB100, pvBV101, pnBN102, pvBV106, pvBV108, pnBN112,
      pnBN113, pvBV001, pvBV003, pvVV501, pnFB150, pvBV151,
      pnBN152, pvBV154, pnBN158, pvSV251, pvSV201, pnFS250,
      pnFS200, pnFH200, pnFH000, pvLOGIN
    ], callback)
  }

  /**
  * -- CHINH SUA VA CAP NHAT MOI CHO PHUONG AN BAO TRI CUA 1 THIET BI FB050
  * -- FH200: TAT CA PHAI TON TAI ID > 0
  * -- FS200, FS250, FB100, PB150: KHONG TON TAI NEU LA BO SUNG MOI
  * @pnFB100 -- ID PHUONG AN BAO TRI
  * @pvBV101 -- SL = 0
  * @pnBN102 -- so ngay
  * @pnBN105 -- khuyen cao theo so gio SX 
  * @pnBN106 -- khuyen cao theo so ngay SX
  * @pvBV107 -- BO PHAN SV251
  * @pvBV108 -- ngay trong tuan MO
  * @pvBV109 -- 
  * @pvBV110 -- 
  * @pnBN112 -- Nhot (1), Mo (2)
  * @pnBN113 -- han muc LIM
  * @pvBV001 -- MA CHU KY
  * @pvBV003 -- NGON NGU (vi)
  * @pvVV501 -- Ma vat tu
  * @pnFB150 -- ID CHECKLIST
  * @pvBV151 -- ten cong viec
  * @pnBN152 -- so thu tu
  * @pvBV153 -- chung loai
  * @pvBV155 -- Chung loai goc
  * @pnBN158 -- trang thai 1: may chay, 0: may dung 
  * @pvSV251 -- ten bo phan
  * @pvSV201 -- Ten loai thiet bi
  * @pnFS250 -- ID BO PHAN THIET BI
  * @pnFS200 -- ID LOAI MAY
  * @pnFH200 -- ID don vi (10001, 10002, ...)
  * @pnFH000                  
  * @pvLOGIN           
  */
  _insertTabB100BT(params, callback) {
    const funcName = this.SYNONYM.B2017_IMP + 'InsertTabB100BT',
      pnFB100 = !!params.pnFB100 ? +params.pnFB100 : 0,
      pvBV101 = !!params.pvBV101 ? params.pvBV101 : '',
      pnBN102 = !!params.pnBN102 ? +params.pnBN102 : 0,
      pnBN105 = !!params.pnBN105 ? +params.pnBN105 : 0,
      pnBN106 = !!params.pnBN106 ? +params.pnBN106 : 0,
      pvBV107 = !!params.pvBV107 ? params.pvBV107 : '',
      pvBV108 = !!params.pvBV108 ? params.pvBV108 : '',
      pvBV109 = !!params.pvBV109 ? params.pvBV109 : '',
      pvBV110 = !!params.pvBV110 ? params.pvBV110 : '',
      pnBN112 = !!params.pnBN112 ? +params.pnBN112 : 0,
      pnBN113 = !!params.pnBN113 ? +params.pnBN113 : 0,
      pvBV001 = !!params.pvBV001 ? params.pvBV001 : '',
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : '',
      pvVV501 = !!params.pvVV501 ? params.pvVV501 : '',
      pnFB150 = !!params.pnFB150 ? +params.pnFB150 : 0,
      pvBV151 = !!params.pvBV151 ? params.pvBV151 : '',
      pnBN152 = !!params.pnBN152 ? +params.pnBN152 : 0,
      pvBV153 = !!params.pvBV153 ? params.pvBV153 : '',
      pvBV155 = !!params.pvBV155 ? params.pvBV155 : '',
      pnBN158 = !!params.pnBN158 ? +params.pnBN158 : 0,
      pvSV251 = !!params.pvSV251 ? params.pvSV251 : '',
      pvSV201 = !!params.pvSV201 ? params.pvSV201 : '',
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : ''

    return this.oracleUtilModel._callFunction(funcName, [
      pnFB100, pvBV101, pnBN102, pnBN105, pnBN106, pvBV107,
      pvBV108, pvBV109, pvBV110, pnBN112, pnBN113, pvBV001,
      pvBV003, pvVV501, pnFB150, pvBV151, pnBN152, pvBV153,
      pvBV155, pnBN158, pvSV251, pvSV201, pnFS250, pnFS200,
      pnFH200, pnFH000, pvLOGIN
    ], callback)
  }

  /**
  * -- UPDATE PHUONG AN BAO TRI TU MAY >> TAT CA CAC TB LIEN QUAN
  * @pnFB100
  * @pvFC550 -- Co, dien
  * @pnFS250
  * @pnFS200
  * @pvLOGIN
  */

  _updateTabB100PMA(params, callback) {
    const funcName = this.SYNONYM.B2017_IMP + 'UpdateTabB100PMA',
      pnFB100 = !!params.pnFB100 ? +params.pnFB100 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : '',
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : ''

    this.oracleUtilModel._callFunction(funcName, [pnFB100, pvFC550, pnFS250, pnFS200, pvLOGIN], callback)
  }

}