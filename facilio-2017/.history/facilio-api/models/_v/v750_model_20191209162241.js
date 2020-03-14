/**
 * V750_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class V750_MODEL extends Model {
  constructor() {
    super()
  }
  /**
  * danh sach ddon ddat hang / phieu yeu cau 
  * @param pnFH000  
  * @param pnFH200 
  * @param pnFV750 
  * @param pnORGID
  */
  _listOfTabV750(params, callback) {
    const procName = this.SYNONYM.V2017_CUR + "ListOfTabV750",
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pnORGID = !!params.pnORGID ? +params.pnORGID : 0,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFV750, pnORGID, pnLIMIT, pnOFFSET, pnSORT, pnDIRECTION, pnLIMIT, pvLOGIN], callback)
  }

  /**
  * ComBOrganizationEBS
  * @param pnORDID  
  */
  _comBOrganizationEBS(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ComBOrganizationEBS",
      pnORDID = !!params.pnORDID ? +params.pnORDID : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnORDID, pvLOGIN], callback)
  }

  /**
  * Histories of PYC
  * @param pvVV766  
  */
  _listOfTabV750HIS(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfTabV750HIS",
      pvVV766 = !!params.pvVV766 ? +params.pvVV766 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pvVV766, pvLOGIN], callback)
  }

  /**
  * danh muc phong ban nhan phieu yeu cau
  * @param pnEXTID  
  */
  _listOfDepartment(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfDepartment",
      pnEXTID = !!params.pnEXTID ? +params.pnEXTID : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnEXTID, pvLOGIN], callback)
  }
  /**
  * danh muc nhan vien thuoc ebs
  * @param pnEXTID  
  * @param pnDEPID  
  */
  _listOfEmployee(params, callback) {
    const procName = this.SYNONYM.V2017_CUREBS + "ListOfEmployee",
      pnEXTID = !!params.pnEXTID ? +params.pnEXTID : 0,
      pnDEPID = !!params.pnDEPID ? +params.pnDEPID : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callProcerdure(procName, [pnEXTID, pnDEPID, pvLOGIN], callback)
  }

  /**
  * InsertTabV750
  * @param pnPV750
  * @param pnFV300
  * @param pnFH000
  * @param pnFH200
  * @param pnFK100
  * @param pnFV050  -- KHO 
  * @param pnFN850  -- nguoi nhan phieu YC
  * @param pnFK950B
  * @param pnFK950S
  * @param pdVD751
  * @param pdVD752
  * @param pnVN753
  * @param pnVN754
  * @param pnVN755
  * @param pnVN756
  * @param pvVV757
  * @param pbVB758
  * @param pvVV759
  * @param pnVN760
  * @param pnFC475  -- ID qui trinh
  * @param pvVV767  -- nguoi nhan VT
  * @param pnVN768  -- VN660
  * @param pnVN769  -- VN661
  * @param pvVV770  -- ten nguoi nhan VT
  */
  _insertTabV750(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'InsertTabV750',
      pnPV750 = !!params.pnPV750 ? +params.pnPV750 : 0,
      pnFV300 = !!params.pnFV300 ? +params.pnFV300 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFK100 = !!params.pnFK100 ? +params.pnFK100 : 0,
      pnFV050 = !!params.pnFV050 ? +params.pnFV050 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnFK950B = !!params.pnFK950B ? +params.pnFK950B : 0,
      pnFK950S = !!params.pnFK950S ? +params.pnFK950S : 0,
      pdVD751 = !!params.pdVD751 ? params.pdVD751 : null,
      pdVD752 = !!params.pdVD752 ? params.pdVD752 : null,
      pnVN753 = !!params.pnVN753 ? +params.pnVN753 : 0,
      pnVN754 = !!params.pnVN754 ? +params.pnVN754 : 0,
      pnVN755 = !!params.pnVN755 ? +params.pnVN755 : 0,
      pnVN756 = !!params.pnVN756 ? +params.pnVN756 : 0,
      pvVV757 = !!params.pvVV757 ? params.pvVV757 : null,
      pbVB758 = !!params.pbVB758 ? +params.pbVB758 : 0,
      pvVV759 = !!params.pvVV759 ? params.pvVV759 : null,
      pnVN760 = !!params.pnVN760 ? +params.pnVN760 : 0,
      pnFC475 = !!params.pnFC475 ? +params.pnFC475 : 0,
      pvVV767 = !!params.pvVV767 ? params.pvVV767 : null,
      pnVN768 = !!params.pnVN768 ? +params.pnVN768 : 0,
      pnVN769 = !!params.pnVN769 ? +params.pnVN769 : 0,
      pvVV770 = !!params.pvVV770 ? params.pvVV770 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV750, pnFV300, pnFH000, pnFH200, pnFK100, pnFV050, pnFN850, pnFK950B,
      pnFK950S, pdVD751, pdVD752, pnVN753, pnVN754, pnVN755, pnVN756, pvVV757, pbVB758, pvVV759, pnVN760, pnFC475,
      pvVV767, pnVN768, pnVN769, pvVV770, pvLOGIN], callback)
  }

  /**
  * Huy ddon ddat hang
  * @param pnPV750
  */
  _stornoTabV750(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'StornoTabV750',
      pnPV750 = !!params.pnPV750 ? +params.pnPV750 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV750, pvLOGIN], callback)
  }
  /**
  * kiem tra DDON DDAT HANG
  * @param pnPV750
  */
  _confirmTabV750(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'ConfirmTabV750',
      pnPV750 = !!params.pnPV750 ? +params.pnPV750 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnPV750, pvLOGIN], callback)
  }
  /**
  * kiem tra DDON DDAT HANG
  * @param pdBD676
  * @param pvBV677
  * @param pnEXTID
  * @param pnFH000
  * @param pnFH200
  */
  _createTabV750V650(params, callback) {
    const funcName = this.SYNONYM.V2017_FACI + 'CreateTabV750V650',
      pdBD676 = !!params.pdBD676 ? params.pdBD676 : null,
      pvBV677 = !!params.pvBV677 ? params.pvBV677 : null,
      pnEXTID = !!params.pnEXTID ? +params.pnEXTID : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pdBD676, pvBV677, pnEXTID, pnFH000, pnFH200, pvLOGIN], callback)
  }

  /**
  * -- CAP NHAT TRANG THAI PHIEU YEU CAU
  * @param pnFH000
  * @param pnFH200
  */
  _UpdateTabV750EBS_p3(params, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'UpdateTabV750EBS',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pvLOGIN], callback)
  }
  /**
  * -- CHINH SUA VAT TU YEU CAU 
  * @param pnFV750
  */
  _UpdateTabV750EBS_p2(params, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'UpdateTabV750EBS',
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFV750, pvLOGIN], callback)
  }
  /**
  * -- CHINH SUA VAT TU YEU CAU 
  * @param pnFV050  -- PHIEU YEU CAU
  */
  _fACILIOUPDATEBS(params, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'FACILIOUPDATEBS',
      pnFV050 = !!params.pnFV050 ? +params.pnFV050 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFV050, pvLOGIN], callback)
  }
  /**
  * -- CHINH SUA VAT TU YEU CAU 
  * @param pnFV750  -- V_HEADER_ID
  */
  _stornoTabV750EBS(params, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'StornoTabV750EBS',
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFV750, pvLOGIN], callback)
  }
  /**
  * -- kiem tra ma tai san co ton tai ben ebs
  * @param pvBV052
  */
  _checkAsseTCodeEBS(params, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'CheckAsseTCodeEBS',
      pvBV052 = !!params.pvBV052 ? +params.pvBV052 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvBV052, pvLOGIN], callback)
  }
  /**
  * -- SENDREQUEST2EBS
  * @param pnFV750  -- PHIEU YEU CAU
  * @param pnORGID  -- V_ORG_ID
  */
  _sENDREQUEST2EBS(params, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'SENDREQUEST2EBS',
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pnORGID = !!params.pnORGID ? +params.pnORGID : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFV750, pnORGID, pvLOGIN], callback)
  }
  /**
  * -- FACILIOSEND2EBS
  * @param pnFV750  -- PHIEU YEU CAU
  */
  _sACILIOSEND2EBS(params, callback) {
    const funcName = this.SYNONYM.V2017_FACIEBS + 'FACILIOSEND2EBS',
      pnFV750 = !!params.pnFV750 ? +params.pnFV750 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFV750, pvLOGIN], callback)
  }
}