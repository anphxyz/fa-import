/**
 * V650_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class V650_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * -- danh sach vat tu can cung cap dde phuc vu cho viec thi cong bao hanh va bao tri
  * -- them FK100, thay PV650 bang VN663 (ORDERID)
  * @param pnFH000  
  * @param pnFH200 
  * @param pnFK100 
  * @param pvFC150 
  * @param pnFV500 
  * @param pnVN663 
  * @param pnFV750 
  * @param pnFB050 
  */
  _listOfTabV650_p9(req_PARAM, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV650",
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFK100 = !!req_PARAM.pnFK100 ? +req_PARAM.pnFK100 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFV500 = !!req_PARAM.pnFV500 ? +req_PARAM.pnFV500 : 0,
      pnVN663 = !!req_PARAM.pnVN663 ? +req_PARAM.pnVN663 : 0,
      pnFV750 = !!req_PARAM.pnFV750 ? +req_PARAM.pnFV750 : 0,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFK100, pvFC150, pnFV500, pnVN663, pnFV750, pnFB050, pvLOGIN], callback)
  }
  /**
  * --danh sach vat tu theo phieu cong viec (ticket No)
  * @param pvFC150  
  */
  _listOfTabV650_p2(req_PARAM, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV650",
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pvFC150, pvLOGIN], callback)
  }
  /**
  * danh sach vat tu theo phieu cong viec (ticket No)
  * @param pnFV750 
  * @param pvFC150  
  */
  _listOfTabV650EBS(req_PARAM, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV650EBS",
      pnFV750 = !!req_PARAM.pnFV750 ? +req_PARAM.pnFV750 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFV750, pvFC150, pvLOGIN], callback)
  }
  /**
  * hole die Daten aus dem EBS-System
  * @param pnPV650
  * @param pnVN651
  * @param pnVN652  -- DON GIA
  * @param pnVN653
  * @param pnVN654  -- kho nhan
  * @param pnVN655  -- danh mục mã tài sản
  * @param pnVN656  -- trung tâm chi phí
  * @param pvVV657  -- ho con dưới mức kho; ví dụ K21 sub là kho con K21
  * @param pbVB658
  * @param pnVN659
  * @param pnVN660
  * @param pnVN661
  * @param pvVV665  -- Ma vat tu
  * @param pdVD666  -- ngay yeu cau cap phat
  * @param pvVV667  -- nhan vien yeu cau cap phat
  * @param pvVV670  -- trung tâm chi phí
  * @param pnFV300
  * @param pnFV200
  * @param pnFV500
  * @param pnFV750
  * @param pvFC150
  * @param pnFB050
  * @param pnFS250
  * @param pnFS200
  * @param pnFV050
  * @param pnFK100
  * @param pnFH200
  */
  _insertTabV650HT_p28(req_PARAM, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'InsertTabV650HT',
      pnPV650 = !!req_PARAM.pnPV650 ? +req_PARAM.pnPV650 : 0,
      pnVN651 = !!req_PARAM.pnVN651 ? +req_PARAM.pnVN651 : 0,
      pnVN652 = !!req_PARAM.pnVN652 ? +req_PARAM.pnVN652 : 0,
      pnVN653 = !!req_PARAM.pnVN653 ? +req_PARAM.pnVN653 : 0,
      pnVN654 = !!req_PARAM.pnVN654 ? +req_PARAM.pnVN654 : 0,
      pnVN655 = !!req_PARAM.pnVN655 ? +req_PARAM.pnVN655 : 0,
      pnVN656 = !!req_PARAM.pnVN656 ? +req_PARAM.pnVN656 : 0,
      pvVV657 = !!req_PARAM.pvVV657 ? req_PARAM.pvVV657 : null,
      pbVB658 = !!req_PARAM.pbVB658 ? +req_PARAM.pbVB658 : 0,
      pnVN659 = !!req_PARAM.pnVN659 ? +req_PARAM.pnVN659 : 0,
      pnVN660 = !!req_PARAM.pnVN660 ? +req_PARAM.pnVN660 : 0,
      pnVN661 = !!req_PARAM.pnVN661 ? +req_PARAM.pnVN661 : 0,
      pvVV665 = !!req_PARAM.pvVV665 ? req_PARAM.pvVV665 : null,
      pdVD666 = !!req_PARAM.pdVD666 ? req_PARAM.pdVD666 : null,
      pvVV667 = !!req_PARAM.pvVV667 ? req_PARAM.pvVV667 : null,
      pvVV670 = !!req_PARAM.pvVV670 ? req_PARAM.pvVV670 : null,
      pnFV300 = !!req_PARAM.pnFV300 ? +req_PARAM.pnFV300 : 0,
      pnFV200 = !!req_PARAM.pnFV200 ? +req_PARAM.pnFV200 : 0,
      pnFV500 = !!req_PARAM.pnFV500 ? +req_PARAM.pnFV500 : 0,
      pnFV750 = !!req_PARAM.pnFV750 ? +req_PARAM.pnFV750 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFS250 = !!req_PARAM.pnFS250 ? +req_PARAM.pnFS250 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS200 : 0,
      pnFV050 = !!req_PARAM.pnFV050 ? +req_PARAM.pnFV050 : 0,
      pnFK100 = !!req_PARAM.pnFK100 ? +req_PARAM.pnFK100 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV650, pnVN651, pnVN652, pnVN653, pnVN654, pnVN655, pnVN656, pvVV657, pbVB658, pnVN659, pnVN660, pnVN661, pvVV665, pdVD666, pvVV667, pvVV670, pnFV300, pnFV200, pnFV500, pnFV750, pvFC150, pnFB050, pnFS250, pnFS200, pnFV050, pnFK100, pnFH200, pvLOGIN], callback)
  }
  /**
  * hole die Daten aus dem EBS-System
  * @param pnPV650
  * @param pnFV300
  * @param pnFV500
  * @param pnFV200
  * @param pnFV050
  * @param pnVN651
  * @param pnVN652  -- DON GIA
  * @param pnVN653
  * @param pnVN654  -- kho nhan
  * @param pnVN655  -- danh mục mã tài sản
  * @param pnVN656  -- trung tâm chi phí
  * @param pvVV657  -- ho con dưới mức kho; ví dụ K21 sub là kho con K21
  * @param pbVB658
  * @param pnVN659
  * @param pnVN660
  * @param pnVN661
  * @param pvVV665  -- Ma vat tu
  * @param pdVD666  -- ngay yeu cau cap phat
  * @param pvVV667  -- nhan vien yeu cau cap phat
  * @param pvFV220  -- mau
  * @param pvFV230  -- kich co
  * @param pnFH000
  * @param pnFH200
  * @param pnFK100
  * @param pnFV750
  * @param pvFC150
  * @param pnFB050
  * @param pnFS200
  * @param pnFS250
  */
  _insertTabV650HT_p30(req_PARAM, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'InsertTabV650HT',
      pnPV650 = !!req_PARAM.pnPV650 ? +req_PARAM.pnPV650 : 0,
      pnFV300 = !!req_PARAM.pnFV300 ? +req_PARAM.pnFV300 : 0,
      pnFV500 = !!req_PARAM.pnFV500 ? +req_PARAM.pnFV500 : 0,
      pnFV200 = !!req_PARAM.pnFV200 ? +req_PARAM.pnFV200 : 0,
      pnFV050 = !!req_PARAM.pnFV050 ? +req_PARAM.pnFV050 : 0,
      pnVN651 = !!req_PARAM.pnVN651 ? +req_PARAM.pnVN651 : 0,
      pnVN652 = !!req_PARAM.pnVN652 ? +req_PARAM.pnVN652 : 0,
      pnVN653 = !!req_PARAM.pnVN653 ? +req_PARAM.pnVN653 : 0,
      pnVN654 = !!req_PARAM.pnVN654 ? +req_PARAM.pnVN654 : 0,
      pnVN655 = !!req_PARAM.pnVN655 ? +req_PARAM.pnVN655 : 0,
      pnVN656 = !!req_PARAM.pnVN656 ? +req_PARAM.pnVN656 : 0,
      pvVV657 = !!req_PARAM.pvVV657 ? req_PARAM.pvVV657 : null,
      pbVB658 = !!req_PARAM.pbVB658 ? +req_PARAM.pbVB658 : 0,
      pnVN659 = !!req_PARAM.pnVN659 ? +req_PARAM.pnVN659 : 0,
      pnVN660 = !!req_PARAM.pnVN660 ? +req_PARAM.pnVN660 : 0,
      pnVN661 = !!req_PARAM.pnVN661 ? +req_PARAM.pnVN661 : 0,
      pvVV665 = !!req_PARAM.pvVV665 ? req_PARAM.pvVV665 : null,
      pdVD666 = !!req_PARAM.pdVD666 ? req_PARAM.pdVD666 : null,
      pvVV667 = !!req_PARAM.pvVV667 ? req_PARAM.pvVV667 : null,
      pvFV220 = !!req_PARAM.pvFV220 ? req_PARAM.pvFV220 : null,
      pvFV230 = !!req_PARAM.pvFV230 ? req_PARAM.pvFV230 : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pnFK100 = !!req_PARAM.pnFK100 ? +req_PARAM.pnFK100 : 0,
      pnFV750 = !!req_PARAM.pnFV750 ? +req_PARAM.pnFV750 : 0,
      pvFC150 = !!req_PARAM.pvFC150 ? req_PARAM.pvFC150 : null,
      pnFB050 = !!req_PARAM.pnFB050 ? +req_PARAM.pnFB050 : 0,
      pnFS200 = !!req_PARAM.pnFS200 ? +req_PARAM.pnFS250 : 0,
      pnFS250 = !!req_PARAM.pnFS250 ? +req_PARAM.pnFS200 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV650, pnFV300, pnFV500, pnFV200, pnFV050, pnVN651, pnVN652, pnVN653, pnVN654, pnVN655, pnVN656, pvVV657, pbVB658, pnVN659, pnVN660, pnVN661, pvVV665, pdVD666, pvVV667, pvFV220, pvFV230, pnFH000, pnFH200, pnFK100, pnFV750, pvFC150, pnFB050, pnFS200, pnFS250, pvLOGIN], callback)
  }
  /**
  * StornoTabV650
  * @param pnPV650
  * @param pnFV750
  */
  _stornoTabV650(req_PARAM, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'StornoTabV650',
      pnPV650 = !!req_PARAM.pnPV650 ? +req_PARAM.pnPV650 : 0,
      pnFV750 = !!req_PARAM.pnFV750 ? +req_PARAM.pnFV750 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV650, pnFV750, pvLOGIN], callback)
  }
  /**
  * -- CHINH SUA VAT TU YEU CAU
  * -- CHI TRONG TRUONG HOP STATUS = REJECT
  * @param pnPV650
  * @param pnVN651
  * @param pbVB658
  * @param pnVN660
  * @param pnVN661
  * @param pnVN663
  * @param pdVD668  -- ngay yeu cau cap pha
  */
  _updateTabV650HT(req_PARAM, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'UpdateTabV650HT',
      pnPV650 = !!req_PARAM.pnPV650 ? +req_PARAM.pnPV650 : 0,
      pnVN651 = !!req_PARAM.pnVN651 ? +req_PARAM.pnVN651 : 0,
      pbVB658 = !!req_PARAM.pbVB658 ? +req_PARAM.pbVB658 : 0,
      pnVN660 = !!req_PARAM.pnVN660 ? +req_PARAM.pnVN660 : 0,
      pnVN661 = !!req_PARAM.pnVN661 ? +req_PARAM.pnVN661 : 0,
      pnVN663 = !!req_PARAM.pnVN663 ? +req_PARAM.pnVN663 : 0,
      pdVD668 = !!req_PARAM.pdVD668 ? req_PARAM.pdVD668 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV650, pnVN651, pbVB658, pnVN660, pnVN661, pnVN663, pdVD668, pvLOGIN], callback)
  }

  /**
  * -- kiem tra vat tu ton kho ebs
  * @param pnVN509
  * @param pnORGID
  * @param pvSUBIN
  */
  _checkBestandAEBS(req_PARAM, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'CheckBestandAEBS',
    pnVN509 = !!req_PARAM.pnVN509 ? +req_PARAM.pnVN509 : 0,
    pnORGID = !!req_PARAM.pnORGID ? +req_PARAM.pnORGID : 0,
      pvSUBIN = !!req_PARAM.pvSUBIN ? req_PARAM.pvSUBIN : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnVN509, pnORGID, pvSUBIN, pvLOGIN], callback)
  }

}