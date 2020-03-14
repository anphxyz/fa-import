/**
 * * ADM_MODEL
 * @author Anph - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class ADM_MODEL extends Model {
  constructor() {
    super()
  }

  /**
  * Check Login 
  * @param pvQV101 --  Login
  * @param pvQV102 --  pwd mit MD5 
  */
  _checkUserLogin_p2(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CheckUserLogin',
      pvQV101 = !!req_PARAM.pvQV101 ? req_PARAM.pvQV101 : null,
      pvQV102 = !!req_PARAM.pvQV102 ? req_PARAM.pvQV102 : null

    this.oracleUtilModel._callFunction(funcName, [pvQV101, pvQV102], callback)
  }
  /**
  * Check Login 
  * @param pvQV101 -- QV101: Login
  * @param pvQV102 -- QV102: pwd mit MD5 
  * @param pnFH000  
  */
  _checkUserLogin_p3(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CheckUserLogin',
      pvQV101 = !!req_PARAM.pvQV101 ? req_PARAM.pvQV101 : null,
      pvQV102 = !!req_PARAM.pvQV102 ? req_PARAM.pvQV102 : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0

    this.oracleUtilModel._callFunctionWithCursor(funcName, [pvQV101, pvQV102, pnFH000], callback)
  }
  /**
  * CheckUserLoginHT
  * @param pvQV101 -- QV101: Login
  * @param pvQV102 -- QV102: pwd mit MD5 
  * @param pnFH000
*/
  _checkUserLoginHT(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CheckUserLoginHT',
      pvQV101 = !!req_PARAM.pvQV101 ? req_PARAM.pvQV101 : null,
      pvQV102 = !!req_PARAM.pvQV102 ? req_PARAM.pvQV102 : null,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0

    this.oracleUtilModel._callFunctionWithCursor(funcName, [pvQV101, pvQV102, pnFH000], callback)
  }
  /**
   * @param pnFN100
   * @param pnFH000
   * @param pvLOGIN
   */
  _createDataQ050(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ050',
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFN100, pnFH000, pvLOGIN], callback)

  }
  /**
   * -- tao nguoi su dung chuong trinh
   * @param pnFN100   -- ID cua nhan vien
   * @param pnFC4501  -- priority A
   * @param pnFC4502  -- priority B
   * @param pnFC4503  -- priority C
   * @param pnFC5001  -- status open
   * @param pnFC5002  -- status running
   * @param pnFC5003  -- status close
   * @param pvFC550   -- type (E, M, N)
   * @param pvQV101   -- user login
   * @param pvQV102   -- PWD -- MD5
   * @param pdQD103   -- ngay bat dau co hieu luc
   * @param pdQD104   -- ngay ket thuc, het hieu luc
   * @param pvQV105   --  email
   * @param pvQV106   -- Mobile
   * @param pvQV107   -- tel
   * @param pvQV108   -- fax
   * @param pvQV109   -- phuong thuc lien lac, bao tin
   * @param pnQN110
   * @param pnQN111
   * @param pnQN112
   * @param pnQN113
   * @param pvQV114
   * @param pvQV115
   * @param pvLOGIN
  */

  _stornoTabQ050(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoTabQ050',
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFC4501 = !!req_PARAM.pnFC4501 ? +req_PARAM.pnFC4501 : 0,
      pnFC4502 = !!req_PARAM.pnFC4502 ? +req_PARAM.pnFC4502 : 0,
      pnFC4503 = !!req_PARAM.pnFC4503 ? +req_PARAM.pnFC4503 : 0,
      pnFC5001 = !!req_PARAM.pnFC5001 ? +req_PARAM.pnFC5001 : 0,
      pnFC5002 = !!req_PARAM.pnFC5002 ? +req_PARAM.pnFC5002 : 0,
      pnFC5003 = !!req_PARAM.pnFC5003 ? +req_PARAM.pnFC5003 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvQV101 = !!req_PARAM.pvQV101 ? req_PARAM.pvQV101 : null,
      pvQV102 = !!req_PARAM.pvQV102 ? req_PARAM.pvQV102 : null,
      pdQD103 = !!req_PARAM.pdQD103 ? req_PARAM.pdQD103 : null,
      pdQD104 = !!req_PARAM.pdQD104 ? req_PARAM.pdQD104 : null,
      pvQV105 = !!req_PARAM.pvQV105 ? req_PARAM.pvQV105 : null,
      pvQV106 = !!req_PARAM.pvQV106 ? req_PARAM.pvQV106 : null,
      pvQV107 = !!req_PARAM.pvQV107 ? req_PARAM.pvQV107 : null,
      pvQV108 = !!req_PARAM.pvQV108 ? req_PARAM.pvQV108 : null,
      pvQV109 = !!req_PARAM.pvQV109 ? req_PARAM.pvQV109 : null,
      pnQN110 = !!req_PARAM.pnQN110 ? +req_PARAM.pnQN110 : 0,
      pnQN111 = !!req_PARAM.pnQN111 ? +req_PARAM.pnQN111 : 0,
      pnQN112 = !!req_PARAM.pnQN112 ? +req_PARAM.pnQN112 : 0,
      pnQN113 = !!req_PARAM.pnQN113 ? +req_PARAM.pnQN113 : 0,
      pvQV114 = !!req_PARAM.pvQV114 ? req_PARAM.pvQV114 : null,
      pvQV115 = !!req_PARAM.pvQV115 ? req_PARAM.pvQV115 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFN100, pnFC4501, pnFC4502, pnFC4503, pnFC5001, pnFC5002, pnFC5003, pvFC550, pvQV101, pvQV102, pdQD103, pdQD104, pvQV105, pvQV106, pvQV107, pvQV108, pvQV109, pnQN110, pnQN111, pnQN112, pnQN113, pvQV114, pvQV115, pvLOGIN], callback)
  }

  /**
   * -- tao nguoi su dung chuong trinh
   * @param pnFN100   -- ID cua nhan vien
   * @param pnFC4501  -- priority A
   * @param pnFC4502  -- priority B
   * @param pnFC4503  -- priority C
   * @param pnFC5001  -- status open
   * @param pnFC5002  -- status running
   * @param pnFC5003  -- status close
   * @param pvFC550   -- type (E, M, N)
   * @param pvQV101   -- user login
   * @param pvQV102   -- PWD -- MD5
   * @param pdQD103   -- ngay bat dau co hieu luc
   * @param pdQD104   -- ngay ket thuc, het hieu luc
   * @param pvQV105   -- email
   * @param pvQV106   -- Mobile
   * @param pvQV107   -- tel
   * @param pvQV108   -- fax
   * @param pvQV109   -- phuong thuc lien lac, bao tin
   * @param pnQN110
   * @param pnQN111
   * @param pnQN112
   * @param pnQN113
   * @param pvQV114
   * @param pvQV115
   * @param pvLOGIN
   * 
   * 
  */
  _createDataQ100(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ100',
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFC4501 = !!req_PARAM.pnFC4501 ? +req_PARAM.pnFC4501 : 0,
      pnFC4502 = !!req_PARAM.pnFC4502 ? +req_PARAM.pnFC4502 : 0,
      pnFC4503 = !!req_PARAM.pnFC4503 ? +req_PARAM.pnFC4503 : 0,
      pnFC5001 = !!req_PARAM.pnFC5001 ? +req_PARAM.pnFC5001 : 0,
      pnFC5002 = !!req_PARAM.pnFC5002 ? +req_PARAM.pnFC5002 : 0,
      pnFC5003 = !!req_PARAM.pnFC5003 ? +req_PARAM.pnFC5003 : 0,
      pvFC550 = !!req_PARAM.pvFC550 ? req_PARAM.pvFC550 : null,
      pvQV101 = !!req_PARAM.pvQV101 ? req_PARAM.pvQV101 : null,
      pvQV102 = !!req_PARAM.pvQV102 ? req_PARAM.pvQV102 : null,
      pdQD103 = !!req_PARAM.pdQD103 ? new Date(req_PARAM.pdQD103) : new Date(),
      pdQD104 = !!req_PARAM.pdQD104 ? new Date(req_PARAM.pdQD104) : new Date(),
      pvQV105 = !!req_PARAM.pvQV105 ? req_PARAM.pvQV105 : null,
      pvQV106 = !!req_PARAM.pvQV106 ? req_PARAM.pvQV106 : null,
      pvQV107 = !!req_PARAM.pvQV107 ? req_PARAM.pvQV107 : null,
      pvQV108 = !!req_PARAM.pvQV108 ? req_PARAM.pvQV108 : null,
      pvQV109 = !!req_PARAM.pvQV109 ? req_PARAM.pvQV109 : null,
      pnQN110 = !!req_PARAM.pnQN110 ? +req_PARAM.pnQN110 : 0,
      pnQN111 = !!req_PARAM.pnQN111 ? +req_PARAM.pnQN111 : 0,
      pnQN112 = !!req_PARAM.pnQN112 ? +req_PARAM.pnQN112 : 0,
      pnQN113 = !!req_PARAM.pnQN113 ? +req_PARAM.pnQN113 : 0,
      pvQV114 = !!req_PARAM.pvQV114 ? req_PARAM.pvQV114 : null,
      pvQV115 = !!req_PARAM.pvQV115 ? req_PARAM.pvQV115 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFN100, pnFC4501, pnFC4502, pnFC4503, pnFC5001, pnFC5002, pnFC5003, pvFC550, pvQV101, pvQV102, pdQD103, pdQD104, pvQV105, pvQV106, pvQV107, pvQV108, pvQV109, pnQN110, pnQN111, pnQN112, pnQN113, pvQV114, pvQV115, pvLOGIN], callback)
  }
  /**
   * thay ddoi mat khau
  * @param pnFQ100
  * @param pvQV101
  * @param pvQV102N
  * @param pvQV102A
  * @param pvLOGIN
 */
  _changeTabQ100(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'ChangeTabQ100',
      pnFQ100 = !!req_PARAM.pnFQ100 ? +req_PARAM.pnFQ100 : 0,
      pvQV101 = !!req_PARAM.pvQV101 ? req_PARAM.pvQV101 : null,
      pvQV102N = !!req_PARAM.pvQV102N ? req_PARAM.pvQV102N : null,
      pvQV102A = !!req_PARAM.pvQV102A ? req_PARAM.pvQV102A : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFQ100, pvQV101, pvQV102N, pvQV102A, pvLOGIN], callback)
  }
  /**
   * -- Tao moi moi lien quan giua nhom lam viec va chuc nang cong viec
   * @param pnFH000 
   * @param pnFQ350 -- ID cua nhom lam viec
   * @param pnFQ400 -- ID cua chuc nang cong viec
   * @param pvLOGIN
  */
  _createDataQ150_p4(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ150',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ400 = !!req_PARAM.pnFQ400 ? +req_PARAM.pnFQ400 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFQ350, pnFQ400, pvLOGIN], callback)
  }
  /**
  * -- Tao moi moi lien quan giua nhom lam viec va chuc nang cong viec
  * @param pnFQ350 -- ID cua nhom lam viec
  * @param pnFQ400 -- ID cua chuc nang cong viec
  * pvLOGIN
 */
  _createDataQ150_p3(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ150',
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ400 = !!req_PARAM.pnFQ400 ? +req_PARAM.pnFQ400 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFQ350, pnFQ400, pvLOGIN], callback)
  }
  /**
   * -- sua ddoi moi lien quan giua nhom lam viec va chuc nang cong viec
   * @param pnFH000 
   * @param pnFQ350 -- ID cua nhom lam viec
   * @param pnFQ400 -- ID cua chuc nang cong viec
   * @param pvLOGIN
  */
  _stornoDataQ150(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ150',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ400 = !!req_PARAM.pnFQ400 ? +req_PARAM.pnFQ400 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFQ350, pnFQ400, pvLOGIN], callback)
  }
  /**
   * -- Tao moi danh sach cac chuc nang cua nguoi su dung
   * @param pnFH000
   * @param pnFN100 -- ID thuoc nhan vien su dung
   * @param pnFQ350 -- ID cua nhom lam viec
   * @param pnFQ300
   * @param pnFQ400 -- ID cua chuc nang cong viec
   * @param pnQN176 -- quyen dduoc chon hay ko (tren giao dien administration)
   * @param pvQV177
   * @param pvQV178
   * @param pvQV179
   * @param pvLOGIN
  */
  _createDataQ175(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ175',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ300 = !!req_PARAM.pnFQ300 ? +req_PARAM.pnFQ300 : 0,
      pnFQ400 = !!req_PARAM.pnFQ400 ? +req_PARAM.pnFQ400 : 0,
      pnQN176 = !!req_PARAM.pnQN176 ? +req_PARAM.pnQN176 : 0,
      pvQV177 = !!req_PARAM.pvQV177 ? req_PARAM.pvQV177 : null,
      pvQV178 = !!req_PARAM.pvQV178 ? req_PARAM.pvQV178 : null,
      pvQV179 = !!req_PARAM.pvQV179 ? req_PARAM.pvQV179 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFN100, pnFQ350, pnFQ300, pnFQ400, pnQN176, pvQV177, pvQV178, pvQV179, pvLOGIN], callback)
  }
  /**
   * StornoDataQ175
   * @param pnFH000
   * @param pnFQ350
   * @param pnFQ400
   * @param pnFQ100
   * @param pvLOGIN
  */
  _stornoDataQ175(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ175',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ400 = !!req_PARAM.pnFQ400 ? +req_PARAM.pnFQ400 : 0,
      pnFQ100 = !!req_PARAM.pnFQ100 ? +req_PARAM.pnFQ100 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFQ350, pnFQ400, pnFQ100, pvLOGIN], callback)
    this.oracleUtilModel._callFunction(funcName, [], callback)
  }
  /**
   * -- Them nguoi su dung vao nhom lam viec
   * @param pnFH000 
   * @param pnFQ350 -- ID cua nhom lam viec
   * @param pnFQ100 -- ID cua nhan vien lam viec
   * @param pvLOGIN
  */
  _createDataQ200_p4(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ200',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ100 = !!req_PARAM.pnFQ100 ? +req_PARAM.pnFQ100 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFQ350, pnFQ100, pvLOGIN], callback)
  }
  /**
  * -- Them nguoi su dung vao nhom lam viec
  * @param pnFQ350 -- ID cua nhom lam viec
  * @param pnFQ100 -- ID cua nhan vien lam viec
  * @param pvLOGIN
 */
  _createDataQ200_p3(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ200',
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ100 = !!req_PARAM.pnFQ100 ? +req_PARAM.pnFQ100 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFQ350, pnFQ100, pvLOGIN], callback)
  }
  /**
   * -- huy nguoi su dung FN100 thuoc nhom quyen Q350
   * @param pnFH000
   * @param pnFQ350 -- ID cua nhom lam viec
   * @param pnFQ100 -- ID cua nhan vien lam viec
   * @param pvLOGIN
  */
  _stornoDataQ200(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ200',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFQ350 = !!req_PARAM.pnFQ350 ? +req_PARAM.pnFQ350 : 0,
      pnFQ100 = !!req_PARAM.pnFQ100 ? +req_PARAM.pnFQ100 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFQ350, pnFQ100, pvLOGIN], callback)
  }
  /**
   * 
   * 
   * 
  */
  // TODO : trong data thấy hàm Q275 đã comment lại rồi
  // _reactiTabQ275(req_PARAM, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'ReactiTabQ275',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _CreateDataQ275(req_PARAM, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ275',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _StornoDataQ275(req_PARAM, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ275',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * -- Tao moi nhom quyen su dung
   * @param pnPQ300
   * @param pvQV301 -- dien giai
   * @param pvQV302 -- dien giai dday ddu
   * @param pvLOGIN
  */
  _createDataQ300(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ300',
      pnPQ300 = !!req_PARAM.pnPQ300 ? +req_PARAM.pnPQ300 : 0,
      pvQV301 = !!req_PARAM.pvQV301 ? req_PARAM.pvQV301 : null,
      pvQV302 = !!req_PARAM.pvQV302 ? req_PARAM.pvQV302 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnPQ300, pvQV301, pvQV302, pvLOGIN], callback)
  }
  /**
   * StornoDataQ300
   * @param pnPQ300
   * @param pvLOGIN
  */
  _stornoDataQ300(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ300',
      pnPQ300 = !!req_PARAM.pnPQ300 ? +req_PARAM.pnPQ300 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnPQ300, pvLOGIN], callback)
  }
  /**
   * -- Tao moi nhom quyen su dung
   * @param pnPQ350
   * @param pnFH000
   * @param pnFH200
   * @param pvQV351
   * @param pvLOGIN
  */
  _createDataQ350(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ350',
      pnPQ350 = !!req_PARAM.pnPQ350 ? +req_PARAM.pnPQ350 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFH200 = !!req_PARAM.pnFH200 ? +req_PARAM.pnFH200 : 0,
      pvQV351 = !!req_PARAM.pvQV351 ? req_PARAM.pvQV351 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnPQ350, pnFH000, pnFH200, pvQV351, pvLOGIN], callback)
  }
  /**
   * -- xoa nhom quyen
   * @param pnPQ350
  */
  _stornoDataQ350(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ350',
      pnPQ350 = !!req_PARAM.pnPQ350 ? +req_PARAM : 0
    this.oracleUtilModel._callFunction(funcName, [pnPQ350], callback)
  }
  /**
   * -- Tao moi quyen su dung
   * @param pnPQ400
   * @param pvQV401
   * @param pvQV402
   * @param pnFQ300
   * @param pnFH000
   * @param pvLOGIN
  */
  _createDataQ400(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ400',
      pnPQ400 = !!req_PARAM.pnPQ400 ? +req_PARAM.pnPQ400 : 0,
      pvQV401 = !!req_PARAM.pvQV401 ? req_PARAM.pvQV401 : null,
      pvQV402 = !!req_PARAM.pvQV402 ? req_PARAM.pvQV402 : null,
      pnFQ300 = !!req_PARAM.pnFQ300 ? +req_PARAM.pnFQ300 : 0,
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnPQ400, pvQV401, pvQV402, pnFQ300, pnFH000, pvLOGIN], callback)
  }
  /**
   * -- sao chep nhanh danh sach cac chuc nang va nhom chuc nang tu mot phan he sang mot phan he moi	
   * @param pnFH000A
   * @param pnFH000N
   * @param pvLOGIN
  */
  _copyDataOfQ400(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CopyDataOfQ400',
      pnFH000A = !!req_PARAM.pnFH000A ? +req_PARAM.pnFH000A : 0,
      pnFH000N = !!req_PARAM.pnFH000N ? +req_PARAM.pnFH000N : 0,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000A, pnFH000N, pvLOGIN], callback)
  }
  /**
   * StornoDataQ400
   * @param pnPQ400
  */
  _stornoDataQ400(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ400',
      pnPQ400 = !!req_PARAM.pnPQ400 ? +req_PARAM.pnPQ400 : 0
    this.oracleUtilModel._callFunction(funcName, [pnPQ400], callback)
  }
  /**
   * 
   * 
   * 
  */
  // _CreateDataQ450(req_PARAM, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ450',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _StornoDataQ450(req_PARAM, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ450',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _CreateDataQ550(req_PARAM, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ550',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _StornoDataQ550(req_PARAM, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ550',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * -- danh sach quyen su dung cua nhom
   * @param pnPQ350 --ID cua nhom lam viec
  */
  _execRechteListe(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'ExecRechteListe',
      pnPQ350 = !!req_PARAM.pnPQ350 ? req_PARAM.pnPQ350 : 0
    this.oracleUtilModel._callProcerdure(funcName, [pnPQ350], callback)
  }
  /**
   * -- CHUC NANG(Q400) <-> NHOM QUYEN(Q350) --> Q150
   * -- CA NHAN(N100) <-> NHOM QUYEN(Q350) --> Q200
   * -- ngan gon: ca nhan thuoc nhom quyen nao va nhom quyen ddo co nhung chuc nang gi
   * @param pvQV101 -- Login
   * @param pnPQ400
  */
  _canExecuteFunc(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CanExecuteFunc',
      pvQV101 = !!req_PARAM.pvQV101 ? req_PARAM.pvQV101 : null,
      pnPQ400 = !!req_PARAM.pnPQ400 ? +req_PARAM.pnPQ400 : 0
    this.oracleUtilModel._callFunction(funcName, [pvQV101, pnPQ400], callback)
  }
  /**
   * 
   * 
   * 
  */
  // _CreateDataQ750(req_PARAM, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ750',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _StornoDataQ750(req_PARAM, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ750',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * -- Tao du lieu thong so he thong
   * @param pvFQ800 -- ten viet tat cho thong so
   * @param pvFQ850 -- argument
   * @param pvFQ900 -- under argument
   * @param pvQV951 -- value
   * @param pvQV952 -- comments
   * @param pdQD953 -- begin date
   * @param pdQD954 -- end date
   * @param pvLOGIN
  */
  _createDataQ950(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ950',
      pvFQ800 = !!req_PARAM.pvFQ800 ? req_PARAM.pvFQ800 : null,
      pvFQ850 = !!req_PARAM.pvFQ850 ? req_PARAM.pvFQ850 : null,
      pvFQ900 = !!req_PARAM.pvFQ900 ? req_PARAM.pvFQ900 : null,
      pvQV951 = !!req_PARAM.pvQV951 ? req_PARAM.pvQV951 : null,
      pvQV952 = !!req_PARAM.pvQV952 ? req_PARAM.pvQV952 : null,
      pdQD953 = !!req_PARAM.pdQD953 ? req_PARAM.pdQD953 : null,
      pdQD954 = !!req_PARAM.pdQD954 ? req_PARAM.pdQD954 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pvFQ800, pvFQ850, pvFQ900, pvQV951, pvQV952, pdQD953, pdQD954, pvLOGIN], callback)
  }
  /**
   * StornoDataQ950
   * @param pvFQ800
   * @param pvFQ850
   * @param pvFQ900
   * @param pvLOGIN
  */
  _stornoDataQ950(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ950',
      pvFQ800 = !!req_PARAM.pvFQ800 ? req_PARAM.pvFQ800 : null,
      pvFQ850 = !!req_PARAM.pvFQ850 ? req_PARAM.pvFQ850 : null,
      pvFQ900 = !!req_PARAM.pvFQ900 ? req_PARAM.pvFQ900 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pvFQ800, pvFQ850, pvFQ900, pvLOGIN], callback)
  }
  /**
   * -- CHUC NANG(Q400) <-> NHOM QUYEN(Q350) --> Q150
   * -- CA NHAN(N100) <-> NHOM QUYEN(Q350) --> Q200
   * -- ngan gon: ca nhan thuoc nhom quyen nao va nhom quyen ddo co nhung chuc nang gi
   * @param pnFH000 -- modul
   * @param pnFN100 -- ID user
   * @param pvQV401 -- ma chuc nang
   * @param pvLOGIN -- Login
  */
  _haveRight2Exec(req_PARAM, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'HaveRight2Exec',
      pnFH000 = !!req_PARAM.pnFH000 ? +req_PARAM.pnFH000 : 0,
      pnFN100 = !!req_PARAM.pnFN100 ? +req_PARAM.pnFN100 : 0,
      pvQV401 = !!req_PARAM.pvQV401 ? req_PARAM.pvQV401 : null,
      pvLOGIN = !!req_PARAM.pvLOGIN ? req_PARAM.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFN100, pvQV401, pvLOGIN], callback)
  }
}