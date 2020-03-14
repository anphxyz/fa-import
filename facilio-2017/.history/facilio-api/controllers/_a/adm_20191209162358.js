/**
 * ADM controller
 * @author Toailq - 6/12/2017
*/
const ADM_MODEL = require('../../models/_a/adm_model');

const FController = require('../fcontroller');

module.exports = class ADM {
  constructor() {
    this.adm_model = new ADM_MODEL();
  }
  _execRechteListe    (req, res) { this.adm_model._execRechteListe    (req.query, rs => res.send(rs)) }
  _checkUserLogin_p2  (req, res) { this.adm_model._checkUserLogin_p2  (req.body, rs => res.send(rs)) }
  _checkUserLogin_p3  (req, res) { this.adm_model._checkUserLogin_p3  (req.body, rs => res.send(rs)) }
  _checkUserLoginHT   (req, res) { this.adm_model._checkUserLoginHT   (req.body, rs => res.send(rs)) }
  _createDataQ050     (req, res) { this.adm_model._createDataQ050     (req.body, rs => res.send(rs)) }
  _stornoTabQ050      (req, res) { this.adm_model._stornoTabQ050      (req.body, rs => res.send(rs)) }
  _createDataQ100     (req, res) { this.adm_model._createDataQ100     (req.body, rs => res.send(rs)) }
  _changeTabQ100      (req, res) { this.adm_model._changeTabQ100      (req.body, rs => res.send(rs)) }
  _createDataQ150_p4  (req, res) { this.adm_model._createDataQ150_p4  (req.body, rs => res.send(rs)) }
  _createDataQ150_p3  (req, res) { this.adm_model._createDataQ150_p3  (req.body, rs => res.send(rs)) }
  _stornoDataQ150     (req, res) { this.adm_model._stornoDataQ150     (req.body, rs => res.send(rs)) }
  _createDataQ175     (req, res) { this.adm_model._createDataQ175     (req.body, rs => res.send(rs)) }
  _stornoDataQ175     (req, res) { this.adm_model._stornoDataQ175     (req.body, rs => res.send(rs)) }
  _createDataQ200_p4  (req, res) { this.adm_model._createDataQ200_p4  (req.body, rs => res.send(rs)) }
  _createDataQ200_p3  (req, res) { this.adm_model._createDataQ200_p3  (req.body, rs => res.send(rs)) }
  _stornoDataQ200     (req, res) { this.adm_model._stornoDataQ200     (req.body, rs => res.send(rs)) }
  _createDataQ300     (req, res) { this.adm_model._createDataQ300     (req.body, rs => res.send(rs)) }
  _stornoDataQ300     (req, res) { this.adm_model._stornoDataQ300     (req.body, rs => res.send(rs)) }
  _createDataQ350     (req, res) { this.adm_model._createDataQ350     (req.body, rs => res.send(rs)) }
  _stornoDataQ350     (req, res) { this.adm_model._stornoDataQ350     (req.body, rs => res.send(rs)) }
  _createDataQ400     (req, res) { this.adm_model._createDataQ400     (req.body, rs => res.send(rs)) }
  _copyDataOfQ400     (req, res) { this.adm_model._copyDataOfQ400     (req.body, rs => res.send(rs)) }
  _stornoDataQ400     (req, res) { this.adm_model._stornoDataQ400     (req.body, rs => res.send(rs)) }
  _canExecuteFunc     (req, res) { this.adm_model._canExecuteFunc     (req.body, rs => res.send(rs)) }
  _createDataQ950     (req, res) { this.adm_model._createDataQ950     (req.body, rs => res.send(rs)) }
  _stornoDataQ950     (req, res) { this.adm_model._stornoDataQ950     (req.body, rs => res.send(rs)) }
  _haveRight2Exec     (req, res) { this.adm_model._haveRight2Exec     (req.body, rs => res.send(rs)) }
}