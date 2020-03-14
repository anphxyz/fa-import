<?php

/**
 * @Author: Linhnc
 * @Create: 24/1/2018
 * @Controller: B200TY
 */
defined('BASEPATH') or exit('No direct script access allowed');
require_once APPPATH . "controllers/Facilio.php";

class B200TY extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  public function index() {
    $modules = array('modules.b200ty');
    //$this->loadTemplate(lang('_critical_work'), 'b200ty_view', $modules);
    $this->loadTemplateAnph(lang('_critical_work'), 'b200ty_view', '', 'b200', $modules);
  }

  // Func load list B200
  public function list_b200ty() {
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabB200TY($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  // Func load comb N100L
  public function comb_n100l() {
    $get = $this->input->get();
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $rs = $this->combTabN100L($get);
    $item_first = array('VAL' => "ALL", 'LABEL' => lang('_all'), 'GRPID' => $this->_fuser['GRPID']);
    array_unshift($rs, $item_first);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  // Func load list C300C
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

  // Func cap nhat tg du kien
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

  // Func bao cao cong viec
  public function insert_c300() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_error_insert'));
    if ($this->insertTabC300($post) >= 1) {
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */

  private function listOfTabB200TY($post) {
    $post['pvSTATUS'] = $this->_fuser['STATUS'];
    $post['pnFH200'] = $this->_FH200S;
    $post['pnFN850'] = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B200_model', 'B200_MODEL');
    return $this->B200_MODEL->list_oftabb200ty($post);
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

  private function comBTabN100L($get) {
    $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_tabn100l_p4(APP_MODULE, $this->_FH200S, $this->_fuser['QV101'], $pnFN850);
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

}
