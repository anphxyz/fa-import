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
  _listOfTabC650(params, callback) {
    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650',
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFC150 = !!params.pnFC150 ? +params.pnFC150 : 0
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
  _listOfTabC650R_pv(params, callback) {
    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650R',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pvFC150, pnFN100, pvLOGIN], callback)
  }

  /**
   * @param pnFN100
   * @param pnFC150
   * @param pnNN104
   * @param pnNN105
   */
  _listOfTabC650R_pn(params, callback) {
    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650R',
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFC150 = !!params.pnFC150 ? +params.pnFC150 : 0,
      pnNN104 = !!params.pnNN104 ? +params.pnNN104 : 0,
      pnNN105 = !!params.pnNN105 ? +params.pnNN105 : 0

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
  _listOfTabC650L_p4(params, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650L',
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFC150 = !!params.pnFC150 ? +params.pnFC150 : 0,
      pnNN104 = !!params.pnNN104 ? +params.pnNN104 : 0,
      pnNN105 = !!params.pnNN105 ? +params.pnNN105 : 0

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
  _listOfTabC650L_p10(params, callback) {

    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC650L',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnNN104 = !!params.pnNN104 ? +params.pnNN104 : 0,
      pnNN105 = !!params.pnNN105 ? +params.pnNN105 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pdCD153 = !!params.pdCD153 ? new Date(params.pdCD153) : new Date(),
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pnFS250, pnNN104, pnNN105, pvFC550, pvFC150, pdCD153, pnFN850], callback)
  }

  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * danh sach tat ca cac nhan vien ddam trach cong viec voi LOGINNAME 
   * @param pvFC150 
   */
  _getUserListTabC650(params, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetUserListTabC650',
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null

    this.oracleUtilModel._callFunction(funcName, [pvFC150], callback)
  }

  /**
   * @param pnFC150 
   */
  _getUserFromTabC650(params, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetUserFromTabC650',
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null

    this.oracleUtilModel._callFunction(funcName, [pvFC150], callback)
  }

  /**
   * @param pnFC150 
   */
  _getUserFromTabC650C(params, callback) {

    const funcName = this.SYNONYM.C2017_CUR + 'GetUserFromTabC650C',
      pnFC150 = !!params.pnFC150 ? params.pnFC150 : null

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
  _insertTabC650(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'InsertTabC650',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pdCD651 = !!params.pdCD651 ? new Date(params.pdCD651) : new Date(),
      pnCN652 = !!params.pnCN652 ? +params.pnCN652 : 0,
      pnCN653 = !!params.pnCN653 ? +params.pnCN653 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _stornoTabC650(params, callback) {

    const funcName = this.SYNONYM.C2017_FACI + 'StornoTabC650',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFC150 = !!params.pnFC150 ? params.pnFC150 : null,//phien ban cu la string
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFN100, pnFC150, pvLOGIN], callback)
  }

}