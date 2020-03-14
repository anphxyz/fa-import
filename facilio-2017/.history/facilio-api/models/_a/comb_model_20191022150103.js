/**
 * * COMB_MODEL
 * @author Linhnc - 30/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class COMB_MODEL extends Model {
  constructor() {
    super()
  }

  // ===========================================================================
  // PROCEDURE
  // ===========================================================================

  /**
   * Danh sach cac so ddo su dung trong viec tinh chu ky bao tri & bao hanh
   *
   * @param pnFH000
   * @param pnFH200L
   * @param pnFH200S
   * @param pvBV003
   * @param pvLOGIN
   */
  _comBTabB000_p5(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB000',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = !!req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = !!req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvBV003, pvLOGIN], callback)
  }

  /**
   * Danh sach cac so ddo su dung trong viec tinh chu ky bao tri & bao hanh
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvBV003
   * @param pvLOGIN
   */
  _comBTabB000_p4(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB000',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvBV003, pvLOGIN], callback)
  }

  /**
   * Vi tri cac may thuoc cty, chi nhanh, phan xuong, lau line
   * Danh sach du an dung cho TAI CHINH: FH200 phai theo cach chon nguoi su dung
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabB050_p3(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB050',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * danh sach may moc (vi tri) thuoc phan he quan ly va cty, chi nhanh
   *
   * @param pnFH000
   * @param pnFH200L
   * @param pnFH200S
   * @param pvLOGIN
   */
  _comBTabB050_p4(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB050',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH200S = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvLOGIN], callback)
  }

  /**
   * Vi tri cac may thuoc cty, chi nhanh, phan xuong, lau line theo khu vuc QL
   * Danh sach du an dung cho TAI CHINH: FH200 phai theo cach chon nguoi su dung
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFN850
   * @param pvLOGIN
   */
  _comBTabB050E(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB050E',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN850 = !!req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN850, pvLOGIN], callback)
  }

  /**
   * Danh sach cac du an thuoc nhan vien thu su dung cho phien bang Mobile
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFN100
   * @param pvLOGIN
   *
   */
  _comBTabB050M(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB050M',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFN100, pvLOGIN], callback)
  }

  /**
   * Danh sach cac du an FB050 thuoc CHUYEN MUC QUAN LY S200
   * SU DUNG CHO BO LOC M075
   * SU DUNG CHO MASTER DATA DE TAO PHUONG AN BAO TRI (B100) qua thao tac tay
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFS200
   * @param pvLOGIN
   */
  _comBTabB050N(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB050N',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvLOGIN], callback)
  }

  /**
   * TIM TAT CA MA TAI SAN THUOC 1 DON VI
   *
   * @param pnFH200
   * @param pvSEARC
   * @param pvLOGIN
   */
  _comBTabB050S(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB050S',
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvSEARC = !!req_PARAM.pvSEARC ? req_PARAM.pvSEARC : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH200, pvSEARC, pvLOGIN], callback)
  }

  /**
   * Phuong an bao tri
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabB100_p3(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB100',
      pnFH000 = !!req_PARAM ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * PA bao tri (wartungstyp) theo may moc
   * su dung khi thiet lap cac ticket bao tri ddinh ky Theo KHU VUC
   * chi khi may dduoc ddua vao vi tri su dung ..
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFS200
   * @param pvBV003
   * @param pvLOGIN
   */
  _comBTabB100_p5(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB100',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvBV003, pvLOGIN], callback)
  }

  /**
   * Phuong an bao tri (FB100) chua co trong danh sach bao tri cua may (FB050)
   * Dung dde copy phuong an bao tri cho tung may
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFB050
   * @param pnFS200
   * @param pvLOGIN
   */
  _comBTabB100C(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB100C',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pnFS200, pvLOGIN], callback)
  }

  /**
   * Loai bao tri (wartungstyp)
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _bomBTabB300_p3(req_PARAM, callback) {
    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB300',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Loai bao tri(wartungstyp) theo may moc
   * TAB PM
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFS200
   * @param pvBV003 ngon ngu
   * @param pvLOGIN
  */
  _comBTabB300_p5(req_PARAM, callback) {
    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB300',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvBV003, pvLOGIN], callback)
  }

  /**
   * Loai bao tri(wartungstyp) theo may moc su dung khi thiet lap master data
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFS200
   * @param pvLOGIN
   */
  _comBTabB300M(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB300M',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvLOGIN], callback)
  }

  /**
   * Loai bao tri(wartungstyp) theo vi tri cua mot may(position)
   * TAB PM
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFB050
   * @param pvBV003
   * @param pvLOGIN
  */
  _comBTabB300P(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB300P',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvBV003 = !!req_PARAM.pvBV003 ? req_PARAM.pvBV003 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pvBV003, pvLOGIN], callback)
  }

  /**
   * Loai bao tri(wartungstyp) dde lay ID cua may moc
   * Chuyen vao S350 dde lay danh sach cac bo phan may
   *
   * @param pnFH000
   * @param pnFH200
   */
  _comBTabB300_p2(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB300',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200], callback)

  }

  /**
   * DANH SACH NGAY YEU CAU VAT TU
   *
   * @param pvBV677
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabB670(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabB670',
      pvBV677 = req_PARAM.pvBV677 ? req_PARAM.pvBV677 : null,
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pvBV677, pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * CAC CA LAM VIEC TAI MOT CTY, CHI NHANH HOAC VPDD
   * theo ngon ngu
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvCV257
   * @param pvLOGIN
   */
  _comBTabC250(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabC250',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvCV257 = !!req_PARAM.pvCV257 ? req_PARAM.pvCV257 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvCV257, pvLOGIN], callback)
  }

  /**
   * -- danh sach cac phan thi cong cho mot cong viec C150
   *
   * @param pnFH000
   * @param pvFC150
   * @param pvLOGIN
   */
  _comBTabC300(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabC300',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pvFC150, pvLOGIN], callback)
  }

  /**
   * -- Danh sach cac nguyen nhan gay nen su co hu hong may moc
   * -- KHONG SU DUNG NUA
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabC400_p3(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabC400',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach cac nguyen nhan gay nen su co hu hong may moc theo ngon ngu
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvCV403
   * @param pvLOGIN
  */
  _comBTabC400_p4(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabC400',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvCV403 = !!req_PARAM.pvCV403 ? req_PARAM.pvCV403 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvCV403, pvLOGIN], callback)
  }

  /**
   * Danh sach cac qui trinh
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabC450(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabC450',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /** Danh sach cac mtrang thai trong thi cong
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabC500(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabC500',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach cac chuyen nghanh su dung trong thi cong(dien, co khi, ...)
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabC550(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabC550',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach cac chi nhanh, phan xuong, ....thuoc 1 cty
   * TreeView cho Master Data
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabH200MA(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabH200MA',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach cac cty hien co, KHONG kem theo danh sach chi nhanh, phan xuong, ....
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabH200A(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabH200A',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach cac chi nhanh, phan xuong, .... thuoc 1 cty
   * CO PARENT - DDI TIM CHILDS
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvHV253
   * @param pvLOGIN
   */
  _comBTabH200C_p4(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabH200C',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvHV253 = !!req_PARAM.pvHV253 ? req_PARAM.pvHV253 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvHV253, pvLOGIN], callback)
  }

  /**
   * Danh sach cac chi nhanh, phan xuong, ....thuoc 1 cty
   * chi lay la Level ke toi, KO lay nguyen cay(tree)
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabH200C_p3(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabH200C',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Cty, Chi nhanh, phan xuong, lau line
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabH200(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabH200',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach cac cty hien co
   * DANH CHO VAN PHONG CHINH; TONG QUAN
   *
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabH200VPC(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabH200VPC',
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach loai / hinh thuc ve co cau cong ty
   * Danh sach cac CTY nam trong danh sach QL
   * Khi an chuot vao la danh sach cac muc QL cua CTY se dduoc lay ra ComBTabH500()
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabH250(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabH250',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * OEE CHO CAC DAY CHUYEN SX
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFH600
   * @param pvLOGIN
   */
  _comBTabH450(req_PARAM, callback) {
    const procName = this.SYNONYM.A2017_COMB + 'ComBTabH450',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH600 = req_PARAM.pnFH600 ? +req_PARAM.pnFH600 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFH600, pvLOGIN], callback)
  }

  /**
   * Danh sach ve mo hinh quan ly cua mot cty, ddinh kem la cac filter dung cho bao cao
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvSTATUS
   * @param pvLOGIN
   * @param pnFN850
   */
  _comBTabH550(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabH550',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvSTATUS = req_PARAM.pvSTATUS ? req_PARAM.pvSTATUS : null,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFN850 = req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvSTATUS, pvLOGIN, pnFN850], callback)
  }

  /**
   * Danh sach cac loai ngay ghi lam(le, benh, dot xuat, ...)
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   * @param pvNV004
   */
  _comBTabN000(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN000',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pvNV004 = req_PARAM.pvNV004 ? req_PARAM.pvNV004 : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN, pvNV004], callback)
  }

  /**
   * Danh sach cac nhan vien thuoc Cty, Chi nhanh, phan xuong, lau line
   * ID nhan vien dung lam Value
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabN100(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN100',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach cac nhan vien thuoc Cty, Chi nhanh, phan xuong, lau line
   * LOGIN su dung lam value
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabN100L_p3(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN100L',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach cac nhan vien thuoc Cty, Chi nhanh, phan xuong, lau line
   * SU DUNG CHO COMBBOX TREN CAC GIAO DIEN XEM SO LUONG CV CUA TUNG NHAN VIEN
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   * @param pnFN850
   */
  _comBTabN100L_p4(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN100L',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFN850 = req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN, pnFN850], callback)
  }

  /**
   * -- Danh sach cac nhan vien thuoc Cty, Chi nhanh, phan xuong, lau line
   * -- SU DUNG CHO COMBBOX TREN CAC GIAO DIEN XEM SO LUONG CV CUA TUNG NHAN VIEN
   *
   * @param pnFN850
   * @param pvLOGIN
   */
  _comBTabN100G(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN100G',
      pnFN850 = req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFN850, pvLOGIN], callback)
  }

  /**
   * Danh sach nhan vien thuoc du an
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFB050
   * @param pvLOGIN
   */
  _comBTabN100M(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN100M',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFB050 = req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFB050, pvLOGIN], callback)
  }

  /**
   * Danh sach cac nhan vien thuoc Cty duoc chyuen giao cong viec
   * SU DUNG CHO COMBBOX TREN CAC GIAO DIEN XEM SO LUONG CV CUA TUNG NHAN VIEN
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   * @param pnFN850
   */
  _comBTabN100C(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN100C',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null,
      pnFN850 = req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN, pnFN850], callback)
  }

  /**
   * thong tin ve danh sach cty, chi nhanh ma nhan vien KHONG ddung chiu trach nhiem quan ly
   *
   * @param pnFH000
   * @param pnFH200L
   * @param pnFH200S
   * @param pnFN850
   * @param pvLOGIN
   */
  _comBTabN400(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN400',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pnFN850 = req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pnFN850, pvLOGIN], callback)
  }

  /**
   * Danh sach cac quoc gia
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabN750(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN750',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * Danh sach cac nhom nhan vien truc thuoc cty, chi nhanh, phan xuong, ...
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabN850(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN850',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * NHOM TO THEO NGUOI DANG NHAP
   *
   * @param pnFN850
   * @param pnFH200
   * @param pnFH000
   * @param pvLOGIN
   */

  _comBTabN850B(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN850B',
      pnFN850 = req_PARAM.pnFN850 ? +req_PARAM.pnFN850 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFN850, pnFH200, pnFH000, pvLOGIN], callback)
  }

  /**
   * NHOM VA NGUOI PHU TRACH THEO VI TRI MAY
   *
   * @param pnFB050
   * @param pvLOGIN
   */
  _comBTabN900(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabN900',
      pnFB050 = req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFB050, pvLOGIN], callback)
  }

  /**
   * danh sach cac nhom quyen
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabQ300(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabQ300',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * danh sach cac nhom nguoi su dung
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabQ350(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabQ350',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * DS THIET BI THEO LOAI: CO DIEN, DAU NHOT HOAC MO
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvFC550
   * @param pnSEARC
   * @param pvLOGIN
   */
  _comBTabS200BS(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS200BS',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvFC550 = req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pnSEARC = req_PARAM.pnSEARC ? +req_PARAM.pnSEARC : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvFC550, pnSEARC, pvLOGIN], callback)
  }

  /**
   * San pham, dich vu, may moc thuoc cty, chi nhanh, phan xuong, ....
   * theo login va lua chon tu TREE
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnSEARC
   * @param pvLOGIN
   */
  _comBTabS200_p4(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS200',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnSEARC = req_PARAM.pnSEARC ? +req_PARAM.pnSEARC : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnSEARC, pvLOGIN], callback)
  }

  /**
   * San pham, dich vu, may moc thuoc cty, chi nhanh, phan xuong, ....
   * Su dung de tao du an tren Abacus
   *
   * @param pnFH000
   * @param pnFH200L
   * @param pnFH200S
   * @param pvLOGIN
   */
  _comBTabS200A(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS200A',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvLOGIN], callback)
  }

  /**
   * San pham, dich vu, may moc Facilio truc thuoc theo Lines
   *
   * @param pnFH000
   * @param pnFH200
   */
  _comBTabS200_p2(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS200',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200], callback)
  }

  /**
   * San pham, dich vu, may moc thuoc cty, chi nhanh, phan xuong, ....
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabS200_p3(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS200',
      pnFH000 = req_PARAM.pnFH000 ? req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * DS THIET BI / LOAI MAY
   *
   * @param pnSEARC
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabS200BS(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS200BS',
      pnSEARC = req_PARAM.pnSEARC ? +req_PARAM.pnSEARC : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnSEARC, pnFH200, pvLOGIN], callback)
  }

  /**
   * danh sach cac bo phan may thuoc mot nhieu khu vuc ma KHONG phu thuoc vao may
   *
   * @param pnFH000
   * @param pnFH200L
   * @param pnFH200S
   * @param pvLOGIN
   */
  _comBTabS250_p4(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS250',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvLOGIN], callback)
  }

  /**
   * bo phan may moc - assembly
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabS250_p3(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS250',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * bo phan may moc theo thong tin tu position
   * su dung khi tao task
   *
   * @param pnFH000
   * @param pnFB050
   * @param pvSTATUS
   * @param pvLOGIN
   */
  _comBTabS250A(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS250A',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFB050 = req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvSTATUS = req_PARAM.pvSTATUS ? req_PARAM.pvSTATUS : null,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFB050, pvSTATUS, pvLOGIN], callback)
  }

  /**
   * bo phan may moc theo thong tin tu position
   *
   * @param pnFH000
   * @param pnFB050
   * @param pvLOGIN
   */
  _comBTabS250B(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS250B',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFB050 = req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFB050, pvLOGIN], callback)
  }

  /**
   * bo phan may moc FS250 theo thong tin MAY FS200
   * DUNG CHO BO LOC M075
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFS200
   * @param pvLOGIN
   */
  _comBTabS250F(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS250F',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvLOGIN], callback)
  }

  /**
   * danh sach cac bo phan(S250) tuy thuoc vao tung may(S200)
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFS200
   * @param pvLOGIN
   */
  _comBTabS350(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabS350',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvLOGIN], callback)
  }

  /**
   * cac muc chi thu khac nhau tai mot cty
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabT000(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabT000',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * cac muc chi thu tien mat
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabT000F(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabT000F',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * cac muc chi thu du kien
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabT000P(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabT000P',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * danh sach cac kho thuoc Cty, chi nhanh, ...
   *
   * @param pnFH000
   * @param pnFH200L
   * @param pnFH200S
   * @param pvLOGIN
   */
  _comBTabV050(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV050',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvLOGIN], callback)
  }

  /**
   * DANH SACH CAC KHO THUOC CTY, CHI NHANH THEO MAY, SAN PHAM HOAC DICH VU
   * SU DUNG CHO VIEC YEU CAU VAT TU TU TICKETS
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFS200
   * @param pvLOGIN
   */
  _comBTabV050S(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV050S',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFS200 = req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pvLOGIN], callback)
  }

  /**
   * danh sach cac don vi tinh phu thuoc vao vat tu
   *
   * @param pnFV500
   * @param pvLOGIN
   */
  _comBTabV200F(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV200F',
      pnFV500 = req_PARAM.pnFV500 ? +req_PARAM.pnFV500 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFV500, pvLOGIN], callback)
  }

  /**
   * danh sach cac don vi dung cho sam pham, vat tu, ...
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabV200(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV200',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * chi tiet cac giao dich xuat nhap kho
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabV300(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV300',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * chi tiet cac giao dich xuat nhap kho
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabV300M(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV300M',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * danh sach vat tu, phu tung thuoc phan he quan ly va cty, chi nhanh
   *
   * @param pnFH000
   * @param pnFH200L
   * @param pnFH200S
   * @param pvLOGIN
   */
  _comBTabV500C(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV500C',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200L = req_PARAM.pnFH200L ? +req_PARAM.pnFH200L : 0,
      pnFH200S = req_PARAM.pnFH200S ? +req_PARAM.pnFH200S : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200L, pnFH200S, pvLOGIN], callback)
  }

  /**
   * danh sach vat tu thuoc nha cung cap.
   *
   * @param pnFH000
   * @param pnFH200
   * @param pnFV350
   * @param pvLOGIN
   */
  _comBTabV500L(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV500L',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFV350 = req_PARAM.pnFV350 ? +req_PARAM.pnFV350 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFV350, pvLOGIN], callback)
  }

  /**
   * danh sach vat tu thuoc cty, chi nhanh, ...
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabV500(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV500',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * danh sach vat tu thuoc cty, chi nhanh, ...
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabV750(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV750',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
  * danh sach vat tu thuoc cty, chi nhanh, ...
  *
  * @param pnFH000
  * @param pnFH200
  * @param pvLOGIN
  */
  _comBTabV750M(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabV750M',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
   * -- truy cap mot dong du lieu voi Primary key la Number | Integer
   *
   * @param pvSCHEMA
   * @param pvTABNAME
   * @param pvPRIMARYKEY
   * @param pnCONDITION
   * @param pvLOGIN
   */
  _selectRowOfTable_p5_num(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'SelectRowOfTable',
      pvSCHEMA = req_PARAM.pvSCHEMA ? req_PARAM.pvSCHEMA : null,
      pvTABNAME = req_PARAM.pvTABNAME ? req_PARAM.pvTABNAME : null,
      pvPRIMARYKEY = req_PARAM.pvPRIMARYKEY ? req_PARAM.pvPRIMARYKEY : null,
      pnCONDITION = req_PARAM.pnCONDITION ? +req_PARAM.pnCONDITION : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pvSCHEMA, pvTABNAME, pvPRIMARYKEY, pnCONDITION, pvLOGIN], callback)
  }

  /**
   * -- truy cap mot dong du lieu voi
   * -- Primary key la String
   *
   * @param pvSCHEMA
   * @param pvTABNAME
   * @param pvPRIMARYKEY
   * @param pvCONDITION
   * @param pvLOGIN
   */
  _selectRowOfTable_p5_str(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'SelectRowOfTable',
      pvSCHEMA = req_PARAM.pvSCHEMA ? req_PARAM.pvSCHEMA : null,
      pvTABNAME = req_PARAM.pvTABNAME ? req_PARAM.pvTABNAME : null,
      pvPRIMARYKEY = req_PARAM.pvPRIMARYKEY ? req_PARAM.pvPRIMARYKEY : null,
      pvCONDITION = req_PARAM.pvCONDITION ? req_PARAM.pvCONDITION : null,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pvSCHEMA, pvTABNAME, pvPRIMARYKEY, pvCONDITION, pvLOGIN], callback)
  }

  /**
   * -- truy cap mot dong du lieu voi Primary key 1 va 2 la Number | Integer | String
   *
   * @param pvSCHEMA
   * @param pvTABNAME
   * @param pvPRIMARYK1
   * @param pnCONDITION
   * @param pvPRIMARYK2
   * @param pnCONDITION2
   * @param pvLOGIN
   */
  _selectRowOfTable_p7_num(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'SelectRowOfTable',
      pvSCHEMA = req_PARAM.pvSCHEMA ? req_PARAM.pvSCHEMA : null,
      pvTABNAME = req_PARAM.pvTABNAME ? req_PARAM.pvTABNAME : null,
      pvPRIMARYK1 = req_PARAM.pvPRIMARYK1 ? req_PARAM.pvPRIMARYK1 : null,
      pnCONDITION = req_PARAM.pnCONDITION ? +req_PARAM.pnCONDITION : 0,
      pvPRIMARYK2 = req_PARAM.pvPRIMARYK2 ? req_PARAM.pvPRIMARYK2 : null,
      pnCONDITION2 = req_PARAM.pnCONDITION2 ? +req_PARAM.pnCONDITION2 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pvSCHEMA, pvTABNAME, pvPRIMARYK1, pnCONDITION, pvPRIMARYK2, pnCONDITION2, pvLOGIN], callback)
  }
  /**
   * -- truy cap mot dong du lieu voi
   * -- Primary key 1 Varchar2 va 2 la Integer
   *
   * @param pvSCHEMA
   * @param pvTABNAME
   * @param pvPRIMARYK1
   * @param pnCONDITION
   * @param pvPRIMARYK2
   * @param pnCONDITION2
   * @param pvLOGIN
   */
  _selectRowOfTable_p7_str(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'SelectRowOfTable',
      pvSCHEMA = req_PARAM.pvSCHEMA ? req_PARAM.pvSCHEMA : null,
      pvTABNAME = req_PARAM.pvTABNAME ? req_PARAM.pvTABNAME : null,
      pvPRIMARYK1 = req_PARAM.pvPRIMARYK1 ? req_PARAM.pvPRIMARYK1 : null,
      pvCONDITION = req_PARAM.pvCONDITION ? req_PARAM.pvCONDITION : null,
      pvPRIMARYK2 = req_PARAM.pvPRIMARYK2 ? req_PARAM.pvPRIMARYK2 : null,
      pnCONDITION2 = req_PARAM.pnCONDITION2 ? +req_PARAM.pnCONDITION2 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pvSCHEMA, pvTABNAME, pvPRIMARYK1, pvCONDITION, pvPRIMARYK2, pnCONDITION2, pvLOGIN], callback)
  }

  /**
   * @param pnORDID
   * @param pvLOGIN
   */
  _comBOrganizationEBS(req_PARAM, callback){
    const procName = this.SYNONYM.V2017_CUREBS + 'ComBOrganizationEBS',
    pnORDID = req_PARAM.pnORDID ? req_PARAM.pnORDID : 0,
    pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

  this.oracleUtilModel._callProcerdure(procName, [pnORDID, pvLOGIN], callback)
  }
  /**
   * -- ComBTabC150K
   *
   * @param pnFH200
   * @param pvLOGIN
   */
  _comBTabC150K(req_PARAM, callback) {

    const procName = this.SYNONYM.A2017_COMB + 'ComBTabC150K',
      pnFH200 = req_PARAM.pnFH200 ? req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFH200, pvLOGIN], callback)
  }
  
  // ===========================================================================
  // FUNCTION
  // ===========================================================================

  /**
   * kiem tra quyen QL khu vuc neu nguoi su dung chi co quyen gioi han
   *
   * @param pnFH000
   * @param pnFH200
   * @param pvLOGIN
   */
  _checkTabH200USER(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_COMB + 'CheckTabH200USER',
      pnFH000 = req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pvLOGIN], callback)
  }

  // _treeViewExists(req_PARAM, callback) {
  //   const procName = this.SYNONYM.A2017_COMB + 'TreeViewExists',

  //   this.oracleUtilModel._callFunction(procName, [], callback)
  // }


}
