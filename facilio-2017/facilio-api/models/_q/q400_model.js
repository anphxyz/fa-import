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
    _listOfTabQ400_p4(params, callback) {
        const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ400",
            pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
            pnFQ400 = !!params.pnFQ400 ? +params.pnFQ400 : 0,
            pnFQ300 = !!params.pnFQ300 ? +params.pnFQ300 : 0,
            pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
        this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ400, pnFQ300, pvLOGIN], callback)
    }
    /**
    * danh sach nhung chuc nang su dung chua co trong nhom quyen Q350
    * @param pnFH000  -- danh sach nhung chuc nang su dung thuoc nhom chuc nang FQ300
    * @param pnFQ350
    */
    _listOfTabQ400_p2(params, callback) {
        const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ400",
            pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
            pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0
        this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFQ350], callback)
    }
    /**
    * ListOfTabQ400
    * @param pvQV101 
    */
    _listOfTabQ400_p1(params, callback) {
        const procName = this.SYNONYM.Q2017_CUR + "ListOfTabQ400",
            pvQV101 = !!params.pvQV101 ? +params.pvQV101 : null
        this.oracleUtilModel._callProcerdure(procName, [pvQV101], callback)
    }

}