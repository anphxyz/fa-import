/**
 * * B200_MODEL
 * @author Toailq - 24/11/2017
*/

'use strict'
const Model = require('./../model')

module.exports = class B200_MODEL extends Model {
  constructor() {
    super()
  }

  /**
    * danh sach cong viec bao tri thuoc thiet bi (FB050) va Bo phan bao tri (FS250)
    *  @param pnFB050 
    *  @param pnFS250
    *  @param pvFC550
    *  @param pvBV003
    *  @param pvLOGIN
    */
  _listOfTabB200DE(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB200DE',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callProcerdure(procName, [pnFB050, pnFS250, pvFC550, pvBV003, pvLOGIN], callback)
  }
  /**
  * Danh sach cac cong viec bao tri theo FH200
  *  @param pnFH000  -- Facilio = 4
  *  @param pnFH200    -- Lay tu tree cua dashboard
  *  @param pnFS200    -- su dung sau nay cho filter
  *  @param pnFC450   -- su dung sau nay cho filter
  *  @param pnFC500   -- su dung sau nay cho filter
  *  @param pvFC550   -- su dung sau nay cho filter
  *  @param pnFB050    -- may theo vi tri
  *  @param pnREPART
  *  @param pvUSER
  *  @param pvSTATUS
  *  @param pnFN850 
  *  @param pnDAYSS    -- 0: mac dinh; 1: hom nay; 2: ngay mai; 3: tuan sau; 4: tu ngay ..
  *  @param pdBD201F   -- tu ngay
  *  @param pdBD201T  -- den ngay
  *  @param pvSEARC
  *  @param pnOFFSET   -- giong nhu binh thuong cua facilio
  *  @param pnLIMIT     -- giong nhu binh thuong cua facilio
  *  @param pnSORT      -- giong nhu binh thuong cua facilio
  *  @param pnDIRECTION   -- ngay len ke hoach sua chua
  *  @param pvLOGIN
  */
  _listOfTabB200(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB200',
      pnFH000  = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200  = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200  = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFC450  = !!params.pnFC450 ? +params.pnFC450 : 0,
      pnFC500  = !!params.pnFC500 ? +params.pnFC500 : 0,
      pvFC550  = !!params.pvFC550 ? params.pvFC550 : null,
      pnFB050  = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnREPART = !!params.pnREPART ? +params.pnREPART : 0,
      pvUSER   = !!params.pvUSER ? params.pvUSER : null,
      pvSTATUS = !!params.pvSTATUS ? params.pvSTATUS : null,
      pnFN850  = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnDAYSS  = !!params.pnDAYSS ? +params.pnDAYSS : 0,
      pdBD201F = !!params.pdBD201F ? params.pdBD201F : null,
      pdBD201T = !!params.pdBD201T ? params.pdBD201T : null,
      pvSEARC  = !!params.pvSEARC ? params.pvSEARC : null,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT  = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT   = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null


    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pnFC450, pnFC500, pvFC550, pnFB050,
      pnREPART, pvUSER, pvSTATUS, pnFN850, pnDAYSS, pdBD201F, pdBD201T, pvSEARC, pnOFFSET, pnLIMIT,
      pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
  /**
  * Danh sach cac cong viec bao tri theo FH200
  *  @param pnFH000  -- Facilio = 4
  *  @param pnFH200    -- Lay tu tree cua dashboard
  *  @param pnFS200    -- su dung sau nay cho filter
  *  @param pnFC450   -- su dung sau nay cho filter
  *  @param pnFC500   -- su dung sau nay cho filter
  *  @param pvFC550   -- su dung sau nay cho filter
  *  @param pnFB050    -- may theo vi tri
  *  @param pnREPART
  *  @param pvUSER
  *  @param pvSTATUS
  *  @param pnFN850 
  *  @param pnDAYSS    -- 0: mac dinh; 1: hom nay; 2: ngay mai; 3: tuan sau; 4: tu ngay ..
  *  @param pdBD201F   -- tu ngay
  *  @param pdBD201T  -- den ngay
  *  @param pvSEARC
  *  @param pnOFFSET   -- giong nhu binh thuong cua facilio
  *  @param pnLIMIT     -- giong nhu binh thuong cua facilio
  *  @param pnSORT      -- giong nhu binh thuong cua facilio
  *  @param pnDIRECTION   -- ngay len ke hoach sua chua
  *  @param pvLOGIN
  */
  _listOfTabB200TY(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB200TY',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFC450 = !!params.pnFC450 ? +params.pnFC450 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnREPART = !!params.pnREPART ? +params.pnREPART : 0,
      pvUSER = !!params.pvUSER ? params.pvUSER : null,
      pvSTATUS = !!params.pvSTATUS ? params.pvSTATUS : null,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnDAYSS = !!params.pnDAYSS ? +params.pnDAYSS : 0,
      pdBD201F = !!params.pdBD201F ? params.pdBD201F : null,
      pdBD201T = !!params.pdBD201T ? params.pdBD201T : null,
      pvSEARC = !!params.pvSEARC ? params.pvSEARC : null,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null


    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pnFC450, pnFC500, pvFC550, pnFB050,
      pnREPART, pvUSER, pvSTATUS, pnFN850, pnDAYSS, pdBD201F, pdBD201T, pvSEARC, pnOFFSET, pnLIMIT,
      pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
  /**
  * Danh sach cac cong viec bao tri theo FH200
  *  @param pnFH000  -- Facilio = 4
  *  @param pnFH200    -- Lay tu tree cua dashboard
  *  @param pnFS200    -- su dung sau nay cho filter
  *  @param pnFC450   -- su dung sau nay cho filter
  *  @param pnFC500   -- su dung sau nay cho filter
  *  @param pvFC550   -- su dung sau nay cho filter
  *  @param pnFB050    -- may theo vi tri
  *  @param pnREPART
  *  @param pvUSER
  *  @param pvSTATUS
  *  @param pnFN850 
  *  @param pnDAYSS    -- 0: mac dinh; 1: hom nay; 2: ngay mai; 3: tuan sau; 4: tu ngay ..
  *  @param pdBD201F   -- tu ngay
  *  @param pdBD201T  -- den ngay
  *  @param pvSEARC
  *  @param pnOFFSET   -- giong nhu binh thuong cua facilio
  *  @param pnLIMIT     -- giong nhu binh thuong cua facilio
  *  @param pnSORT      -- giong nhu binh thuong cua facilio
  *  @param pnDIRECTION   -- ngay len ke hoach sua chua
  *  @param pvLOGIN
  */
  _listOfTabB200BT(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB200BT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFC450 = !!params.pnFC450 ? +params.pnFC450 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnREPART = !!params.pnREPART ? +params.pnREPART : 0,
      pvUSER = !!params.pvUSER ? params.pvUSER : null,
      pvSTATUS = !!params.pvSTATUS ? params.pvSTATUS : null,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pnDAYSS = !!params.pnDAYSS ? +params.pnDAYSS : 0,
      pdBD201F = !!params.pdBD201F ? params.pdBD201F : null,
      pdBD201T = !!params.pdBD201T ? params.pdBD201T : null,
      pvSEARC = !!params.pvSEARC ? params.pvSEARC : null,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null


    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pnFS200, pnFC450, pnFC500, pvFC550, pnFB050,
      pnREPART, pvUSER, pvSTATUS, pnFN850, pnDAYSS, pdBD201F, pdBD201T, pvSEARC, pnOFFSET, pnLIMIT,
      pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
  /**
  * SEARCH: KHONG THEO PB200
  *  @param pnFH000  -- Facilio = 4
  *  @param pnFH200    -- Lay tu tree cua dashboard
  *  @param pvFB200    
  *  @param pnFH150   -- HD
  *  @param pnFB050   
  *  @param pnFC500   
  *  @param pvFC550   
  *  @param pvBV206
  *  @param pnFN850   -- Nhom nhan vien
  *  @param pdBD201F   -- tu ngay
  *  @param pdBD201T  -- den ngay
  *  @param pnOFFSET   -- giong nhu binh thuong cua facilio
  *  @param pnLIMIT     -- giong nhu binh thuong cua facilio
  *  @param pnSORT      -- giong nhu binh thuong cua facilio
  *  @param pnDIRECTION   -- ngay len ke hoach sua chua
  *  @param pvLOGIN
  */
  _listOfTabB200S(params, callback) {

    const procName = this.SYNONYM.B2017_CUR + 'ListOfTabB200S',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pvFB200 = !!params.pvFB200 ? params.pvFB200 : null,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pvBV206 = !!params.pvBV206 ? params.pvBV206 : null,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFN850 = !!params.pnFN850 ? +params.pnFN850 : 0,
      pdBD201F = !!params.pdBD201F ? params.pdBD201F : null,
      pdBD201T = !!params.pdBD201T ? params.pdBD201T : null,
      pnOFFSET = !!params.pnOFFSET ? +params.pnOFFSET : 0,
      pnLIMIT = !!params.pnLIMIT ? +params.pnLIMIT : 0,
      pnSORT = !!params.pnSORT ? +params.pnSORT : 0,
      pnDIRECTION = !!params.pnDIRECTION ? +params.pnDIRECTION : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null


    this.oracleUtilModel._callProcerdure(procName, [pnFH000, pnFH200, pvFB200, pnFH150, pnFC500, pvFC550, pvBV206, pnFB050,
      pnFN850, pdBD201F, pdBD201T, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION, pvLOGIN], callback)
  }
  /**
  * GetRowCountTabB200
  * @param pnFH200
  * @param pnFS200
  * @param pnFB050
  * @param pnFC250
  * @param pnFC450
  * @param pnFC500                    
  * @param pvFC550
  */
  _getRowCountTabB200(params, callback) {

    const funcName = this.SYNONYM.B2017_CUR + 'GetRowCountTabB200',
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFC250 = !!params.pnFC250 ? +params.pnFC250 : 0,
      pnFC450 = !!params.pnFC450 ? +params.pnFC450 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null

    this.oracleUtilModel._callFunction(funcName, [pnFH200, pnFS200, pnFB050, pnFC250, pnFC450, pnFC500, pvFC550], callback)
  }

  /** -------------------B2017_FACI-------------- */

  /**
  * -- tao cong viec bao tri cho TUNG MAY (FB050), dua tren PA bao tri dda chon (FB400)
  * @param pnFH000                    
  * @param pnFH200
  * @param pnFB400  
  * @param pnFB050  
  * @param pvBV052  -- Ma tai san
  * @param pvBV407  -- Bo phan
  * @param pnBN402  -- chu ky ngay
  * @param pvBV408  -- chu ky hang tuan 'MO' (e.W)
  * @param pdBD203  -- ngay BT cuoi tu file excel
  * @param pvBV003  -- DEFAULT 'vi'
  * @param pvLOGIN  
  */
  _insertTabB200BT_p11(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB200BT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB400 = !!params.pnFB400 ? +params.pnFB400 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pvBV052 = !!params.pvBV052 ? params.pvBV052 : null,
      pvBV407 = !!params.pvBV407 ? params.pvBV407 : null,
      pnBN402 = !!params.pnBN402 ? +params.pnBN402 : 0,
      pvBV408 = !!params.pvBV408 ? params.pvBV408 : null,
      pdBD203 = !!params.pdBD203 ? params.pdBD203 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFB400, pnFB050, pvBV052, pvBV407, pnBN402,
      pvBV408, pdBD203, pvBV003, pvLOGIN], callback)
  }

  /**
  * -- InsertTabB200BT
  * @param pnFH000                
  * @param pnFH200
  * @param pnFB050  
  * @param pnFS200  
  * @param pnFS250  
  * @param pnFH150  
  * @param pnFB400  
  * @param pdBD201  
  * @param pvBB202  
  * @param pdBD203  
  * @param pvBV003
  * @param pvFB200
  */
  _insertTabB200BT_p13(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB200BT',
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFB400 = !!params.pnFB400 ? +params.pnFB400 : 0,
      pdBD201 = !!params.pdBD201 ? params.pdBD201 : null,
      pvBB202 = !!params.pvBB202 ? params.pvBB202 : null,
      pdBD203 = !!params.pdBD203 ? params.pdBD203 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvFB200 = !!params.pvFB200 ? params.pvFB200 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFH000, pnFH200, pnFB050, pnFS200, pnFS250, pnFH150, pnFB400,
      pdBD201, pvBB202, pdBD203, pvBV003, pvFB200, pvLOGIN], callback)
  }

  /**
  * -- InsertTabB200BT
  * @param pvFB200        
  * @param pvPB200         
  * @param pnFH000 
  * @param pnFH150 
  * @param pnFH200 
  * @param pnFS200        
  * @param pnFS250         
  * @param pnFB050 
  * @param pnFB400 
  * @param pnFB300 
  * @param pnFC250        
  * @param pnFC450         
  * @param pnFC500 
  * @param pvFC550 
  * @param pdBD201 
  * @param pvBB202        
  * @param pdBD203         
  * @param pvBV204 
  * @param pvBV205 
  * @param pvBV206 
  * @param pvBC207        
  * @param pvBV208         
  * @param pnBN209 
  * @param pnBN210 
  * @param pvBV211 -- thoi gian alarm 
  * @param pvBV212 -- nguyen ngay hoac ko nguyen ngay       
  * @param pdBD213 -- ngay het han        
  * @param pvBV219 -- BT
  * @param pnFB030 
  */
  _insertTabB200BT_p30(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB200BT',
      pvFB200 = !!params.pvFB200 ? params.pvFB200 : null,
      pvPB200 = !!params.pvPB200 ? params.pvPB200 : null,
      pnFH000 = !!params.pnFH000 ? +params.pnFH000 : 0,
      pnFH150 = !!params.pnFH150 ? +params.pnFH150 : 0,
      pnFH200 = !!params.pnFH200 ? +params.pnFH200 : 0,
      pnFS200 = !!params.pnFS200 ? +params.pnFS200 : 0,
      pnFS250 = !!params.pnFS250 ? +params.pnFS250 : 0,
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFB400 = !!params.pnFB400 ? +params.pnFB400 : 0,
      pnFB300 = !!params.pnFB300 ? +params.pnFB300 : 0,
      pnFC250 = !!params.pnFC250 ? +params.pnFC250 : 0,
      pnFC450 = !!params.pnFC450 ? +params.pnFC450 : 0,
      pnFC500 = !!params.pnFC500 ? +params.pnFC500 : 0,
      pvFC550 = !!params.pvFC550 ? params.pvFC550 : null,
      pdBD201 = !!params.pdBD201 ? params.pdBD201 : null,
      pvBB202 = !!params.pvBB202 ? params.pvBB202 : null,
      pdBD203 = !!params.pdBD203 ? params.pdBD203 : null,
      pvBV204 = !!params.pvBV204 ? params.pvBV204 : null,
      pvBV205 = !!params.pvBV205 ? params.pvBV205 : null,
      pvBV206 = !!params.pvBV206 ? params.pvBV206 : null,
      pvBC207 = !!params.pvBC207 ? params.pvBC207 : null,
      pvBV208 = !!params.pvBV208 ? params.pvBV208 : null,
      pnBN209 = !!params.pnBN209 ? +params.pnBN209 : 0,
      pnBN210 = !!params.pnBN210 ? +params.pnBN210 : 0,
      pvBV211 = !!params.pvBV211 ? params.pvBV211 : null,
      pvBV212 = !!params.pvBV212 ? params.pvBV212 : null,
      pdBD213 = !!params.pdBD213 ? params.pdBD213 : null,
      pvBV219 = !!params.pvBV219 ? params.pvBV219 : null,
      pnFB030 = !!params.pnFB030 ? +params.pnFB030 : 0,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvFB200, pvPB200, pnFH000, pnFH150, pnFH200, pnFS200, pnFS250,
      pnFB050, pnFB400, pnFB300, pnFC250, pnFC450, pnFC500, pvFC550, pdBD201, pvBB202, pdBD203,
      pvBV204, pvBV205, pvBV206, pvBC207, pvBV208, pnBN209, pnBN210, pvBV211, pvBV212, pdBD213, pvBV219, pnFB030, pvLOGIN], callback)
  }

  /**
  * -- InsertTabB200BT
  * @param pnFB050  
  * @param pnFB400  
  * @param pdBD203  -- ngay BT cuoi tu file excel
  * @param pvNV106
  * @param pvBV003
  */
  _insertTabB200BT_p6(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB200BT',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFB400 = !!params.pnFB400 ? +params.pnFB400 : 0,
      pdBD203 = !!params.pdBD203 ? params.pdBD203 : null,
      pvNV106 = !!params.pvNV106 ? params.pvNV106 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pnFB400, pdBD203, pvNV106, pvBV003, pvLOGIN], callback)
  }

  /**
  * -- InsertTabB200PM
  * @param pnFB050  
  * @param pnFB400  
  * @param pdBD203  -- ngay BT cuoi tu file excel
  * @param pvNV106
  * @param pvBV003
  */
  _insertTabB200PM(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'InsertTabB200PM',
      pnFB050 = !!params.pnFB050 ? +params.pnFB050 : 0,
      pnFB400 = !!params.pnFB400 ? +params.pnFB400 : 0,
      pdBD203 = !!params.pdBD203 ? params.pdBD203 : null,
      pvNV106 = !!params.pvNV106 ? params.pvNV106 : null,
      pvBV003 = !!params.pvBV003 ? params.pvBV003 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pnFB050, pnFB400, pdBD203, pvNV106, pvBV003, pvLOGIN], callback)
  }

  /**
* -- xoa bo thong tin ve CONG VIEC BAO TRI cho tung san pham, may moc
* @param pvPB200  --ID thuoc cong viec bao tri
*/
  _stornoTabB200(params, callback) {

    const funcName = this.SYNONYM.B2017_FACI + 'StornoTabB200',
      pvPB200 = !!params.pvPB200 ? params.pvPB200 : null,
      pvLOGIN = !!params.pvLOGIN ? params.pvLOGIN : null

    this.oracleUtilModel._callFunction(funcName, [pvPB200, pvLOGIN], callback)
  }

}