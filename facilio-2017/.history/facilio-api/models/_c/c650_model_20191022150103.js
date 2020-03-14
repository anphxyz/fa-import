/**
 * C650_MODEL
 * @author Linhnc - 24/11/2017
*/
'use strict'
const Model = require('./../model')

module.exports = class C650_MODEL extends Model {
  constructor() {
    super()
  }

  /**
   * -- danh sach cac qui trinh lam viec hien co trong mot Cty
   * 
   * @param pnFN100
   * @param pnFC150
   */
  _listOfTabC650(req_PARAM, callback) {
    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650',
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFC150 = !!req_PARAM.pnFC150 ? +req_PARAM.pnFC150 : 0
    this.oracleUtilModel._callProcerdure(procName, [pnFN100, pnFC150], callback)
  }

  /**
   * -- danh sach nhan vien ddam trach CV C150
   * 
   * @param pnFH000
   * @param pvFC150
   * @param pnFN100
   * @param pvLOGIN
   */
  _listOfTabC650R_pv(req_PARAM, callback) {
    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650R',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pvFC150, pnFN100, pvLOGIN], callback)
  }

  /**
   * @param pnFN100
   * @param pnFC150
   * @param pnNN104
   * @param pnNN105
   */
  _listOfTabC650R_pn(req_PARAM, callback) {
    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650R',
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFC150 = !!req_PARAM.pnFC150 ? +req_PARAM.pnFC150 : 0,
      pnNN104 = !!req_PARAM.pnNN104 ? +req_PARAM.pnNN104 : 0,
      pnNN105 = !!req_PARAM.pnNN105 ? +req_PARAM.pnNN105 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFN100, pnFC150, pnNN104, pnNN105], callback)
  }

  /**
   * -- danh sach nhan vien phu hop cho mot cong viec ddang can thi cong
   * -- * chuyen mon phai ddat cho cong viec
   * -- * khong nam trong danh sach nghi phep / benh 
   * 
   * @param pnFN100
   * @param pnFC150
   * @param pnNN104
   * @param pnNN105
   */
  _listOfTabC650L_p4(req_PARAM, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650L',
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFC150 = !!req_PARAM.pnFC150 ? +req_PARAM.pnFC150 : 0,
      pnNN104 = !!req_PARAM.pnNN104 ? +req_PARAM.pnNN104 : 0,
      pnNN105 = !!req_PARAM.pnNN105 ? +req_PARAM.pnNN105 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFN100, pnFC150, pnNN104, pnNN105], callback)
  }

  /**
   * @param pnFH000
   * @param pnFH200
   * @param pnFS200
   * @param pnFS250
   * @param pnNN104
   * @param pnNN105
   * @param pvFC550
   * @param pvFC150
   * @param pdCD153
   * @param pnFN850
   */
  _listOfTabC650L_p10(req_PARAM, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650L',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pnFS250 = !!req_PARAM.pnFS250 ? +req_PARAM.pnFS250 : 0,
      pnNN104 = !!req_PARAM.pnNN104 ? +req_PARAM.pnNN104 : 0,
      pnNN105 = !!req_PARAM.pnNN105 ? +req_PARAM.pnNN105 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pdCD153 = !!req_PARAM.pdCD153 ? new Date(req_PARAM.pdCD153) : new Date(),
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pnFS250, pnNN104, pnNN105, pvFC550, pvFC150, pdCD153, pnFN850], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * danh sach tat ca cac nhan vien ddam trach cong viec voi LOGINNAME 
   * @param pvFC150 
   */
  _getUserListTabC650(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetUserListTabC650',
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null

    this.oracleUtilModel._callFunction(funcName, [pvFC150], callback)
  }

  /**
   * @param pnFC150 
   */
  _getUserFromTabC650(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetUserFromTabC650',
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null

    this.oracleUtilModel._callFunction(funcName, [pvFC150], callback)
  }

  /**
   * @param pnFC150 
   */
  _getUserFromTabC650C(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetUserFromTabC650C',
      pnFC150 = !!req_PARAM.pnFC150 ? req_PARAM.pnFC150 : null

    this.oracleUtilModel._callFunction(funcName, [pnFC150], callback)
  }

  /**
   * -- Cap nhat, chinh sua thong tin cong viec dduoc phan cong cho nhan vien
   * 
   * @param pnFH000
   * @param pnFH200
   * @param pnFB050
   * @param pnFN100 -- FN100: ID thuoc nhan vien
   * @param pvFC150 -- FC150: ID cua task, cong viec
   * @param pnFC500
   * @param pdCD651
   * @param pnCN652 -- CN652: 0: chua xem; 1: da xem Task
   * @param pnCN653
   * @param pvLOGIN
   */
  _insertTabC650(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC650',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFC500 = !!req_PARAM.pnFC500 ? +req_PARAM.pnFC500 : 0,
      pdCD651 = !!req_PARAM.pdCD651 ? new Date(req_PARAM.pdCD651) : new Date(),
      pnCN652 = !!req_PARAM.pnCN652 ? +req_PARAM.pnCN652 : 0,
      pnCN653 = !!req_PARAM.pnCN653 ? +req_PARAM.pnCN653 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFB050, pnFN100, pvFC150, pnFC500, pdCD651, pnCN652, pnCN653, pvLOGIN], callback)
  }

   /**
   * -- ddang su dung
   * -- huy cong viec phan cong cho nhan vien 
   * @param pnFH000
   * @param pnFH200
   * @param pnFN100 -- FN100: ID thuoc nhan vien
   * @param pnFC150 -- FC150: ID cua task, cong viec
   * @param pvLOGIN
   */
  _stornoTabC650(req_PARAM, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC650',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFC150 = !!req_PARAM.pnFC150 ? req_PARAM.pnFC150 : null,//phien ban cu la string
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFN100, pnFC150, pvLOGIN], callback)
  }

}