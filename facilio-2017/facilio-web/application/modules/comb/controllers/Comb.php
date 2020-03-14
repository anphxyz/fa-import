<?php

/**
 * @Author: Linhnc
 * @Create: 27/03/2018
 * @Controller: Comb
 * 
 * @standard:
 *  > module: module name, controller file name, class name :uppercase first letter
 *  > class: split to 2|[3] block: public && [protected] && private
 *  > function
 *     - private function functionName -> return required!
 *     - public function function_name
 *     - [protected] function _functionName
 *  > variable:
 *     - local: variableName
 *     - field -> follow db style
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class Comb extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  public function index() {
    
  }

  /**
   * @Input: pnFN850 or none
   * @Output: array
   * @Diescription: 
   */
  public function comb_n100g() {
    $get = $this->input->get();
    $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $result = $this->combTabN100G($pnFN850);
    $item_first = array('VAL' => "ALL", 'LABEL' => lang('_all'), 'GRPID' => $this->_fuser['GRPID']);
    array_unshift($result, $item_first);
    if (count($result) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /**
   * @Input: none
   * @Output: array
   * @Diescription: 
   */
  public function comb_n850() {
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $result = $this->combTabN850();
    if (count($result) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /**
   * @Input: none
   * @Output: array
   * @Diescription: 
   */
  public function comb_v750() {
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $result = $this->comBTabV750();
    if (count($result) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /**
   * @Input: none
   * @Output: array
   * @Diescription: 
   */
  public function comb_organization_ebs() {
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $result = $this->comBOrganizationEBS();
    if (count($result) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /**
   * @Input: none
   * @Output: array
   * @Diescription: 
   */
  public function comb_n100l() {
    $get = $this->input->get();
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $result = $this->combTabN100L($get);
    if (count($result) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */

  private function combTabN100G($pnFN850) {
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_TabN100G($pnFN850, $this->_fuser['QV101']);
  }

  private function comBTabN850() {
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_TabN850(APP_MODULE, $this->_FH200S, $this->_fuser['QV101']);
  }

  private function comBTabV750() {
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_TabV750(APP_MODULE, $this->_FH200S, $this->_fuser['QV101']);
  }

  private function comBOrganizationEBS() {
    $pnORDID = $this->_fuser['EXTID'];
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_organizationebs($pnORDID, $this->_fuser['QV101']);
  }

  private function comBTabN100L($get) {
    $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_tabn100l_p4(APP_MODULE, $this->_FH200S, $this->_fuser['QV101'], $pnFN850);
  }

}
