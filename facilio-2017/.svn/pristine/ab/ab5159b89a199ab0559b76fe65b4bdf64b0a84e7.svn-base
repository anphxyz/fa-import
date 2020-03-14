<?php

/**
 * @Author: Linhnc
 * @Create: 17/01/2018
 * @Controller: B200BT
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class B200BT extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  public function index() {
    $modules = array('modules.b200bt');
    //$this->loadTemplate(lang('_lubrication_maintenance'), 'b200bt_view', $modules);
    $this->loadTemplateAnph(lang('_lubrication_maintenance'), 'b200bt_view', '', 'b200', $modules);
  }

  /**
   * @Input: $_GET
   * @Output: array
   * @Diescription: ds bao tri boi tron
   */
  public function list_b200bt() {
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabB200bt($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * @Input: pvPB200
   * @Output: number
   * @Diescription: xoa cv bao tri BT
   */
  public function storno_b200() {
    $rs = null;
    $res = array('status' => 'error', 'message' => lang('_delete_failed'));
    $post = filter_input_array(INPUT_POST);
    foreach ($post['data'] as $value) {
      $rs = $this->stornoTabB200($value);
    }
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_delete_success');
    }
    echo json_encode($res);
  }

  /**
   * @Input: pnFC600, pnFIRSTROW
   * @Output: array
   * @Diescription: ds bao cao
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

  // Func load list B275
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
   * @Output: number
   * @Diescription: cap nhat thoi gian du kien
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

  // Func load list B050E
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
   * @Input: $_POST
   * @Output: number
   * @Diescription: bao cao cong viec
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

  // Bao cao nhanh
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

  private function listOfTabB200BT($get) {
    $get['pnFN850'] = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
    $get['pnFH200'] = $this->_FH200S;
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $get['pvSTATUS'] = $this->_fuser['STATUS'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->list_oftabb200bt($get);
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
