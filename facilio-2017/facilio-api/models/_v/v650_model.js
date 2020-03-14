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
  _listOfTabV650_p9(params, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV650",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFK100 = !!params.pnFK100 ? +params.pnFK100 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFV500 = !!params.pnFV500 ? +params.pnFV500 : 0,
      pnVN663 = !!params.pnVN663 ? +params.pnVN663 : 0,
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFK100, pvFC150, pnFV500, pnVN663, pnFV750, pnFB050, pvLOGIN], callback)
  }
  /**
  * --danh sach vat tu theo phieu cong viec (ticket No)
  * @param pvFC150  
  */
  _listOfTabV650_p2(params, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV650",
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pvFC150, pvLOGIN], callback)
  }
  /**
  * danh sach vat tu theo phieu cong viec (ticket No)
  * @param pnFV750 
  * @param pvFC150  
  */
  _listOfTabV650EBS(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV650EBS",
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _insertTabV650HT_p28(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'InsertTabV650HT',
      pnPV650 = !!params.pnPV650 ? +params.pnPV650 : 0,
      pnVN651 = !!params.pnVN651 ? +params.pnVN651 : 0,
      pnVN652 = !!params.pnVN652 ? +params.pnVN652 : 0,
      pnVN653 = !!params.pnVN653 ? +params.pnVN653 : 0,
      pnVN654 = !!params.pnVN654 ? +params.pnVN654 : 0,
      pnVN655 = !!params.pnVN655 ? +params.pnVN655 : 0,
      pnVN656 = !!params.pnVN656 ? +params.pnVN656 : 0,
      pvVV657 = !!params.pvVV657 ? params.pvVV657 : null,
      pbVB658 = !!params.pbVB658 ? +params.pbVB658 : 0,
      pnVN659 = !!params.pnVN659 ? +params.pnVN659 : 0,
      pnVN660 = !!params.pnVN660 ? +params.pnVN660 : 0,
      pnVN661 = !!params.pnVN661 ? +params.pnVN661 : 0,
      pvVV665 = !!params.pvVV665 ? params.pvVV665 : null,
      pdVD666 = !!params.pdVD666 ? params.pdVD666 : null,
      pvVV667 = !!params.pvVV667 ? params.pvVV667 : null,
      pvVV670 = !!params.pvVV670 ? params.pvVV670 : null,
      pnFV300 = !!params.pnFV300 ? +params.pnFV300 : 0,
      pnFV200 = !!params.pnFV200 ? +params.pnFV200 : 0,
      pnFV500 = !!params.pnFV500 ? +params.pnFV500 : 0,
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFV050 = !!params.pnFV050 ? +params.pnFV050 : 0,
      pnFK100 = !!params.pnFK100 ? +params.pnFK100 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _insertTabV650HT_p30(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'InsertTabV650HT',
      pnPV650 = !!params.pnPV650 ? +params.pnPV650 : 0,
      pnFV300 = !!params.pnFV300 ? +params.pnFV300 : 0,
      pnFV500 = !!params.pnFV500 ? +params.pnFV500 : 0,
      pnFV200 = !!params.pnFV200 ? +params.pnFV200 : 0,
      pnFV050 = !!params.pnFV050 ? +params.pnFV050 : 0,
      pnVN651 = !!params.pnVN651 ? +params.pnVN651 : 0,
      pnVN652 = !!params.pnVN652 ? +params.pnVN652 : 0,
      pnVN653 = !!params.pnVN653 ? +params.pnVN653 : 0,
      pnVN654 = !!params.pnVN654 ? +params.pnVN654 : 0,
      pnVN655 = !!params.pnVN655 ? +params.pnVN655 : 0,
      pnVN656 = !!params.pnVN656 ? +params.pnVN656 : 0,
      pvVV657 = !!params.pvVV657 ? params.pvVV657 : null,
      pbVB658 = !!params.pbVB658 ? +params.pbVB658 : 0,
      pnVN659 = !!params.pnVN659 ? +params.pnVN659 : 0,
      pnVN660 = !!params.pnVN660 ? +params.pnVN660 : 0,
      pnVN661 = !!params.pnVN661 ? +params.pnVN661 : 0,
      pvVV665 = !!params.pvVV665 ? params.pvVV665 : null,
      pdVD666 = !!params.pdVD666 ? params.pdVD666 : null,
      pvVV667 = !!params.pvVV667 ? params.pvVV667 : null,
      pvFV220 = !!params.pvFV220 ? params.pvFV220 : null,
      pvFV230 = !!params.pvFV230 ? params.pvFV230 : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFK100 = !!params.pnFK100 ? +params.pnFK100 : 0,
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pvFC150 = !!params.pvFC150 ? params.pvFC150 : null,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS250 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV650, pnFV300, pnFV500, pnFV200, pnFV050, pnVN651, pnVN652, pnVN653, pnVN654, pnVN655, pnVN656, pvVV657, pbVB658, pnVN659, pnVN660, pnVN661, pvVV665, pdVD666, pvVV667, pvFV220, pvFV230, pnFH000, pnFH200, pnFK100, pnFV750, pvFC150, pnFB050, pnFS200, pnFS250, pvLOGIN], callback)
  }
  /**
  * StornoTabV650
  * @param pnPV650
  * @param pnFV750
  */
  _stornoTabV650(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'StornoTabV650',
      pnPV650 = !!params.pnPV650 ? +params.pnPV650 : 0,
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _updateTabV650HT(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'UpdateTabV650HT',
      pnPV650 = !!params.pnPV650 ? +params.pnPV650 : 0,
      pnVN651 = !!params.pnVN651 ? +params.pnVN651 : 0,
      pbVB658 = !!params.pbVB658 ? +params.pbVB658 : 0,
      pnVN660 = !!params.pnVN660 ? +params.pnVN660 : 0,
      pnVN661 = !!params.pnVN661 ? +params.pnVN661 : 0,
      pnVN663 = !!params.pnVN663 ? +params.pnVN663 : 0,
      pdVD668 = !!params.pdVD668 ? params.pdVD668 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV650, pnVN651, pbVB658, pnVN660, pnVN661, pnVN663, pdVD668, pvLOGIN], callback)
  }

  /**
  * -- kiem tra vat tu ton kho ebs
  * @param pnVN509
  * @param pnORGID
  * @param pvSUBIN
  */
  _checkBestandAEBS(params, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'CheckBestandAEBS',
    pnVN509 = !!params.pnVN509 ? +params.pnVN509 : 0,
    pnORGID = !!params.pnORGID ? +params.pnORGID : 0,
      pvSUBIN = !!params.pvSUBIN ? params.pvSUBIN : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnVN509, pnORGID, pvSUBIN, pvLOGIN], callback)
  }

}