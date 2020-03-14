/**
 * N100_MODEL
 * @author Linhnc - 28/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class N100_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * -- danh sach nhan vien thuoc Cty | Chi nhanh | Phan xuong hay van phong
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pvNV103 -- HO
   * @param pnNN104
   * @param pnNN105
   * @param pnOFFSET -- record bat ddau
   * @param pnLIMIT -- so luong records hien thi
   * @param pnSORT -- sort theo danh muc gi
   * @param pnDIRECTION -- thu tu tang dan hay giam dan
   * @param pvLOGIN
   */
  _listOfTabN100(params, callback) {

    const procName = this.SYNONYM.N2017_CUR + 'ListOfTabN100',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvNV103 = !!params.pvNV103 ? params.pvNV103 : null,
      pnNN104 = !!params.pnNN104 ? +params.pnNN104 : 0,
      pnNN105 = !!params.pnNN105 ? +params.pnNN105 : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvNV103, pnNN104, pnNN105, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * -- xoa bo ho so nhan vien 
   * 
   * @param pnPN100
   * @param pvLOGIN
   */
  _stornoTabN100(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'StornoTabN100',
      pnPN100 = !!params.pnPN100 ? +params.pnPN100 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN100, pvLOGIN], callback)
  }

  /**
   * -- danh sach nhan vien thuoc Cty | Chi nhanh | Phan xuong hay van phong
   * 
   * @param pnPN100 -- PN100: ID
   * @param pnFN600 -- FN600: chuyen mon 
   * @param pnFK100 -- FK100: thuoc khach hang nao ...
   * @param pnFH200 -- FH200: Cty | Chi nhanh | Phan xuong hoac van phong
   * @param pvNV102 -- NV102: Ten
   * @param pvNV103 -- NV103: Ho
   * @param pnNI104 -- NI104: Nhan vien Cty hoac nhan vien khach hang
   * @param pnNI105 -- NI105: Nhan vien Cty nam vai tro ddoi ngoai voi khach hang
   * @param pvNV106 -- NV106: LOGIN ddang nhap
   * @param pvNV107 -- NV107: Nam hay Nu
   * @param pvNV108 -- NV108: ngon ngu
   * @param pvNV109
   * @param pvNV110
   * @param pvNV111
   * @param pvNV112
   * @param pvNV113
   * @param pnNN114 -- NN114: luu so gio lam viec trong thang
   * @param pvNV115 -- NV115: REF N100 = nhan vien cong ty; K100: nhan viec khach hang; V350: nhan vien nha cung cap
   * @param pvNV116 -- NV116: Ma so nhan vien (cung co the lay ma so thue theo khach hang yeu cau)
   * @param pnNN117 -- NN117: muc Budget nam trong quyen kiem tra, xac nhan
   * @param pdND118
   * @param pnFH000
   * @param pvLOGIN
   */
  _insertTabN100(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN100',
      pnPN100 = !!params.pnPN100 ? +params.pnPN100 : 0,
      pnFN600 = !!params.pnFN600 ? +params.pnFN600 : 0,
      pnFK100 = !!params.pnFK100 ? +params.pnFK100 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvNV102 = !!params.pvNV102 ? params.pvNV102 : null,
      pvNV103 = !!params.pvNV103 ? params.pvNV103 : null,
      pnNI104 = !!params.pnNI104 ? +params.pnNI104 : 0,
      pnNI105 = !!params.pnNI105 ? +params.pnNI105 : 0,
      pvNV106 = !!params.pvNV106 ? params.pvNV106 : null,
      pvNV107 = !!params.pvNV107 ? params.pvNV107 : null,
      pvNV108 = !!params.pvNV108 ? params.pvNV108 : null,
      pvNV109 = !!params.pvNV109 ? params.pvNV109 : null,
      pvNV110 = !!params.pvNV110 ? params.pvNV110 : null,
      pvNV111 = !!params.pvNV111 ? params.pvNV111 : null,
      pvNV112 = !!params.pvNV112 ? params.pvNV112 : null,
      pvNV113 = !!params.pvNV113 ? params.pvNV113 : null,
      pnNN114 = !!params.pnNN114 ? +params.pnNN114 : 0,
      pvNV115 = !!params.pvNV115 ? params.pvNV115 : null,
      pvNV116 = !!params.pvNV116 ? params.pvNV116 : null,
      pnNN117 = !!params.pnNN117 ? +params.pnNN117 : 0,
      pdND118 = !!params.pdND118 ? params.pdND118 : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN100, pnFN600, pnFK100, pnFH200, pvNV102, pvNV103, pnNI104, pnNI105, pvNV106, pvNV107, pvNV108, pvNV109, pvNV110, pvNV111, pvNV112, pvNV113, pnNN114, pvNV115, pvNV116, pnNN117, pdND118, pnFH000, pvLOGIN], callback)
  }

  /**
   * -- CAP NHAT NV BO SUNG LUON NHOM TO VA NHOM QUYEN
   * -- danh sach nhan vien thuoc Cty | Chi nhanh | Phan xuong hay van phong
   * 
   * @param pnPN100 -- PN100: ID
   * @param pvNV102 -- NV102: Ten
   * @param pvNV103 -- NV103: Ho
   * @param pnNI104 -- NI104: Nhan vien Cty hoac nhan vien khach hang
   * @param pnNI105 -- NI105: Nhan vien Cty nam vai tro ddoi ngoai voi khach hang
   * @param pvNV106 -- NV106: LOGIN ddang nhap
   * @param pvNV107 -- NV107: Nam hay Nu
   * @param pvNV108 -- NV108: ngon ngu
   * @param pvNV109 -- NV109: CHUC VU
   * @param pvNV110
   * @param pvNV111
   * @param pvNV112
   * @param pvNV113
   * @param pnNN114 -- NN114: luu so gio lam viec trong thang
   * @param pvNV115 -- NV115: REF N100 = nhan vien cong ty; K100: nhan viec khach hang; V350: nhan vien nha cung cap
   * @param pvNV116 -- NV116: Ma so nhan vien (cung co the lay ma so thue theo khach hang yeu cau)
   * @param pnNN117 -- NN117: muc Budget nam trong quyen kiem tra, xac nhan
   * @param pdND118
   * @param pnFN850
   * @param pnFQ350
   * @param pnFN600 -- FN600: chuyen mon 
   * @param pnFK100 -- FK100: thuoc khach hang nao ...
   * @param pnFH200 -- FH200: Cty | Chi nhanh | Phan xuong hoac van phong
   * @param pnFH000
   * @param pvLOGIN
   */
  _insertTabN100BS(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'InsertTabN100BS',
      pnPN100 = !!params.pnPN100 ? +params.pnPN100 : 0,
      pvNV102 = !!params.pvNV102 ? params.pvNV102 : null,
      pvNV103 = !!params.pvNV103 ? params.pvNV103 : null,
      pnNI104 = !!params.pnNI104 ? +params.pnNI104 : 0,
      pnNI105 = !!params.pnNI105 ? +params.pnNI105 : 0,
      pvNV106 = !!params.pvNV106 ? params.pvNV106 : null,
      pvNV107 = !!params.pvNV107 ? params.pvNV107 : null,
      pvNV108 = !!params.pvNV108 ? params.pvNV108 : null,
      pvNV109 = !!params.pvNV109 ? params.pvNV109 : null,
      pvNV110 = !!params.pvNV110 ? params.pvNV110 : null,
      pvNV111 = !!params.pvNV111 ? params.pvNV111 : null,
      pvNV112 = !!params.pvNV112 ? params.pvNV112 : null,
      pvNV113 = !!params.pvNV113 ? params.pvNV113 : null,
      pnNN114 = !!params.pnNN114 ? +params.pnNN114 : 0,
      pvNV115 = !!params.pvNV115 ? params.pvNV115 : null,
      pvNV116 = !!params.pvNV116 ? params.pvNV116 : null,
      pnNN117 = !!params.pnNN117 ? +params.pnNN117 : 0,
      pdND118 = !!params.pdND118 ? params.pdND118 : null,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFN600 = !!params.pnFN600 ? +params.pnFN600 : 0,
      pnFK100 = !!params.pnFK100 ? +params.pnFK100 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN100, pvNV102, pvNV103, pnNI104, pnNI105, pvNV106, pvNV107, pvNV108, pvNV109, pvNV110, pvNV111, pvNV112, pvNV113, pnNN114, pvNV115, pvNV116, pnNN117, pdND118, pnFN850, pnFQ350, pnFN600, pnFK100, pnFH200, pnFH000, pvLOGIN], callback)
  }

  /**
   * -- kiem tra xem LOGIN dda dduoc su dung chua .. Neu chua thi moi dduoc chap nhan
   * 
   * @param pvLOGIN
   */
  _checkLoginExist(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'CheckLoginExist',
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvLOGIN], callback)
  }

  /**
   * -- ABACUS: dung cho TAB ngan sach thuoc phan tai chinh
   * -- cap nhat han muc xu ly cho tung nhan vien
   * 
   * @param pnPN100
   * @param pnNN117
   * @param pvLOGIN
   */
  _updateTabN100_p3(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'UpdateTabN100',
      pnPN100 = !!params.pnPN100 ? +params.pnPN100 : 0,
      pnNN117 = !!params.pnNN117 ? +params.pnNN117 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPN100, pnNN117, pvLOGIN], callback)
  }

  /**
   * -- cap nhat cong viec cua nhan vien CU sang cho nhan vien MOI
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pnFB050
   * @param pnPN100N
   * @param pnPN100O
   * @param pvLOGIN
   */
  _updateTabN100_p6(params, callback) {

    const funcName = this.SYNONYM.N2017_FACI + 'UpdateTabN100',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnPN100N = !!params.pnPN100N ? +params.pnPN100N : 0,
      pnPN100O = !!params.pnPN100O ? +params.pnPN100O : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFB050, pnPN100N, pnPN100O, pvLOGIN], callback)
  }
    


}