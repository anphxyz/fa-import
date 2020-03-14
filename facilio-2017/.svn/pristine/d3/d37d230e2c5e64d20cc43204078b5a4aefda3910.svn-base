/**
 * @author Anph - 21/11/2017
*/
const oracledb = require('oracledb'),
    config = require('../config/Config')

oracledb.Promise = global.Promise


console.time('oracledb.createPool')
oracledb.createPool({
    user: config.dbOracle.user,
    password: config.dbOracle.password,
    connectString: config.dbOracle.connectString,
    // Default values shown below
    // externalAuth: false, // whether connections should be established using External Authentication
    poolMax: 2000, // maximum size of the pool. Increase UV_THREADPOOL_SIZE if you increase poolMax
    // poolMin: 0, // start with no connections; let the pool shrink completely
    // poolIncrement: 1, // only grow the pool by one connection at a time
    poolTimeout: 60, // terminate connections that are idle in the pool for 60 seconds
    // poolPingInterval: 60, // check aliveness of connection if in the pool for 60 seconds
    // queueRequests: true, // let Node.js queue new getConnection() requests if all pool connections are in use
    // queueTimeout: 60000, // terminate getConnection() calls in the queue longer than 60000 milliseconds
    // poolAlias: 'myalias' // could set an alias to allow access to the pool via a name
    // stmtCacheSize: 30 // number of statements that are cached in the statement cache of each connection
}, (err, pool) => {
    if (err) {
        console.error("createPool() error: " + err.message)
    }
    console.timeEnd('oracledb.createPool')
})

module.exports = exports = oracledb