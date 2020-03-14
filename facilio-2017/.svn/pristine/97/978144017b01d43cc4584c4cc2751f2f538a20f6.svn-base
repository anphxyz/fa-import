/**
 * @author Anph - 21/11/2017
*/
'use strict'
const UtilModel = require('./utilModel')
module.exports = class MySQLUtilModel {

    /**
     * Convert mảng sang chuỗi query
     * @param params
     * @returns {string}
     */
    paramToString(params) {
        return UtilModel.paramToString(params)
    }

    /**
     * Tạo câu query cho Function (Chuẩn QueenB)
     * @param fncName
     * @param params
     * @returns {string}
     */
    buidQBFncQuery(fncName, params) {
        return `SELECT ${fncName}(${self.paramToString(params)}) AS VAL`
    }

    /**
     * Tạo câu query cho Procedure (Chuẩn QueenB)
     * @param fncName
     * @param params
     * @returns {string}
     */
    buidQBProcQuery(fncName, params) {
        return `CALL ${fncName}(${self.paramToString(params)})`
    }

    /**
     * Lấy dữ liệu dành cho Function
     * @param result
     * @returns {*}
     */
    getResultOfFnc(result) {
        if (result.length > 0) {
            return result[0]['VAL']
        } else {
            return null
        }
    }

    /**
     * Lấy dữ liệu dành cho Procedure
     * @param result
     * @returns {*}
     */
    getResultOfProc(result) {
        if (result.length > 0) {
            return result[0]
        } else {
            return result
        }
    }
}
