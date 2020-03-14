/**
 * V750 controller
 * @author Toailq - 6/12/2017
*/
const V750_MODEL = require('../../models/_v/v750_model');

const FController = require('../fcontroller');

module.exports = class V750 {
  constructor() {
    this.v750_model = new V750_MODEL();
  }
  _listOfDepartment(req, res) { this.v750_model._listOfDepartment(req.query, rs => res.send(rs)) }
  _listOfEmployee(req, res) { this.v750_model._listOfEmployee(req.query, rs => res.send(rs)) }
  _listOfTabV750(req, res) { this.v750_model._listOfTabV750(req.query, rs => res.send(rs)) }
  _listOfTabV750HIS(req, res) { this.v750_model._listOfTabV750HIS(req.query, rs => res.send(rs)) }
  _checkAsseTCodeEBS(req, res) { this.v750_model._checkAsseTCodeEBS(req.body, rs => res.send(rs)) }
  _comBOrganizationEBS(req, res) { this.v750_model._comBOrganizationEBS(req.body, rs => res.send(rs)) }
  _confirmTabV750(req, res) { this.v750_model._confirmTabV750(req.body, rs => res.send(rs)) }
  _createTabV750V650(req, res) { this.v750_model._createTabV750V650(req.body, rs => res.send(rs)) }
  _fACILIOUPDATEBS(req, res) { this.v750_model._fACILIOUPDATEBS(req.body, rs => res.send(rs)) }
  _insertTabV750(req, res) { this.v750_model._insertTabV750(req.body, rs => res.send(rs)) }
  _sACILIOSEND2EBS(req, res) { this.v750_model._sACILIOSEND2EBS(req.body, rs => res.send(rs)) }
  _sENDREQUEST2EBS(req, res) { this.v750_model._sENDREQUEST2EBS(req.body, rs => res.send(rs)) }
  _stornoTabV750(req, res) { this.v750_model._stornoTabV750(req.body, rs => res.send(rs)) }
  _stornoTabV750EBS(req, res) { this.v750_model._stornoTabV750EBS(req.body, rs => res.send(rs)) }
  _UpdateTabV750EBS_p2(req, res) { this.v750_model._UpdateTabV750EBS_p2(req.body, rs => res.send(rs)) }
  _UpdateTabV750EBS_p3(req, res) { this.v750_model._UpdateTabV750EBS_p3(req.body, rs => res.send(rs)) }
}