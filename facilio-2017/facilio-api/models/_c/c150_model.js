/**
 * C150_MODEL
 * @author Linhnc - 24/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class C150_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * -- danh sach cong viec thuoc phieu ddang ky, ddon ddat hang hoac ticket_no
   *
   * @param pvLOGIN
   * @param pnFH000
   * @param pnFH200
   * @param pnFH150 -- HD
   * @param pnFC450
   * @param pnFC500
   * @param pvFC550
   * @param pnSUPER
   * @param pnOFFSET
   * @param pnLIMIT
   * @param pnSORT
   * @param pnDIRECTION -- giong nhu binh thuong cua facilio
   * @param pvCV154 -- phat sinh hoac ke hoach
   * @param pdCD153 -- ngay len ke hoach sua chua
   * @param pnPB050 -- may theo vi tri
   * @param pnREPART
   * @param pvUSER
   * @param pvSTATUS
   * @param pnFN850 -- Nhom lam viec
   */
  _listOfTabC150C(params, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC150C',
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFC450 = !!params.pnFC450 ? +params.pnFC450 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pnSUPER = !!params.pnSUPER ? +params.pnSUPER : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvCV154 = !!params.pvCV154 ? params.pvCV154 : null,
      pdCD153 = !!params.pdCD153 ? new Date(params.pdCD153) : new Date(),
      pnPB050 = !!params.pnPB050 ? +params.pnPB050 : 0,
      pnREPART = !!params.pnREPART ? +params.pnREPART : 0,
      pvUSER = !!params.pvUSER ? params.pvUSER : null,
      pvSTATUS = !!params.pvSTATUS ? params.pvSTATUS : null,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0

    this.oracleUtilModel._callProcerdure(procName, [pvLOGIN, pnFH000, pnFH200, pnFH150, pnFC450, pnFC500, pvFC550, pnSUPER, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvCV154, pdCD153, pnPB050, pnREPART, pvUSER, pvSTATUS, pnFN850], callback)
  }

  /**
   * @param pnFH000 -- Facilio = 4
   * @param pnFH200 -- Lay tu tree cua dashboard
   * @param pvFC150 -- HD
   * @param pnFH150
   * @param pnFB050
   * @param pnFC500
   * @param pvFC550
   * @param pvCV165 -- nguoi chiu chinh hay chi tham gia
   * @param pnFN850 -- Nhom nhan vien
   * @param pdCD153F
   * @param pdCD153T
   * @param pnOFFSET
   * @param pnLIMIT
   * @param pnSORT
   * @param pnDIRECTION
   * @param pvLOGIN
   */
  _listOfTabC150S(params, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC150S',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvCV165 = !!params.pvCV165 ? params.pvCV165 : null,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pdCD153F = !!params.pdCD153F ? new Date(params.pdCD153F) : new Date(),
      pdCD153T = !!params.pdCD153T ? new Date(params.pdCD153T) : new Date(),
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvFC150, pnFH150, pnFB050, pnFC500, pvFC550, pvCV165, pnFN850, pdCD153F, pdCD153T, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }

  /**
   * @param pnFH000 -- Facilio = 4
   * @param pnFH200 -- Lay tu tree cua dashboard
   * @param pnFC500 -- su dung sau nay cho filter
   * @param pnOFFSET
   * @param pnLIMIT
   * @param pnSORT
   * @param pnDIRECTION
   * @param pvLOGIN -- cach hien thi danh sach cong viec
   */
  _listOfTabC150PER(params, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC150PER',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFC500, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * @param pvLOGIN -- Facilio = 4
   * @param pnFH000
   * @param pnFH200 -- Lay tu tree cua dashboard
   * @param pnFH150 -- DH
   * @param pnFC4501
   * @param pnFC4502
   * @param pnFC4503
   * @param pnFC5001
   * @param pnFC5002
   * @param pnFC5003
   * @param pvFC550
   * @param pvCV154 -- phat sinh hoac ke hoach
   * @param pdCD153 -- ngay len ke hoach sua chua
   * @param pnFB050
   * @param pnDEADLINE
   * @param pvSTATUS
   * @param pnFN850
   */
  _getRowCountC150(params, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetRowCountC150',
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFC4501 = !!params.pnFC4501 ? +params.pnFC4501 : 0,
      pnFC4502 = !!params.pnFC4502 ? +params.pnFC4502 : 0,
      pnFC4503 = !!params.pnFC4503 ? +params.pnFC4503 : 0,
      pnFC5001 = !!params.pnFC5001 ? +params.pnFC5001 : 0,
      pnFC5002 = !!params.pnFC5002 ? +params.pnFC5002 : 0,
      pnFC5003 = !!params.pnFC5003 ? +params.pnFC5003 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvCV154 = !!params.pvCV154 ? params.pvCV154 : null,
      pdCD153 = !!params.pdCD153 ? new Date(params.pdCD153) : new Date(),
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnDEADLINE = !!params.pnDEADLINE ? +params.pnDEADLINE : 0,
      pvSTATUS = !!params.pvSTATUS ? params.pvSTATUS : null,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0

    this.oracleUtilModel._callFunction(funcName, [pvLOGIN, pnFH000, pnFH200, pnFH150, pnFC4501, pnFC4502, pnFC4503, pnFC5001, pnFC5002, pnFC5003, pvFC550, pvCV154, pdCD153, pnFB050, pnDEADLINE, pvSTATUS, pnFN850], callback)
  }
  // ==============================================
  /**
   * @param pnFH150
   */
  _getTodoDayOfC150(params, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetTodoDayOfC150',
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0

    this.oracleUtilModel._callFunction(funcName, [pnFH150], callback)
  }

  /**
   * @param pnFH150
   */
  _getTodoPercentage(params, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetTodoPercentage',
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0

    this.oracleUtilModel._callFunction(funcName, [pnFH150], callback)
  }

  /**
   * @param pnPC150
   */
  _getTodoDayOfParent(params, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetTodoDayOfParent',
      pnPC150 = !!params.pnPC150 ? +params.pnPC150 : 0

    this.oracleUtilModel._callFunction(funcName, [pnPC150], callback)
  }

  /**
   * @param pnPC150
   */
  _getTodoPercForParent(params, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetTodoPercForParent',
      pnPC150 = !!params.pnPC150 ? +params.pnPC150 : 0

    this.oracleUtilModel._callFunction(funcName, [pnPC150], callback)
  }

  /**
   * @param pnPC150 -- PC150: ID cong viec
   * @param pnFS200
   * @param pvLOGIN
   */
  _setFS200OfC150(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'SetFS200OfC150',
      pnPC150 = !!params.pnPC150 ? +params.pnPC150 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC150, pnFS200, pvLOGIN], callback)
  }

  /**
   * -- Tao cong viec moi cho Facilio & Merian
   *
   * @param pvPC150OUT
   * @param pvPC150
   * @param pnFH000 -- MOI
   * @param pnFH200L -- MOI; LOGIN
   * @param pnFH200S -- MOI; TREE
   * @param pnFH150
   * @param pnFS200
   * @param pnFC400
   * @param pnFC450
   * @param pnFC550
   * @param pnFC500
   * @param pnFN600
   * @param pvCV151
   * @param pdCD152
   * @param pdCD153
   * @param pvCV154
   * @param pdCD155
   * @param pdCD156
   * @param pvCV157
   * @param pvCV158
   * @param pdCD159
   * @param pdCD160
   * @param pvCV161
   * @param pvCV162
   * @param pvCV163
   * @param pvCV164
   * @param pvCV165
   * @param pvCV166
   * @param pnCN168
   * @param pnCN169 -- ddon vi (TTDD)
   * @param pnCN170 -- MOI
   * @param pnCN171 -- ddon gia (TTDD)
   * @param pnCN172 -- so luong (TTDD)
   * @param plCB173
   * @param pnFC000
   * @param pvLOGIN
   */
  _insertTabC150(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC150',
      // pvPC150OUT = !!params.pvPC150OUT ? params.pvPC150OUT : null,
      pvPC150 = !!params.pvPC150 ? params.pvPC150 : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200L = !!params.pnFH200L ? +params.pnFH200L : 0,
      pnFH200S = !!params.pnFH200S ? +params.pnFH200S : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFC400 = !!params.pnFC400 ? +params.pnFC400 : 0,
      pnFC450 = !!params.pnFC450 ? +params.pnFC450 : 0,
      pnFC550 = !!params.pnFC550 ? +params.pnFC550 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pnFN600 = !!params.pnFN600 ? +params.pnFN600 : 0,
      pvCV151 = !!params.pvCV151 ? params.pvCV151 : null,
      pdCD152 = !!params.pdCD152 ? new Date(params.pdCD152) : new Date(),
      pdCD153 = !!params.pdCD153 ? new Date(params.pdCD153) : new Date(),
      pvCV154 = !!params.pvCV154 ? params.pvCV154 : null,
      pdCD155 = !!params.pdCD155 ? new Date(params.pdCD155) : new Date(),
      pdCD156 = !!params.pdCD156 ? new Date(params.pdCD156) : new Date(),
      pvCV157 = !!params.pvCV157 ? params.pvCV157 : null,
      pvCV158 = !!params.pvCV158 ? params.pvCV158 : null,
      pdCD159 = !!params.pdCD159 ? new Date(params.pdCD159) : new Date(),
      pdCD160 = !!params.pdCD160 ? new Date(params.pdCD160) : new Date(),
      pvCV161 = !!params.pvCV161 ? params.pvCV161 : null,
      pvCV162 = !!params.pvCV162 ? params.pvCV162 : null,
      pvCV163 = !!params.pvCV163 ? params.pvCV163 : null,
      pvCV164 = !!params.pvCV164 ? params.pvCV164 : null,
      pvCV165 = !!params.pvCV165 ? params.pvCV165 : null,
      pvCV166 = !!params.pvCV166 ? params.pvCV166 : null,
      pnCN168 = !!params.pnCN168 ? +params.pnCN168 : 0,
      pnCN169 = !!params.pnCN169 ? +params.pnCN169 : 0,
      pnCN170 = !!params.pnCN170 ? +params.pnCN170 : 0,
      pnCN171 = !!params.pnCN171 ? +params.pnCN171 : 0,
      pnCN172 = !!params.pnCN172 ? +params.pnCN172 : 0,
      plCB173 = !!params.plCB173 ? params.plCB173 : null,
      pnFC000 = !!params.pnFC000 ? +params.pnFC000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvPC150OUT, pvPC150, pnFH000, pnFH200L, pnFH200S, pnFH150, pnFS200, pnFC400, pnFC450, pnFC550, pnFC500, pnFN600, pvCV151, pdCD152, pdCD153, pvCV154, pdCD155, pdCD156, pvCV157, pvCV158, pdCD159, pdCD160, pvCV161, pvCV162, pvCV163, pvCV164, pvCV165, pvCV166, pnCN168, pnCN169, pnCN170, pnCN171, pnCN172, plCB173, pnFC000, pvLOGIN], callback)
  }

  /**
   * @param pnPC150
   * @param pvLOGIN
   */
  _setCompletedC150(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'SetCompletedC150',
      pnPC150 = !!params.pnPC150 ? +params.pnPC150 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC150, pvLOGIN], callback)
  }

  /**
   * -- HUY TICKET THI HUY TAT CA
   *
   * @param pvFC150
   * @param pvLOGIN
   */
  _stornoTabC150_p2(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC150',
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFC150, pvLOGIN], callback)
  }

  /**
   * -- CHUC NANG NAY SE HUY BO SAU NAY
   *
   * @param pnFC150
   * @param pvCV167
   * @param pvLOGIN
   */
  _stornoTabC150_p3(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC150',
      pnFC150 = !!params.pnFC150 ? params.pnFC150 : null,//ban cu la string
      pvCV167 = !!params.pvCV167 ? params.pvCV167 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFC150, pvCV167, pvLOGIN], callback)
  }

  /**
   * @param pnPC150
   * @param pdCD152
   * @param pdCD153
   * @param pvLOGIN
   */
  _updateTabC150_p4(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'UpdateTabC150',
      pnPC150 = !!params.pnPC150 ? +params.pnPC150 : 0,
      pdCD152 = !!params.pdCD152 ? new Date(params.pdCD152) : new Date(),
      pdCD153 = !!params.pdCD153 ? new Date(params.pdCD153) : new Date(),
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC150, pdCD152, pdCD153, pvLOGIN], callback)
  }

  /**
   * @param pnPC150
   * @param pnCN168
   * @param pnCN171
   * @param pnCN172
   * @param pvLOGIN
   */
  _updateTabC150_p5(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'UpdateTabC150',
      pnPC150 = !!params.pnPC150 ? +params.pnPC150 : 0,
      pnCN168 = !!params.pnCN168 ? +params.pnCN168 : 0,
      pnCN171 = !!params.pnCN171 ? +params.pnCN171 : 0,
      pnCN172 = !!params.pnCN172 ? +params.pnCN172 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC150, pnCN168, pnCN171, pnCN172, pvLOGIN], callback)
  }

  /**
   * @param pnPC150
   * @param pnCN169
   * @param pnCN170
   * @param pnCN171
   * @param pnCN172
   * @param pvLOGIN
   */
  _updateTabC150_p6(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'UpdateTabC150',
      pnPC150 = !!params.pnPC150 ? +params.pnPC150 : 0,
      pnCN169 = !!params.pnCN169 ? +params.pnCN169 : 0,
      pnCN170 = !!params.pnCN170 ? +params.pnCN170 : 0,
      pnCN171 = !!params.pnCN171 ? +params.pnCN171 : 0,
      pnCN172 = !!params.pnCN172 ? +params.pnCN172 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC150, pnCN169, pnCN170, pnCN171, pnCN172, pvLOGIN], callback)
  }


}
