<?php

/**
 * @author: Linhnc - 12/12/2017
 * @controller: B200PM
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

class B200PM extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  public function index() {
    $modules = array('modules.b200pm');
    // $this->loadTemplate(lang('_regular_maintenance'), 'b200pm_view', $modules);
    $this->loadTemplateAnph(lang('_regular_maintenance'), 'b200pm_view', '', 'b200', $modules);
  }

  /**
   * @Input: pnFN850, pvUSER, pnSORT, pnDIRECTION, pnFC500
   * @Output: array
   * @Diescription: ds cong viec bt dinh ki
   */
  public function list_b200() {
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabB200($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * @Input: pvPB200
   * @Output: 1: xoa thanh cong 
   * @Diescription: xoa cv bt dinh ki
   */
  public function storno_b200() {
    $result = null;
    $response = array('status' => 'error', 'message' => lang('_delete_failed'));
    $post = filter_input_array(INPUT_POST);
    foreach ($post['data'] as $value) {
      $result = $this->stornoTabB200($value);
    }
    if (count($result) > 0) {
      $response['status'] = 'success';
      $response['message'] = lang('_delete_success');
    }
    echo json_encode($response);
  }

  /**
   * @Input: pvFB200, pnFIRSTROW
   * @Output: array 
   * @Diescription: ds bao cao cv
   */
  public function list_c300c() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabC300c($post);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * @Input: pvFB200
   * @Output: array 
   * @Diescription: 
   */
  public function list_b275() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabB275($post);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * @Input: pnFB400, pnBN404 
   * @Output: 1: thanh cong 
   * @Diescription: Cap nhat tg du kien
   */
  public function update_b400() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    if ($this->updateTabB400($post) === 1) {
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
    }
    echo json_encode($res);
  }

  /**
   * @Input: pnFB050, pnFS250, pvFC550
   * @Output: array
   * @Diescription: Chi tiet phieu cv
   */
  public function list_b050e() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabB050E($post);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * @Input: pvFB200, pvCARRAY
   * @Output: 1: thanh cong
   * @Diescription: 
   */
  public function insert_b275() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_error_insert'));
    if ($this->insertTabB275($post) === 1) {
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
    }
    echo json_encode($res);
  }

  /**
   * @Input: pvFB200, pnFC500, pdCD301, pdCD302, pvCV304, pvCV305, pvCV306, pvCV314, pnCN315, plCB317
   * @Output: 1: thanh cong
   * @Diescription: Bao cao cong viec
   */
  public function insert_c300() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_error_insert'));
    if ($this->insertTabC300($post) >= 1) {
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
    }
    echo json_encode($res);
  }

  /**
   * @Input: pvFC600, pdCD302
   * @Output: 1: thanh cong
   * @Diescription: Bao cao nhanh
   */
  public function insert_c300pm_fast() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_error_insert'));
    if ($this->insertTabC300PMFAST($post) === 1) {
      $res['status'] = 'success';
      $res['message'] = lang('_report_work_success');
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */

  private function listOfTabB200($get) {
    $get['pvSTATUS'] = $this->_fuser['STATUS'];
    $get['pnFH200'] = $this->_FH200S;
    $get['pnFN850'] = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->list_oftabb200($get);
  }

  private function listOfTabC300c($post) {
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->list_oftabc300c($post);
  }

  private function listOfTabB275($post) {
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->list_oftabb275($post['pvFB200']);
  }

  private function stornoTabB200($pvPB200) {
    $post['pvPB200'] = $pvPB200;
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->storno_tabb200($post);
  }

  private function listOfTabB050E($post) {
    $post['pvBV003'] = $this->_fuser['QV115'];
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->list_oftabb050e($post);
  }

  private function updateTabB400($post) {
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->update_tabb400($post);
  }

  private function insertTabB275($post) {
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->insert_tabb275($post);
  }

  private function insertTabC300($post) {
    $post['pvFC600'] = $post['pvFB200']; 
    $post['pnFN100'] = $this->_fuser['PN100'];
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->insert_tabc300($post);
  }

  private function insertTabC300PMFAST($post) {
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->insert_tabc300pmfast($post);
  }

}
