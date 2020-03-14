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
  _listOfTabC150C(req_PARAM, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC150C',
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH150 = !!req_PARAM.pnFH150 ? +req_PARAM.pnFH150 : 0,
      pnFC450 = !!req_PARAM.pnFC450 ? +req_PARAM.pnFC450 : 0,
      pnFC500 = !!req_PARAM.pnFC500 ? +req_PARAM.pnFC500 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pnSUPER = !!req_PARAM.pnSUPER ? +req_PARAM.pnSUPER : 0,
      pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
      pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
      pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
      pvCV154 = !!req_PARAM.pvCV154 ? req_PARAM.pvCV154 : null,
      pdCD153 = !!req_PARAM.pdCD153 ? new Date(req_PARAM.pdCD153) : new Date(),
      pnPB050 = !!req_PARAM.pnPB050 ? +req_PARAM.pnPB050 : 0,
      pnREPART = !!req_PARAM.pnREPART ? +req_PARAM.pnREPART : 0,
      pvUSER = !!req_PARAM.pvUSER ? req_PARAM.pvUSER : null,
      pvSTATUS = !!req_PARAM.pvSTATUS ? req_PARAM.pvSTATUS : null,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0

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
  _listOfTabC150S(req_PARAM, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC150S',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFH150 = !!req_PARAM.pnFH150 ? +req_PARAM.pnFH150 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFC500 = !!req_PARAM.pnFC500 ? +req_PARAM.pnFC500 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvCV165 = !!req_PARAM.pvCV165 ? req_PARAM.pvCV165 : null,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pdCD153F = !!req_PARAM.pdCD153F ? new Date(req_PARAM.pdCD153F) : new Date(),
      pdCD153T = !!req_PARAM.pdCD153T ? new Date(req_PARAM.pdCD153T) : new Date(),
      pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
      pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
      pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

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
  _listOfTabC150PER(req_PARAM, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC150PER',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFC500 = !!req_PARAM.pnFC500 ? +req_PARAM.pnFC500 : 0,
      pnOFFSET = !!req_PARAM.pnOFFSET ? +req_PARAM.pnOFFSET : 0,
      pnLIMIT = !!req_PARAM.pnLIMIT ? +req_PARAM.pnLIMIT : 0,
      pnSORT = !!req_PARAM.pnSORT ? +req_PARAM.pnSORT : 0,
      pnDIRECTION = !!req_PARAM.pnDIRECTION ? +req_PARAM.pnDIRECTION : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

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
  _getRowCountC150(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetRowCountC150',
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH150 = !!req_PARAM.pnFH150 ? +req_PARAM.pnFH150 : 0,
      pnFC4501 = !!req_PARAM.pnFC4501 ? +req_PARAM.pnFC4501 : 0,
      pnFC4502 = !!req_PARAM.pnFC4502 ? +req_PARAM.pnFC4502 : 0,
      pnFC4503 = !!req_PARAM.pnFC4503 ? +req_PARAM.pnFC4503 : 0,
      pnFC5001 = !!req_PARAM.pnFC5001 ? +req_PARAM.pnFC5001 : 0,
      pnFC5002 = !!req_PARAM.pnFC5002 ? +req_PARAM.pnFC5002 : 0,
      pnFC5003 = !!req_PARAM.pnFC5003 ? +req_PARAM.pnFC5003 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvCV154 = !!req_PARAM.pvCV154 ? req_PARAM.pvCV154 : null,
      pdCD153 = !!req_PARAM.pdCD153 ? new Date(req_PARAM.pdCD153) : new Date(),
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnDEADLINE = !!req_PARAM.pnDEADLINE ? +req_PARAM.pnDEADLINE : 0,
      pvSTATUS = !!req_PARAM.pvSTATUS ? req_PARAM.pvSTATUS : null,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0

    this.oracleUtilModel._callFunction(funcName, [pvLOGIN, pnFH000, pnFH200, pnFH150, pnFC4501, pnFC4502, pnFC4503, pnFC5001, pnFC5002, pnFC5003, pvFC550, pvCV154, pdCD153, pnFB050, pnDEADLINE, pvSTATUS, pnFN850], callback)
  }
  // ==============================================
  /**
   * @param pnFH150
   */
  _getTodoDayOfC150(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetTodoDayOfC150',
      pnFH150 = !!req_PARAM.pnFH150 ? +req_PARAM.pnFH150 : 0

    this.oracleUtilModel._callFunction(funcName, [pnFH150], callback)
  }

  /**
   * @param pnFH150
   */
  _getTodoPercentage(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetTodoPercentage',
      pnFH150 = !!req_PARAM.pnFH150 ? +req_PARAM.pnFH150 : 0

    this.oracleUtilModel._callFunction(funcName, [pnFH150], callback)
  }

  /**
   * @param pnPC150
   */
  _getTodoDayOfParent(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetTodoDayOfParent',
      pnPC150 = !!req_PARAM.pnPC150 ? +req_PARAM.pnPC150 : 0

    this.oracleUtilModel._callFunction(funcName, [pnPC150], callback)
  }

  /**
   * @param pnPC150
   */
  _getTodoPercForParent(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetTodoPercForParent',
      pnPC150 = !!req_PARAM.pnPC150 ? +req_PARAM.pnPC150 : 0

    this.oracleUtilModel._callFunction(funcName, [pnPC150], callback)
  }

  /**
   * @param pnPC150 -- PC150: ID cong viec
   * @param pnFS200
   * @param pvLOGIN
   */
  _setFS200OfC150(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'SetFS200OfC150',
      pnPC150 = !!req_PARAM.pnPC150 ? +req_PARAM.pnPC150 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

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
  _insertTabC150(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC150',
      // pvPC150OUT = !!req_PARAM.pvPC150OUT ? req_PARAM.pvPC150OUT : null,
      pvPC150 = !!req_PARAM.pvPC150 ? req_PARAM.pvPC150 : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = !!req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = !!req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pnFH150 = !!req_PARAM.pnFH150 ? +req_PARAM.pnFH150 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pnFC400 = !!req_PARAM.pnFC400 ? +req_PARAM.pnFC400 : 0,
      pnFC450 = !!req_PARAM.pnFC450 ? +req_PARAM.pnFC450 : 0,
      pnFC550 = !!req_PARAM.pnFC550 ? +req_PARAM.pnFC550 : 0,
      pnFC500 = !!req_PARAM.pnFC500 ? +req_PARAM.pnFC500 : 0,
      pnFN600 = !!req_PARAM.pnFN600 ? +req_PARAM.pnFN600 : 0,
      pvCV151 = !!req_PARAM.pvCV151 ? req_PARAM.pvCV151 : null,
      pdCD152 = !!req_PARAM.pdCD152 ? new Date(req_PARAM.pdCD152) : new Date(),
      pdCD153 = !!req_PARAM.pdCD153 ? new Date(req_PARAM.pdCD153) : new Date(),
      pvCV154 = !!req_PARAM.pvCV154 ? req_PARAM.pvCV154 : null,
      pdCD155 = !!req_PARAM.pdCD155 ? new Date(req_PARAM.pdCD155) : new Date(),
      pdCD156 = !!req_PARAM.pdCD156 ? new Date(req_PARAM.pdCD156) : new Date(),
      pvCV157 = !!req_PARAM.pvCV157 ? req_PARAM.pvCV157 : null,
      pvCV158 = !!req_PARAM.pvCV158 ? req_PARAM.pvCV158 : null,
      pdCD159 = !!req_PARAM.pdCD159 ? new Date(req_PARAM.pdCD159) : new Date(),
      pdCD160 = !!req_PARAM.pdCD160 ? new Date(req_PARAM.pdCD160) : new Date(),
      pvCV161 = !!req_PARAM.pvCV161 ? req_PARAM.pvCV161 : null,
      pvCV162 = !!req_PARAM.pvCV162 ? req_PARAM.pvCV162 : null,
      pvCV163 = !!req_PARAM.pvCV163 ? req_PARAM.pvCV163 : null,
      pvCV164 = !!req_PARAM.pvCV164 ? req_PARAM.pvCV164 : null,
      pvCV165 = !!req_PARAM.pvCV165 ? req_PARAM.pvCV165 : null,
      pvCV166 = !!req_PARAM.pvCV166 ? req_PARAM.pvCV166 : null,
      pnCN168 = !!req_PARAM.pnCN168 ? +req_PARAM.pnCN168 : 0,
      pnCN169 = !!req_PARAM.pnCN169 ? +req_PARAM.pnCN169 : 0,
      pnCN170 = !!req_PARAM.pnCN170 ? +req_PARAM.pnCN170 : 0,
      pnCN171 = !!req_PARAM.pnCN171 ? +req_PARAM.pnCN171 : 0,
      pnCN172 = !!req_PARAM.pnCN172 ? +req_PARAM.pnCN172 : 0,
      plCB173 = !!req_PARAM.plCB173 ? req_PARAM.plCB173 : null,
      pnFC000 = !!req_PARAM.pnFC000 ? +req_PARAM.pnFC000 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvPC150OUT, pvPC150, pnFH000, pnFH200L, pnFH200S, pnFH150, pnFS200, pnFC400, pnFC450, pnFC550, pnFC500, pnFN600, pvCV151, pdCD152, pdCD153, pvCV154, pdCD155, pdCD156, pvCV157, pvCV158, pdCD159, pdCD160, pvCV161, pvCV162, pvCV163, pvCV164, pvCV165, pvCV166, pnCN168, pnCN169, pnCN170, pnCN171, pnCN172, plCB173, pnFC000, pvLOGIN], callback)
  }

  /**
   * @param pnPC150
   * @param pvLOGIN
   */
  _setCompletedC150(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'SetCompletedC150',
      pnPC150 = !!req_PARAM.pnPC150 ? +req_PARAM.pnPC150 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC150, pvLOGIN], callback)
  }

  /**
   * -- HUY TICKET THI HUY TAT CA
   *
   * @param pvFC150
   * @param pvLOGIN
   */
  _stornoTabC150_p2(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC150',
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFC150, pvLOGIN], callback)
  }

  /**
   * -- CHUC NANG NAY SE HUY BO SAU NAY
   *
   * @param pnFC150
   * @param pvCV167
   * @param pvLOGIN
   */
  _stornoTabC150_p3(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC150',
      pnFC150 = !!req_PARAM.pnFC150 ? req_PARAM.pnFC150 : null,//ban cu la string
      pvCV167 = !!req_PARAM.pvCV167 ? req_PARAM.pvCV167 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFC150, pvCV167, pvLOGIN], callback)
  }

  /**
   * @param pnPC150
   * @param pdCD152
   * @param pdCD153
   * @param pvLOGIN
   */
  _updateTabC150_p4(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'UpdateTabC150',
      pnPC150 = !!req_PARAM.pnPC150 ? +req_PARAM.pnPC150 : 0,
      pdCD152 = !!req_PARAM.pdCD152 ? new Date(req_PARAM.pdCD152) : new Date(),
      pdCD153 = !!req_PARAM.pdCD153 ? new Date(req_PARAM.pdCD153) : new Date(),
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC150, pdCD152, pdCD153, pvLOGIN], callback)
  }

  /**
   * @param pnPC150
   * @param pnCN168
   * @param pnCN171
   * @param pnCN172
   * @param pvLOGIN
   */
  _updateTabC150_p5(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'UpdateTabC150',
      pnPC150 = !!req_PARAM.pnPC150 ? +req_PARAM.pnPC150 : 0,
      pnCN168 = !!req_PARAM.pnCN168 ? +req_PARAM.pnCN168 : 0,
      pnCN171 = !!req_PARAM.pnCN171 ? +req_PARAM.pnCN171 : 0,
      pnCN172 = !!req_PARAM.pnCN172 ? +req_PARAM.pnCN172 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

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
  _updateTabC150_p6(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'UpdateTabC150',
      pnPC150 = !!req_PARAM.pnPC150 ? +req_PARAM.pnPC150 : 0,
      pnCN169 = !!req_PARAM.pnCN169 ? +req_PARAM.pnCN169 : 0,
      pnCN170 = !!req_PARAM.pnCN170 ? +req_PARAM.pnCN170 : 0,
      pnCN171 = !!req_PARAM.pnCN171 ? +req_PARAM.pnCN171 : 0,
      pnCN172 = !!req_PARAM.pnCN172 ? +req_PARAM.pnCN172 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPC150, pnCN169, pnCN170, pnCN171, pnCN172, pvLOGIN], callback)
  }


}
