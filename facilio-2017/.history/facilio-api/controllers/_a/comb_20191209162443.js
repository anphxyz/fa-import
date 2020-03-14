/**
 * COMB controller
 * @author Linhnc - 5/12/2017
*/

const COMB_MODEL = require('../../models/_a/comb_model')

const FController = require('../fcontroller');

module.exports = class COMB extends FController {

  constructor() {
    this.comb_model = new COMB_MODEL()
  }

  _comBTabB000_p5           (req, res) { this.comb_model._comBTabB000_p5           (req.query, rs => res.send(rs)) }
  _comBTabB000_p4           (req, res) { this.comb_model._comBTabB000_p4           (req.query, rs => res.send(rs)) }
  _comBTabB050_p3           (req, res) { this.comb_model._comBTabB050_p3           (req.query, rs => res.send(rs)) }
  _comBTabB050_p4           (req, res) { this.comb_model._comBTabB050_p4           (req.query, rs => res.send(rs)) }
  _comBTabB050E             (req, res) { this.comb_model._comBTabB050E             (req.query, rs => res.send(rs)) }
  _comBTabB050M             (req, res) { this.comb_model._comBTabB050M             (req.query, rs => res.send(rs)) }
  _comBTabB050N             (req, res) { this.comb_model._comBTabB050N             (req.query, rs => res.send(rs)) }
  _comBTabB050S             (req, res) { this.comb_model._comBTabB050S             (req.query, rs => res.send(rs)) }
  _comBTabB100_p3           (req, res) { this.comb_model._comBTabB100_p3           (req.query, rs => res.send(rs)) }
  _comBTabB100_p5           (req, res) { this.comb_model._comBTabB100_p5           (req.query, rs => res.send(rs)) }
  _comBTabB100C             (req, res) { this.comb_model._comBTabB100C             (req.query, rs => res.send(rs)) }
  _bomBTabB300_p3           (req, res) { this.comb_model._bomBTabB300_p3           (req.query, rs => res.send(rs)) }
  _comBTabB300_p5           (req, res) { this.comb_model._comBTabB300_p5           (req.query, rs => res.send(rs)) }
  _comBTabB300M             (req, res) { this.comb_model._comBTabB300M             (req.query, rs => res.send(rs)) }
  _comBTabB300P             (req, res) { this.comb_model._comBTabB300P             (req.query, rs => res.send(rs)) }
  _comBTabB300_p2           (req, res) { this.comb_model._comBTabB300_p2           (req.query, rs => res.send(rs)) }
  _comBTabB670              (req, res) { this.comb_model._comBTabB670              (req.query, rs => res.send(rs)) }
  _comBTabC250              (req, res) { this.comb_model._comBTabC250              (req.query, rs => res.send(rs)) }
  _comBTabC300              (req, res) { this.comb_model._comBTabC300              (req.query, rs => res.send(rs)) }
  _comBTabC400_p3           (req, res) { this.comb_model._comBTabC400_p3           (req.query, rs => res.send(rs)) }
  _comBTabC400_p4           (req, res) { this.comb_model._comBTabC400_p4           (req.query, rs => res.send(rs)) }
  _comBTabC450              (req, res) { this.comb_model._comBTabC450              (req.query, rs => res.send(rs)) }
  _comBTabC500              (req, res) { this.comb_model._comBTabC500              (req.query, rs => res.send(rs)) }
  _comBTabC550              (req, res) { this.comb_model._comBTabC550              (req.query, rs => res.send(rs)) }
  _comBTabH200MA            (req, res) { this.comb_model._comBTabH200MA            (req.query, rs => res.send(rs)) }
  _comBTabH200A             (req, res) { this.comb_model._comBTabH200A             (req.query, rs => res.send(rs)) }
  _comBTabH200C_p4          (req, res) { this.comb_model._comBTabH200C_p4          (req.query, rs => res.send(rs)) }
  _comBTabH200C_p3          (req, res) { this.comb_model._comBTabH200C_p3          (req.query, rs => res.send(rs)) }
  _comBTabH200              (req, res) { this.comb_model._comBTabH200              (req.query, rs => res.send(rs)) }
  _comBTabH200VPC           (req, res) { this.comb_model._comBTabH200VPC           (req.query, rs => res.send(rs)) }
  _comBTabH250              (req, res) { this.comb_model._comBTabH250              (req.query, rs => res.send(rs)) }
  _comBTabH450              (req, res) { this.comb_model._comBTabH450              (req.query, rs => res.send(rs)) }
  _comBTabH550              (req, res) { this.comb_model._comBTabH550              (req.query, rs => res.send(rs)) }
  _comBTabN000              (req, res) { this.comb_model._comBTabN000              (req.query, rs => res.send(rs)) }
  _comBTabN100              (req, res) { this.comb_model._comBTabN100              (req.query, rs => res.send(rs)) }
  _comBTabN100L_p3          (req, res) { this.comb_model._comBTabN100L_p3          (req.query, rs => res.send(rs)) }
  _comBTabN100L_p4          (req, res) { this.comb_model._comBTabN100L_p4          (req.query, rs => res.send(rs)) }
  _comBTabN100G             (req, res) { this.comb_model._comBTabN100G             (req.query, rs => res.send(rs)) }
  _comBTabN100M             (req, res) { this.comb_model._comBTabN100M             (req.query, rs => res.send(rs)) }
  _comBTabN100C             (req, res) { this.comb_model._comBTabN100C             (req.query, rs => res.send(rs)) }
  _comBTabN400              (req, res) { this.comb_model._comBTabN400              (req.query, rs => res.send(rs)) }
  _comBTabN750              (req, res) { this.comb_model._comBTabN750              (req.query, rs => res.send(rs)) }
  _comBTabN850              (req, res) { this.comb_model._comBTabN850              (req.query, rs => res.send(rs)) }
  _comBTabN850B             (req, res) { this.comb_model._comBTabN850B             (req.query, rs => res.send(rs)) }
  _comBTabN900              (req, res) { this.comb_model._comBTabN900              (req.query, rs => res.send(rs)) }
  _comBTabQ300              (req, res) { this.comb_model._comBTabQ300              (req.query, rs => res.send(rs)) }
  _comBTabQ350              (req, res) { this.comb_model._comBTabQ350              (req.query, rs => res.send(rs)) }
  _comBTabS200BS            (req, res) { this.comb_model._comBTabS200BS            (req.query, rs => res.send(rs)) }
  _comBTabS200_p4           (req, res) { this.comb_model._comBTabS200_p4           (req.query, rs => res.send(rs)) }
  _comBTabS200A             (req, res) { this.comb_model._comBTabS200A             (req.query, rs => res.send(rs)) }
  _comBTabS200_p2           (req, res) { this.comb_model._comBTabS200_p2           (req.query, rs => res.send(rs)) }
  _comBTabS200_p3           (req, res) { this.comb_model._comBTabS200_p3           (req.query, rs => res.send(rs)) }
  _comBTabS200BS            (req, res) { this.comb_model._comBTabS200BS            (req.query, rs => res.send(rs)) }
  _comBTabS250_p4           (req, res) { this.comb_model._comBTabS250_p4           (req.query, rs => res.send(rs)) }
  _comBTabS250_p3           (req, res) { this.comb_model._comBTabS250_p3           (req.query, rs => res.send(rs)) }
  _comBTabS250A             (req, res) { this.comb_model._comBTabS250A             (req.query, rs => res.send(rs)) }
  _comBTabS250B             (req, res) { this.comb_model._comBTabS250B             (req.query, rs => res.send(rs)) }
  _comBTabS250F             (req, res) { this.comb_model._comBTabS250F             (req.query, rs => res.send(rs)) }
  _comBTabS350              (req, res) { this.comb_model._comBTabS350              (req.query, rs => res.send(rs)) }
  _comBTabT000              (req, res) { this.comb_model._comBTabT000              (req.query, rs => res.send(rs)) }
  _comBTabT000F             (req, res) { this.comb_model._comBTabT000F             (req.query, rs => res.send(rs)) }
  _comBTabT000P             (req, res) { this.comb_model._comBTabT000P             (req.query, rs => res.send(rs)) }
  _comBTabV050              (req, res) { this.comb_model._comBTabV050              (req.query, rs => res.send(rs)) }
  _comBTabV050S             (req, res) { this.comb_model._comBTabV050S             (req.query, rs => res.send(rs)) }
  _comBTabV200F             (req, res) { this.comb_model._comBTabV200F             (req.query, rs => res.send(rs)) }
  _comBTabV200              (req, res) { this.comb_model._comBTabV200              (req.query, rs => res.send(rs)) }
  _comBTabV300              (req, res) { this.comb_model._comBTabV300              (req.query, rs => res.send(rs)) }
  _comBTabV300M             (req, res) { this.comb_model._comBTabV300M             (req.query, rs => res.send(rs)) }
  _comBTabV500C             (req, res) { this.comb_model._comBTabV500C             (req.query, rs => res.send(rs)) }
  _comBTabV500L             (req, res) { this.comb_model._comBTabV500L             (req.query, rs => res.send(rs)) }
  _comBTabV500              (req, res) { this.comb_model._comBTabV500              (req.query, rs => res.send(rs)) }
  _comBTabV750              (req, res) { this.comb_model._comBTabV750              (req.query, rs => res.send(rs)) }
  _comBTabV750M             (req, res) { this.comb_model._comBTabV750M             (req.query, rs => res.send(rs)) }
  _selectRowOfTable_p5_num  (req, res) { this.comb_model._selectRowOfTable_p5_num  (req.query, rs => res.send(rs)) }
  _selectRowOfTable_p5_str  (req, res) { this.comb_model._selectRowOfTable_p5_str  (req.query, rs => res.send(rs)) }
  _selectRowOfTable_p7_num  (req, res) { this.comb_model._selectRowOfTable_p7_num  (req.query, rs => res.send(rs)) }
  _selectRowOfTable_p7_str  (req, res) { this.comb_model._selectRowOfTable_p7_str  (req.query, rs => res.send(rs)) }
  _comBOrganizationEBS      (req, res) { this.comb_model._comBOrganizationEBS      (req.query, rs => res.send(rs)) }
  _comBTabC150K             (req, res) { this.comb_model._comBTabC150K             (req.query, rs => res.send(rs)) }
  _checkTabH200USER         (req, res) { this.comb_model._checkTabH200USER         (req.body, rs => res.send(rs)) }

}
