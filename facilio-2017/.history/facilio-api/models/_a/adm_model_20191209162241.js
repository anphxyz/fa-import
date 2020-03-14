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
  _checkUserLogin_p2(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CheckUserLogin',
      pvQV101 = !!params.pvQV101 ? params.pvQV101 : null,
      pvQV102 = !!params.pvQV102 ? params.pvQV102 : null

    this.oracleUtilModel._callFunction(funcName, [pvQV101, pvQV102], callback)
  }
  /**
  * Check Login 
  * @param pvQV101 -- QV101: Login
  * @param pvQV102 -- QV102: pwd mit MD5 
  * @param pnFH000  
  */
  _checkUserLogin_p3(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CheckUserLogin',
      pvQV101 = !!params.pvQV101 ? params.pvQV101 : null,
      pvQV102 = !!params.pvQV102 ? params.pvQV102 : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0

    this.oracleUtilModel._callFunctionWithCursor(funcName, [pvQV101, pvQV102, pnFH000], callback)
  }
  /**
  * CheckUserLoginHT
  * @param pvQV101 -- QV101: Login
  * @param pvQV102 -- QV102: pwd mit MD5 
  * @param pnFH000
*/
  _checkUserLoginHT(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CheckUserLoginHT',
      pvQV101 = !!params.pvQV101 ? params.pvQV101 : null,
      pvQV102 = !!params.pvQV102 ? params.pvQV102 : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0

    this.oracleUtilModel._callFunctionWithCursor(funcName, [pvQV101, pvQV102, pnFH000], callback)
  }
  /**
   * @param pnFN100
   * @param pnFH000
   * @param pvLOGIN
   */
  _createDataQ050(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ050',
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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

  _stornoTabQ050(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoTabQ050',
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFC4501 = !!params.pnFC4501 ? +params.pnFC4501 : 0,
      pnFC4502 = !!params.pnFC4502 ? +params.pnFC4502 : 0,
      pnFC4503 = !!params.pnFC4503 ? +params.pnFC4503 : 0,
      pnFC5001 = !!params.pnFC5001 ? +params.pnFC5001 : 0,
      pnFC5002 = !!params.pnFC5002 ? +params.pnFC5002 : 0,
      pnFC5003 = !!params.pnFC5003 ? +params.pnFC5003 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvQV101 = !!params.pvQV101 ? params.pvQV101 : null,
      pvQV102 = !!params.pvQV102 ? params.pvQV102 : null,
      pdQD103 = !!params.pdQD103 ? params.pdQD103 : null,
      pdQD104 = !!params.pdQD104 ? params.pdQD104 : null,
      pvQV105 = !!params.pvQV105 ? params.pvQV105 : null,
      pvQV106 = !!params.pvQV106 ? params.pvQV106 : null,
      pvQV107 = !!params.pvQV107 ? params.pvQV107 : null,
      pvQV108 = !!params.pvQV108 ? params.pvQV108 : null,
      pvQV109 = !!params.pvQV109 ? params.pvQV109 : null,
      pnQN110 = !!params.pnQN110 ? +params.pnQN110 : 0,
      pnQN111 = !!params.pnQN111 ? +params.pnQN111 : 0,
      pnQN112 = !!params.pnQN112 ? +params.pnQN112 : 0,
      pnQN113 = !!params.pnQN113 ? +params.pnQN113 : 0,
      pvQV114 = !!params.pvQV114 ? params.pvQV114 : null,
      pvQV115 = !!params.pvQV115 ? params.pvQV115 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _createDataQ100(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ100',
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFC4501 = !!params.pnFC4501 ? +params.pnFC4501 : 0,
      pnFC4502 = !!params.pnFC4502 ? +params.pnFC4502 : 0,
      pnFC4503 = !!params.pnFC4503 ? +params.pnFC4503 : 0,
      pnFC5001 = !!params.pnFC5001 ? +params.pnFC5001 : 0,
      pnFC5002 = !!params.pnFC5002 ? +params.pnFC5002 : 0,
      pnFC5003 = !!params.pnFC5003 ? +params.pnFC5003 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvQV101 = !!params.pvQV101 ? params.pvQV101 : null,
      pvQV102 = !!params.pvQV102 ? params.pvQV102 : null,
      pdQD103 = !!params.pdQD103 ? new Date(params.pdQD103) : new Date(),
      pdQD104 = !!params.pdQD104 ? new Date(params.pdQD104) : new Date(),
      pvQV105 = !!params.pvQV105 ? params.pvQV105 : null,
      pvQV106 = !!params.pvQV106 ? params.pvQV106 : null,
      pvQV107 = !!params.pvQV107 ? params.pvQV107 : null,
      pvQV108 = !!params.pvQV108 ? params.pvQV108 : null,
      pvQV109 = !!params.pvQV109 ? params.pvQV109 : null,
      pnQN110 = !!params.pnQN110 ? +params.pnQN110 : 0,
      pnQN111 = !!params.pnQN111 ? +params.pnQN111 : 0,
      pnQN112 = !!params.pnQN112 ? +params.pnQN112 : 0,
      pnQN113 = !!params.pnQN113 ? +params.pnQN113 : 0,
      pvQV114 = !!params.pvQV114 ? params.pvQV114 : null,
      pvQV115 = !!params.pvQV115 ? params.pvQV115 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _changeTabQ100(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'ChangeTabQ100',
      pnFQ100 = !!params.pnFQ100 ? +params.pnFQ100 : 0,
      pvQV101 = !!params.pvQV101 ? params.pvQV101 : null,
      pvQV102N = !!params.pvQV102N ? params.pvQV102N : null,
      pvQV102A = !!params.pvQV102A ? params.pvQV102A : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFQ100, pvQV101, pvQV102N, pvQV102A, pvLOGIN], callback)
  }
  /**
   * -- Tao moi moi lien quan giua nhom lam viec va chuc nang cong viec
   * @param pnFH000 
   * @param pnFQ350 -- ID cua nhom lam viec
   * @param pnFQ400 -- ID cua chuc nang cong viec
   * @param pvLOGIN
  */
  _createDataQ150_p4(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ150',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ400 = !!params.pnFQ400 ? +params.pnFQ400 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFQ350, pnFQ400, pvLOGIN], callback)
  }
  /**
  * -- Tao moi moi lien quan giua nhom lam viec va chuc nang cong viec
  * @param pnFQ350 -- ID cua nhom lam viec
  * @param pnFQ400 -- ID cua chuc nang cong viec
  * pvLOGIN
 */
  _createDataQ150_p3(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ150',
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ400 = !!params.pnFQ400 ? +params.pnFQ400 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFQ350, pnFQ400, pvLOGIN], callback)
  }
  /**
   * -- sua ddoi moi lien quan giua nhom lam viec va chuc nang cong viec
   * @param pnFH000 
   * @param pnFQ350 -- ID cua nhom lam viec
   * @param pnFQ400 -- ID cua chuc nang cong viec
   * @param pvLOGIN
  */
  _stornoDataQ150(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ150',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ400 = !!params.pnFQ400 ? +params.pnFQ400 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _createDataQ175(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ175',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ300 = !!params.pnFQ300 ? +params.pnFQ300 : 0,
      pnFQ400 = !!params.pnFQ400 ? +params.pnFQ400 : 0,
      pnQN176 = !!params.pnQN176 ? +params.pnQN176 : 0,
      pvQV177 = !!params.pvQV177 ? params.pvQV177 : null,
      pvQV178 = !!params.pvQV178 ? params.pvQV178 : null,
      pvQV179 = !!params.pvQV179 ? params.pvQV179 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

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
  _stornoDataQ175(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ175',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ400 = !!params.pnFQ400 ? +params.pnFQ400 : 0,
      pnFQ100 = !!params.pnFQ100 ? +params.pnFQ100 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _createDataQ200_p4(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ200',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ100 = !!params.pnFQ100 ? +params.pnFQ100 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFQ350, pnFQ100, pvLOGIN], callback)
  }
  /**
  * -- Them nguoi su dung vao nhom lam viec
  * @param pnFQ350 -- ID cua nhom lam viec
  * @param pnFQ100 -- ID cua nhan vien lam viec
  * @param pvLOGIN
 */
  _createDataQ200_p3(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ200',
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ100 = !!params.pnFQ100 ? +params.pnFQ100 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFQ350, pnFQ100, pvLOGIN], callback)
  }
  /**
   * -- huy nguoi su dung FN100 thuoc nhom quyen Q350
   * @param pnFH000
   * @param pnFQ350 -- ID cua nhom lam viec
   * @param pnFQ100 -- ID cua nhan vien lam viec
   * @param pvLOGIN
  */
  _stornoDataQ200(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ200',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFQ350 = !!params.pnFQ350 ? +params.pnFQ350 : 0,
      pnFQ100 = !!params.pnFQ100 ? +params.pnFQ100 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFQ350, pnFQ100, pvLOGIN], callback)
  }
  /**
   * 
   * 
   * 
  */
  // TODO : trong data thấy hàm Q275 đã comment lại rồi
  // _reactiTabQ275(params, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'ReactiTabQ275',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _CreateDataQ275(params, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ275',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _StornoDataQ275(params, callback) {

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
  _createDataQ300(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ300',
      pnPQ300 = !!params.pnPQ300 ? +params.pnPQ300 : 0,
      pvQV301 = !!params.pvQV301 ? params.pvQV301 : null,
      pvQV302 = !!params.pvQV302 ? params.pvQV302 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnPQ300, pvQV301, pvQV302, pvLOGIN], callback)
  }
  /**
   * StornoDataQ300
   * @param pnPQ300
   * @param pvLOGIN
  */
  _stornoDataQ300(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ300',
      pnPQ300 = !!params.pnPQ300 ? +params.pnPQ300 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _createDataQ350(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ350',
      pnPQ350 = !!params.pnPQ350 ? +params.pnPQ350 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvQV351 = !!params.pvQV351 ? params.pvQV351 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnPQ350, pnFH000, pnFH200, pvQV351, pvLOGIN], callback)
  }
  /**
   * -- xoa nhom quyen
   * @param pnPQ350
  */
  _stornoDataQ350(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ350',
      pnPQ350 = !!params.pnPQ350 ? +params : 0
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
  _createDataQ400(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ400',
      pnPQ400 = !!params.pnPQ400 ? +params.pnPQ400 : 0,
      pvQV401 = !!params.pvQV401 ? params.pvQV401 : null,
      pvQV402 = !!params.pvQV402 ? params.pvQV402 : null,
      pnFQ300 = !!params.pnFQ300 ? +params.pnFQ300 : 0,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnPQ400, pvQV401, pvQV402, pnFQ300, pnFH000, pvLOGIN], callback)
  }
  /**
   * -- sao chep nhanh danh sach cac chuc nang va nhom chuc nang tu mot phan he sang mot phan he moi	
   * @param pnFH000A
   * @param pnFH000N
   * @param pvLOGIN
  */
  _copyDataOfQ400(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CopyDataOfQ400',
      pnFH000A = !!params.pnFH000A ? +params.pnFH000A : 0,
      pnFH000N = !!params.pnFH000N ? +params.pnFH000N : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000A, pnFH000N, pvLOGIN], callback)
  }
  /**
   * StornoDataQ400
   * @param pnPQ400
  */
  _stornoDataQ400(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ400',
      pnPQ400 = !!params.pnPQ400 ? +params.pnPQ400 : 0
    this.oracleUtilModel._callFunction(funcName, [pnPQ400], callback)
  }
  /**
   * 
   * 
   * 
  */
  // _CreateDataQ450(params, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ450',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _StornoDataQ450(params, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ450',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _CreateDataQ550(params, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ550',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _StornoDataQ550(params, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ550',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * -- danh sach quyen su dung cua nhom
   * @param pnPQ350 --ID cua nhom lam viec
  */
  _execRechteListe(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'ExecRechteListe',
      pnPQ350 = !!params.pnPQ350 ? params.pnPQ350 : 0
    this.oracleUtilModel._callProcerdure(funcName, [pnPQ350], callback)
  }
  /**
   * -- CHUC NANG(Q400) <-> NHOM QUYEN(Q350) --> Q150
   * -- CA NHAN(N100) <-> NHOM QUYEN(Q350) --> Q200
   * -- ngan gon: ca nhan thuoc nhom quyen nao va nhom quyen ddo co nhung chuc nang gi
   * @param pvQV101 -- Login
   * @param pnPQ400
  */
  _canExecuteFunc(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CanExecuteFunc',
      pvQV101 = !!params.pvQV101 ? params.pvQV101 : null,
      pnPQ400 = !!params.pnPQ400 ? +params.pnPQ400 : 0
    this.oracleUtilModel._callFunction(funcName, [pvQV101, pnPQ400], callback)
  }
  /**
   * 
   * 
   * 
  */
  // _CreateDataQ750(params, callback) {

  //   const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ750',

  //   this.oracleUtilModel._callFunction(funcName, [], callback)
  // }
  /**
   * 
   * 
   * 
  */
  // _StornoDataQ750(params, callback) {

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
  _createDataQ950(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'CreateDataQ950',
      pvFQ800 = !!params.pvFQ800 ? params.pvFQ800 : null,
      pvFQ850 = !!params.pvFQ850 ? params.pvFQ850 : null,
      pvFQ900 = !!params.pvFQ900 ? params.pvFQ900 : null,
      pvQV951 = !!params.pvQV951 ? params.pvQV951 : null,
      pvQV952 = !!params.pvQV952 ? params.pvQV952 : null,
      pdQD953 = !!params.pdQD953 ? params.pdQD953 : null,
      pdQD954 = !!params.pdQD954 ? params.pdQD954 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pvFQ800, pvFQ850, pvFQ900, pvQV951, pvQV952, pdQD953, pdQD954, pvLOGIN], callback)
  }
  /**
   * StornoDataQ950
   * @param pvFQ800
   * @param pvFQ850
   * @param pvFQ900
   * @param pvLOGIN
  */
  _stornoDataQ950(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'StornoDataQ950',
      pvFQ800 = !!params.pvFQ800 ? params.pvFQ800 : null,
      pvFQ850 = !!params.pvFQ850 ? params.pvFQ850 : null,
      pvFQ900 = !!params.pvFQ900 ? params.pvFQ900 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
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
  _haveRight2Exec(params, callback) {

    const funcName = this.SYNONYM.A2017_ADM + 'HaveRight2Exec',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFN100 = !!params.pnFN100 ? +params.pnFN100 : 0,
      pvQV401 = !!params.pvQV401 ? params.pvQV401 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null
    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFN100, pvQV401, pvLOGIN], callback)
  }
}