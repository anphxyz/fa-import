/**
 * B100 controller
 * @author Toailq - 5/12/2017
*/
const B100_MODEL = require('../../models/_b/b100_model'),
  async = require('async');
const fController = require('../fcontroller');

module.exports = class B100 {
  constructor() {
    this.b100_model = new B100_MODEL();
  }

  _listOfTabB100_p5(req, res) { this.b100_model._listOfTabB100_p5(req.query, rs => res.send(rs)) }
  _listOfTabB100_p6(req, res) { this.b100_model._listOfTabB100_p6(req.query, rs => res.send(rs)) }
  _listOfTabB100(req, res) {
    this.b100_model._listOfTabB100(req.query)
    .then(rs => res.send(rs))
    .catch(err => res.send(err))
  }
  _listOfTabB100BS(req, res) { this.b100_model._listOfTabB100BS(req.query, rs => res.send(rs)) }
  _createTabB100PM(req, res) { this.b100_model._createTabB100PM(req.body, rs => res.send(rs)) }
  _createTabB100BT(req, res) { this.b100_model._createTabB100BT(req.body, rs => res.send(rs)) }
  _updateTabB100(req, res) { this.b100_model._updateTabB100(req.body, rs => res.send(rs)) }
  _updateTabB100BT(req, res) { this.b100_model._updateTabB100BT(req.body, rs => res.send(rs)) }
  _insertTabB100(req, res) { this.b100_model._insertTabB100(req.body, rs => res.send(rs)) }
  _stornoTabB100(req, res) { this.b100_model._stornoTabB100(req.body, rs => res.send(rs)) }
  _updateTabB100PMA(req, res) { this.b100_model._updateTabB100PMA(req.body, rs => res.send(rs)) }

  _insertTabB100PM(req, res) { this.b100_model._insertTabB100PM(req.body, rs => res.send(rs)) }
  _insertTabB100BT(req, res) { this.b100_model._insertTabB100BT(req.body, rs => res.send(rs)) }
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  _makeBigImport(req, res) {

    const { JSON: jsonData, pvBV003, pnFH200, pnFH000, pvLOGIN } = req.body,
      dataImport = typeof jsonData === 'string' ? JSON.parse(jsonData) : {},
      {
        PS200: pnFS200, SV201: pvSV201,
        tab_M, tab_E, tab_T, tab_O
      } = dataImport;

    const concatPM = this.concatPMCreator({ pnFS200, pvSV201, pvBV003, pnFH200, pnFH000, pvLOGIN })
    const concatBT = this.concatBTCreator({ pnFS200, pvSV201, pvBV003, pnFH200, pnFH000, pvLOGIN })
    async.parallel({
      rsM: callbackM => { concatPM(tab_M, callbackM) },
      rsE: callbackE => { concatPM(tab_E, callbackE) },
      rsO: callbackO => { concatBT(tab_O, callbackO) },
      rsT: callbackT => { concatBT(tab_T, callbackT) },
    }, (err, rs) => {
      if (err) {
        throw new Error(err);
        res.send({ status: 'error' })
      }
      res.send({ status: 'success' })
      log.info(rs, '->import DONE:', pvSV201)
    })
  }

  concatPMCreator({ pnFS200, pvSV201, pvBV003, pnFH200, pnFH000, pvLOGIN }) {
    return (tabPM, tabPMCallback) => {
      async.concat(tabPM, (row, callback) => {
        const {
          FB100: pnFB100, BV101: pvBV101, BN102: pnBN102, BV106: pvBV106,
          BV108: pvBV108, BN112: pnBN112, BN113: pnBN113, BV001: pvBV001,
          VV501: pvVV501, FB150: pnFB150, BV151: pvBV151, BN152: pnBN152,
          BV154: pvBV154, BN158: pnBN158, SV251: pvSV251, FS250: pnFS250
        } = row;
        this.b100_model._insertTabB100PM({
          pnFB100, pvBV101, pnBN102, pvBV106, pvBV108, pnBN112, pnBN113,
          pvBV001, pvVV501, pnFB150, pvBV151, pnBN152, pvBV154, pnBN158,
          pvSV251, pnFS250,
          pnFS200, pvSV201, pvBV003, pnFH200, pnFH000, pvLOGIN
        }, data => { callback(null, data) })
      }, (err, result) => {
        if (err) throw new Error(err);
        tabPMCallback(err, result)
      })
    }
  }
  concatBTCreator({ pnFS200, pvSV201, pvBV003, pnFH200, pnFH000, pvLOGIN }) {
    return (tabBT, tabBTCallback) => {
      async.concat(tabBT, (row, callback) => {
        const {
          FB100: pnFB100, BV101: pvBV101, BN102: pnBN102, BN105: pnBN105,
          BN106: pnBN106, BV107: pvBV107, BV108: pvBV108, BV109: pvBV109,
          BV110: pvBV110, BN112: pnBN112, BN113: pnBN113, BV001: pvBV001,
          VV501: pvVV501, FB150: pnFB150, BV151: pvBV151, BN152: pnBN152,
          BV153: pvBV153, BV155: pvBV155, BN158: pnBN158, SV251: pvSV251,
          FS250: pnFS250
        } = row;
        this.b100_model._insertTabB100BT({
          pnFB100, pvBV101, pnBN102, pnBN105, pnBN106, pvBV107, pvBV108,
          pvBV109, pvBV110, pnBN112, pnBN113, pvBV001, pvVV501, pnFB150,
          pvBV151, pnBN152, pvBV153, pvBV155, pnBN158, pnFS250, pvSV251,
          pnFS200, pvSV201, pvBV003, pnFH200, pnFH000, pvLOGIN
        }, data => { callback(null, data) })
      }, (err, result) => {
        if (err) throw new Error(err);
        tabBTCallback(err, result)
      })
    }
  }
}
