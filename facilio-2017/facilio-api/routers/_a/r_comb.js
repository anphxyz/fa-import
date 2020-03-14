/**
 * COMB Router
 * @author Linhnc - 5/12/2017
 */
const COMB = require('../../controllers/_a/comb')
module.exports = (app) => {

  this.ctrlCOMB = new COMB()

  // http://devlg.smooveo.com:3010/comb/comb_tabb000_p5?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb000_p5', (req, res) => { this.ctrlCOMB._comBTabB000_p5(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb000_p4?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb000_p4', (req, res) => { this.ctrlCOMB._comBTabB000_p4(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb050_p3?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb050_p3', (req, res) => { this.ctrlCOMB._comBTabB050_p3(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb050_p4?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb050_p4', (req, res) => { this.ctrlCOMB._comBTabB050_p4(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb050e?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb050e', (req, res) => { this.ctrlCOMB._comBTabB050E(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb050m?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb050m', (req, res) => { this.ctrlCOMB._comBTabB050M(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb050n?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb050n', (req, res) => { this.ctrlCOMB._comBTabB050N(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb050s?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb050s', (req, res) => { this.ctrlCOMB._comBTabB050S(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb100_p3?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb100_p3', (req, res) => { this.ctrlCOMB._comBTabB100_p3(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb100_p5?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb100_p5', (req, res) => { this.ctrlCOMB._comBTabB100_p5(req, res) })          //loi
  // http://devlg.smooveo.com:3010/comb/comb_tabb100c?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb100c', (req, res) => { this.ctrlCOMB._comBTabB100C(req, res) })
  // http://devlg.smooveo.com:3010/comb/bomb_tabb300_p3?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/bomb_tabb300_p3', (req, res) => { this.ctrlCOMB._bomBTabB300_p3(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb300_p5?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb300_p5', (req, res) => { this.ctrlCOMB._comBTabB300_p5(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb300m?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb300m', (req, res) => { this.ctrlCOMB._comBTabB300M(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb300p?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb300p', (req, res) => { this.ctrlCOMB._comBTabB300P(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb300_p2?pnFH000=4&pnFH200=10006
  app.get('/comb/comb_tabb300_p2', (req, res) => { this.ctrlCOMB._comBTabB300_p2(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabb670?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabb670', (req, res) => { this.ctrlCOMB._comBTabB670(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabc250?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabc250', (req, res) => { this.ctrlCOMB._comBTabC250(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabc300?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabc300', (req, res) => { this.ctrlCOMB._comBTabC300(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabc400_p3?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabc400_p3', (req, res) => { this.ctrlCOMB._comBTabC400_p3(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabc400_p4?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabc400_p4', (req, res) => { this.ctrlCOMB._comBTabC400_p4(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabc450?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabc450', (req, res) => { this.ctrlCOMB._comBTabC450(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabc500?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabc500', (req, res) => { this.ctrlCOMB._comBTabC500(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabc550?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabc550', (req, res) => { this.ctrlCOMB._comBTabC550(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabh200ma?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabh200ma', (req, res) => { this.ctrlCOMB._comBTabH200MA(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabh200a?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabh200a', (req, res) => { this.ctrlCOMB._comBTabH200A(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabh200c_p4?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabh200c_p4', (req, res) => { this.ctrlCOMB._comBTabH200C_p4(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabh200c_p3?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabh200c_p3', (req, res) => { this.ctrlCOMB._comBTabH200C_p3(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabh200?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabh200', (req, res) => { this.ctrlCOMB._comBTabH200(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabh200vpc?pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabh200vpc', (req, res) => { this.ctrlCOMB._comBTabH200VPC(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabh250?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabh250', (req, res) => { this.ctrlCOMB._comBTabH250(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabh450?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabh450', (req, res) => { this.ctrlCOMB._comBTabH450(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabh550?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabh550', (req, res) => { this.ctrlCOMB._comBTabH550(req, res) })               //loi
  // http://devlg.smooveo.com:3010/comb/comb_tabn000?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn000', (req, res) => { this.ctrlCOMB._comBTabN000(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn100?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn100', (req, res) => { this.ctrlCOMB._comBTabN100(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn100l_p3?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn100l_p3', (req, res) => { this.ctrlCOMB._comBTabN100L_p3(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn100l_p4?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn100l_p4', (req, res) => { this.ctrlCOMB._comBTabN100L_p4(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn100g?pnFN850=98&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn100g', (req, res) => { this.ctrlCOMB._comBTabN100G(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn100m?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn100m', (req, res) => { this.ctrlCOMB._comBTabN100M(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn100c?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn100c', (req, res) => { this.ctrlCOMB._comBTabN100C(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn400?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn400', (req, res) => { this.ctrlCOMB._comBTabN400(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn750?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn750', (req, res) => { this.ctrlCOMB._comBTabN750(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn850?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn850', (req, res) => { this.ctrlCOMB._comBTabN850(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn850b?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn850b', (req, res) => { this.ctrlCOMB._comBTabN850B(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabn900?pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabn900', (req, res) => { this.ctrlCOMB._comBTabN900(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabq300?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabq300', (req, res) => { this.ctrlCOMB._comBTabQ300(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabq350?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabq350', (req, res) => { this.ctrlCOMB._comBTabQ350(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs200bs?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs200bs', (req, res) => { this.ctrlCOMB._comBTabS200BS(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs200_p4?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs200_p4', (req, res) => { this.ctrlCOMB._comBTabS200_p4(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs200a?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs200a', (req, res) => { this.ctrlCOMB._comBTabS200A(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs200_p2?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs200_p2', (req, res) => { this.ctrlCOMB._comBTabS200_p2(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs200_p3?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs200_p3', (req, res) => { this.ctrlCOMB._comBTabS200_p3(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs200bs?pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs200bs', (req, res) => { this.ctrlCOMB._comBTabS200BS(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs250_p4?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs250_p4', (req, res) => { this.ctrlCOMB._comBTabS250_p4(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs250_p3?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs250_p3', (req, res) => { this.ctrlCOMB._comBTabS250_p3(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs250a?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs250a', (req, res) => { this.ctrlCOMB._comBTabS250A(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs250b?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs250b', (req, res) => { this.ctrlCOMB._comBTabS250B(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs250f?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs250f', (req, res) => { this.ctrlCOMB._comBTabS250F(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabs350?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabs350', (req, res) => { this.ctrlCOMB._comBTabS350(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabt000?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabt000', (req, res) => { this.ctrlCOMB._comBTabT000(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabt000f?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabt000f', (req, res) => { this.ctrlCOMB._comBTabT000F(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabt000p?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabt000p', (req, res) => { this.ctrlCOMB._comBTabT000P(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv050?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv050', (req, res) => { this.ctrlCOMB._comBTabV050(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv050s?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv050s', (req, res) => { this.ctrlCOMB._comBTabV050S(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv200f?pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv200f', (req, res) => { this.ctrlCOMB._comBTabV200F(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv200?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv200', (req, res) => { this.ctrlCOMB._comBTabV200(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv300?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv300', (req, res) => { this.ctrlCOMB._comBTabV300(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv300m?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv300m', (req, res) => { this.ctrlCOMB._comBTabV300M(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv500c?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv500c', (req, res) => { this.ctrlCOMB._comBTabV500C(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv500l?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv500l', (req, res) => { this.ctrlCOMB._comBTabV500L(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv500?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv500', (req, res) => { this.ctrlCOMB._comBTabV500(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv750?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv750', (req, res) => { this.ctrlCOMB._comBTabV750(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabv750m?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabv750m', (req, res) => { this.ctrlCOMB._comBTabV750M(req, res) })
  // http://devlg.smooveo.com:3010/comb/select_rowoftable_p5_num?pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/select_rowoftable_p5_num', (req, res) => { this.ctrlCOMB._selectRowOfTable_p5_num(req, res) })
  // http://devlg.smooveo.com:3010/comb/select_rowoftable_p5_str?pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/select_rowoftable_p5_str', (req, res) => { this.ctrlCOMB._selectRowOfTable_p5_str(req, res) })
  // http://devlg.smooveo.com:3010/comb/select_rowoftable_p7_num?pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/select_rowoftable_p7_num', (req, res) => { this.ctrlCOMB._selectRowOfTable_p7_num(req, res) })
  // http://devlg.smooveo.com:3010/comb/select_rowoftable_p7_str?pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/select_rowoftable_p7_str', (req, res) => { this.ctrlCOMB._selectRowOfTable_p7_str(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_organizationebs?pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_organizationebs', (req, res) => { this.ctrlCOMB._comBOrganizationEBS(req, res) })
  // http://devlg.smooveo.com:3010/comb/comb_tabc150k?pnFH200=10006&pvLOGIN=NMKL_FACIADMIN
  app.get('/comb/comb_tabc150k', (req, res) => { this.ctrlCOMB._comBTabC150K(req, res) })
  // http://devlg.smooveo.com:3010/comb/check_tabh200user
  // DATA: {"pnFH000":4,"pnFH200":10006,"pvLOGIN":"NMKL_FACIADMIN"}
  app.post('/comb/check_tabh200user', (req, res) => { this.ctrlCOMB._checkTabH200USER(req, res) })

}
