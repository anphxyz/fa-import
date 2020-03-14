/**
 * C550_MODEL
 * @author Linhnc - 24/11/2017
 */
'use strict'
const Model = require('./../model')

module.exports = class C550_MODEL extends Model {
  constructor() {
    super()
  }

 /**
   * -- danh sach cac loai dich vu (TYP)
   */
  _listOfTabC550(req_PARAM, callback) {
    const procName = this.SYNONYM.C2017_CUR + 'ListOfTabC550'
    this.oracleUtilModel._callProcerdure(procName, [], callback)
  }

}