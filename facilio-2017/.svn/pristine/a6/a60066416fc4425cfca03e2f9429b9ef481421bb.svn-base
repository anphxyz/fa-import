/**
 * Q400_MODEL
 * @author Toailq - 29/11/2017
 */

'use strict'
const Model = require('./../model')

module.exports = class Q400_MODEL extends Model {
    constructor() {
        super()
    }
    /**
    * danh sach nhung nhom nguoi su dung
    * @param pnFH000  -- danh sach nhung chuc nang su dung thuoc nhom chuc nang FQ300
    * @param pnFQ400
    * @param pnFQ300
    */
    _listOfTabQ400_p4(req_PARAM, callback) {
        const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ400",
            pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
            pnFQ400 = !!req_PARAM.pnFQ400 ? +req_PARAM.pnFQ400 : 0,
            pnFQ300 = !!req_PARAM.pnFQ300 ? +req_PARAM.pnFQ300 : 0,
            pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
        this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ400, pnFQ300, pvLOGIN], callback)
    }
    /**
    * danh sach nhung chuc nang su dung chua co trong nhom quyen Q350
    * @param pnFH000  -- danh sach nhung chuc nang su dung thuoc nhom chuc nang FQ300
    * @param pnFQ350
    */
    _listOfTabQ400_p2(req_PARAM, callback) {
        const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ400",
            pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
            pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0
        this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350], callback)
    }
    /**
    * ListOfTabQ400
    * @param pvQV101 
    */
    _listOfTabQ400_p1(req_PARAM, callback) {
        const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ400",
            pvQV101 = !!req_PARAM.pvQV101 ? +req_PARAM.pvQV101 : null
        this.oracleUtilModel._callProcerdure(procName, [pvQV101], callback)
    }

}