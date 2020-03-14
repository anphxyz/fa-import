/**
 * @author Anph - 21/11/2017
*/

'use strict'
const oracledb = require('oracledb')

const NUM_ROWS = 50  // number of rows to return from each call to getRows()

module.exports = class OracleUtilModel {
  constructor() { }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  _callProcerdureUsePromise(procName, paramArray) {
    return new Promise((resolve, reject) => {


      log.info(`\x1b[32m ---FACILIO callProcerdure-->${procName}(${JSON.stringify(paramArray).replace(/([\[\]])/g, '')}) \x1b[0m`);

      let self = this
      //1. get connection
      db_oracle.getConnection((err, connection) => {
        console.time(procName)
        if (err) {//1.1 catch error
          reject({ status: 'error', elements: err })
          log.info('1.1 catch error:', err)
          console.timeEnd(procName)
        } else {
          //2. build query
          let objQuery = self.buidQBProcQuery(procName, paramArray)
          // log.info("\x1b[35m_objQuery:", JSON.stringify(objQuery), '\x1b[0m')
          //3. excute query

          oracledb.fetchAsString = [oracledb.CLOB]//read clob as String

          connection.execute(objQuery.query, objQuery.bindvars, (err, rs) => {
            if (err) {//3.1 catch error
              reject({ status: 'error', elements: err })
              log.info('3.1 catch error:', err)
              console.timeEnd(procName)
              connection.close()
            } else {
              // log.info("__return fieldName:" + JSON.stringify(rs.outBinds.CURSOR.metaData))
              //4. fetching data from result
              self.fetchRowsFromRS(connection, rs.outBinds[objQuery.outname], (err, rs) => {
                if (err) {//4.1 catch error
                  reject({ status: 'error', elements: err })
                  log.info('4.1 catch error:', err)
                  //5. return result
                } else resolve({ status: 'success', elements: rs })
                console.timeEnd(procName)
              })
            }
          })
        }
      })
    })
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  _callProcerdure(procName, paramArray, callback, targetFeild = null) {

    log.info(`\x1b[32m ---FACILIO callProcerdure-->${procName}(${JSON.stringify(paramArray).replace(/([\[\]])/g, '')}) \x1b[0m`);

    let self = this
    //1. get connection
    db_oracle.getConnection((err, connection) => {
      console.time(procName)
      if (err) {//1.1 catch error
        callback({ status: 'error', elements: err })
        log.info('1.1 catch error:', err)
        console.timeEnd(procName)
      } else {
        //2. build query
        let objQuery = self.buidQBProcQuery(procName, paramArray)
        // log.info("\x1b[35m_objQuery:", JSON.stringify(objQuery), '\x1b[0m')
        //3. excute query

        oracledb.fetchAsString = [oracledb.CLOB]//read clob as String

        connection.execute(objQuery.query, objQuery.bindvars, (err, rs) => {
          if (err) {//3.1 catch error
            callback({ status: 'error', elements: err })
            log.info('3.1 catch error:', err)
            console.timeEnd(procName)
            connection.close()
          } else {
            // log.info("__return fieldName:" + JSON.stringify(rs.outBinds.CURSOR.metaData))
            //4. fetching data from result
            self.fetchRowsFromRS(connection, rs.outBinds[objQuery.outname], (err, rs) => {
              if (err) {//4.1 catch error
                callback({ status: 'error', elements: err })
                log.info('4.1 catch error:', err)
                //5. return result
              } else callback({ status: 'success', elements: rs })
              console.timeEnd(procName)
            })
          }
        })
      }
    })
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  _callFunctionWithCursor(funcName, paramArray, callback) {
    log.info(`\x1b[32m -FACILIO callFunctionWithCursor-->${funcName}(${JSON.stringify(paramArray).replace(/([\[\]])/g, '')}) \x1b[0m`);
    let self = this
    //1. get connection
    db_oracle.getConnection((err, connection) => {
      console.time(funcName)
      if (err) {//1.1 catch error
        callback({ status: 'error', elements: err })
        log.info('1.1 catch error:', err)
        console.timeEnd(funcName)
      } else {
        //2. build query
        let objQuery = self.buidQBFncQueryWithCursor(funcName, paramArray)
        // Custom out with NUMBER
        objQuery.bindvars[objQuery.ret] = { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
        // log.info("\x1b[35m_objQuery:", JSON.stringify(objQuery), '\x1b[0m')
        //3. excute query
        connection.execute(objQuery.query, objQuery.bindvars, (err, rs) => {
          if (err) {//3.1 catch error
            callback({ status: 'error', elements: err })
            log.info('3.1 catch error:', err)
            console.timeEnd(funcName)
          } else {
            // log.info("__return fieldName:" + JSON.stringify(!!rs.outBinds.CURSOR ? rs.outBinds.CURSOR.metaData : 'No data!'))
            //4. fetching data from result
            self.fetchRowsFromRS(connection, rs.outBinds[objQuery.outname], (err, rs) => {
              if (err) {//4.1 catch error
                callback({ status: 'error', elements: err })
                log.info('4.1 catch error:', err)
              } else //5. return result
                callback({ status: 'success', elements: rs })
              console.timeEnd(funcName)
            })
          }
        })
      }
    })
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  _callFunctionWithOutNumber(funcName, paramArray, callback) {
    log.info(`\x1b[32m -FACILIO callFunctionWithCursor-->${funcName}(${JSON.stringify(paramArray).replace(/([\[\]])/g, '')}) \x1b[0m`);
    let self = this
    //1. get connection
    db_oracle.getConnection((err, connection) => {
      console.time(funcName)
      if (err) {//1.1 catch error
        callback({ status: 'error', elements: err })
        log.info('1.1 catch error:', err)
        console.timeEnd(funcName)
      } else {
        //2. build query
        let objQuery = self.buidQBFncQueryWithOutNumber(funcName, paramArray)
        // Custom out with NUMBER
        objQuery.bindvars[objQuery.ret] = { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
        // log.info("\x1b[35m_objQuery:", JSON.stringify(objQuery), '\x1b[0m')
        //3. excute query
        connection.execute(objQuery.query, objQuery.bindvars, (err, rs) => {
          if (err) {//3.1 catch error
            callback({ status: 'error', elements: err })
            log.info('3.1 catch error:', err)
            console.timeEnd(funcName)
          } else {
            // log.info("__return fieldName:" + JSON.stringify(!!rs.outBinds.CURSOR ? rs.outBinds.CURSOR.metaData : 'No data!'))
            log.info(`${funcName}__return:` + JSON.stringify(rs))
            callback({
              status: 'success',
              elements: {
                output1: rs.outBinds[objQuery.outname1],
                output2: rs.outBinds[objQuery.outname2],
                return: rs.outBinds[objQuery.ret]
              }
            })
            console.timeEnd(funcName)
          }
        })
      }
    })
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  _callFunctionUsePromise(funcName, paramArray) {
    return new Promise((resolve, reject) => {

      log.info(`\x1b[32m -FACILIO callFunction-->${funcName}(${JSON.stringify(paramArray).replace(/([\[\]])/g, '')}) \x1b[0m`);
      let self = this
      //1. get connection
      db_oracle.getConnection((err, connection) => {
        console.time(funcName)
        if (err) {//1.1 catch error
          reject({ status: 'error', elements: err })
          log.info('1.1 catch error:', err)
          console.timeEnd(funcName)
        } else {
          //2. build query
          let objQuery = self.buidQBFncQuery(funcName, paramArray)
          // Custom out with NUMBER
          objQuery.bindvars[objQuery.outname] = { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
          // log.info("\x1b[35m_objQuery:", JSON.stringify(objQuery), '\x1b[0m')
          //3. excute query
          connection.execute(objQuery.query, objQuery.bindvars, (err, rs) => {
            if (err) {//3.1 catch error
              reject({ status: 'error', elements: err })
              log.info('3.1 catch error:', err)
              console.timeEnd(funcName)
            } else {
              //4. return result
              log.info(`${funcName}__return:` + JSON.stringify(rs))
              resolve({ status: 'success', elements: rs.outBinds[objQuery.outname] })
              console.timeEnd(funcName)
            }
            connection.close()
          })
        }
      })
    })
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  _callFunction(funcName, paramArray, callback) {
    log.info(`\x1b[32m -FACILIO callFunction-->${funcName}(${JSON.stringify(paramArray).replace(/([\[\]])/g, '')}) \x1b[0m`);
    let self = this
    //1. get connection
    db_oracle.getConnection((err, connection) => {
      console.time(funcName)
      if (err) {//1.1 catch error
        callback({ status: 'error', elements: err })
        log.info('1.1 catch error:', err)
        console.timeEnd(funcName)
      } else {
        //2. build query
        let objQuery = self.buidQBFncQuery(funcName, paramArray)
        // Custom out with NUMBER
        objQuery.bindvars[objQuery.outname] = { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
        // log.info("\x1b[35m_objQuery:", JSON.stringify(objQuery), '\x1b[0m')
        //3. excute query
        connection.execute(objQuery.query, objQuery.bindvars, (err, rs) => {
          if (err) {//3.1 catch error
            callback({ status: 'error', elements: err })
            log.info('3.1 catch error:', err)
            console.timeEnd(funcName)
          } else {
            //4. return result
            log.info(`${funcName}__return:` + JSON.stringify(rs))
            callback({ status: 'success', elements: rs.outBinds[objQuery.outname] })
            console.timeEnd(funcName)
          }
          connection.close()
        })
      }
    })
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
	/**
		* Tạo string param và [] bind data
		* @param params
		* @returns {string}
		*/

  buildDataQueryGeneral(params) {
    let paramStr = "",
      count = params.length,
      bindvars = {}
    for (let i = 0; i < count; i++) {
      let nameraw = 'par' + i
      paramStr += ':' + nameraw + (i !== count - 1 ? ', ' : '')
      // if (Object.isObj(params[i]))//de-stupid name
      //   bindvars[params[i].name] = params[i]
      // else
      bindvars[nameraw] = params[i]
    }
    return { paramStr, bindvars }
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /**
		* Tạo câu query cho Function có out param (Chuẩn QueenB)
		* @param fncName
		* @param params
		* @returns {{query: string, bindvars: ({}|*), outname: string}}
		*/
  buidQBFncQueryWithCursor(fncName, params) {
    let outname = 'CURSOR',
      ret = 'ret',
      obj = this.buildDataQueryGeneral(params),
      noParamQuery = `BEGIN :${ret} := ${fncName}(:${outname}); END;`,
      existedParamQuery = `BEGIN :${ret} := ${fncName}(:${outname}, ${obj.paramStr}); END;`

    obj.bindvars.ret = { dir: oracledb.BIND_OUT, type: oracledb.OBJECT }
    obj.bindvars[outname] = { type: oracledb.CURSOR, dir: oracledb.BIND_OUT }
    return {
      query: params.length > 0 ? existedParamQuery : noParamQuery,
      bindvars: obj.bindvars,
      outname, ret
    }
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /**
		* Tạo câu query cho Function có out param (Chuẩn QueenB)
		* @param fncName
		* @param params
		* @returns {{query: string, bindvars: ({}|*), outname: string}}
		*/
  buidQBFncQueryWithOutNumber(fncName, params) {//2out 1vs2
    let ret = 'ret',
      outname1 = 'outname1',
      outname2 = 'outname2',
      obj = this.buildDataQueryGeneral(params),
      noParamQuery = `BEGIN :${ret} := ${fncName}(:${outname1}, :${outname2}); END;`,
      existedParamQuery = `BEGIN :${ret} := ${fncName}(:${outname1}, :${outname2}, ${obj.paramStr}); END;`

    obj.bindvars.ret = { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
    obj.bindvars.outname1 = { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
    obj.bindvars.outname2 = { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
    return {
      query: params.length > 0 ? existedParamQuery : noParamQuery,
      bindvars: obj.bindvars,
      outname,
      ret
    }
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/

  /**
		* Tạo câu query cho Function (Chuẩn QueenB)
		* @param fncName
		* @param params
		* @returns {{query: string, bindvars: ({}|*), outname: string}}
		*/
  buidQBFncQuery(fncName, params) {
    let outname = 'ret',
      obj = this.buildDataQueryGeneral(params)
    obj.bindvars[outname] = { dir: oracledb.BIND_OUT, type: oracledb.OBJECT }
    return {
      query: `BEGIN :${outname} := ${fncName}(${obj.paramStr}); END;`,
      bindvars: obj.bindvars,
      outname
    }
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
	/**
		* Tạo câu query cho Procedure (Chuẩn QueenB)
		* @param procname
		* @param params
		* @returns {{query: string, bindvars: ({}|*), outname: string}}
		*/
  buidQBProcQuery(procname, params) {
    let outname = 'CURSOR',
      obj = this.buildDataQueryGeneral(params),
      noParamQuery = `BEGIN ${procname}(:${outname} ); END;`,
      existedParamQuery = `BEGIN ${procname}(:${outname}, ${obj.paramStr}); END;`

    obj.bindvars[outname] = { type: oracledb.CURSOR, dir: oracledb.BIND_OUT }
    return {
      query: params.length > 0 ? existedParamQuery : noParamQuery, //BEGIN listOfTabB050(:CURSOR, :par0, :par1, :par3,...); END;
      bindvars: obj.bindvars,// {par0 => '',par1=>'' }
      outname
    }
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
	/**
		*
		* @param connection
		* @param resultSet
		* @param callback
		* @param dataTemp
		*
		* Ex Metadata : {"metaData":[{"name":"PV170"},{"name":"VD171"},{"name":"VV172"},{"name":"VD173"},{"name":"VV174"},{"name":"VN175"},{"name":"VV176"},{"name":"VD177"},{"name":"VV178"},{"name":"VD179"},{"name":"FO100"},{"name":"FP100"},{"name":"FO100D"},{"name":"VL197"},{"name":"VL198"},{"name":"ROWSS"}]}
		*/
  fetchRowsFromRS(connection, resultSet, callback, closeConn = true, dataTemp = []) {
    let self = this
    if (!!resultSet)
      resultSet.getRows(NUM_ROWS, (err, rows) => {
        if (err) {
          log.info(err)
          self.closeResultSetAndConnection(connection, resultSet, closeConn) // always close the result set
          callback(err, dataTemp)
        } else {
          if (rows.length === 0) {// 0 rows, or no more rows
            self.closeResultSetAndConnection(connection, resultSet, closeConn) // always close the result set
            callback(err, dataTemp)
            log.info("\x1b[32m-->fetchRowsFromRS(): Got " + dataTemp.length + " rows\x1b[0m")
          } else if (rows.length > 0) {
            // Buid object result
            rows.forEach(item => { // Array
              let objItem = {}
              item.forEach((v, idx) => {
                objItem[resultSet.metaData[idx].name] = v
              })
              dataTemp.push(objItem)
            })
            self.fetchRowsFromRS(connection, resultSet, callback, closeConn, dataTemp)
          }
        }
      })
    else callback('_no_data_found')
  }
	/**
     * Đóng connection và resultset
     * @param connection
     * @param resultSet
     */
  closeResultSetAndConnection(connection, resultSet, closeConn) {
    if (resultSet != null) {
      resultSet.close(function (err) {
        if (err) {
          console.error(err.message);
        }
        if (closeConn) {
          connection.close();
        }
      }); // always close the result set
    } else if (closeConn) {
      connection.close();

    }
  }
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
  /***********************************************************************************************************************************************/
}