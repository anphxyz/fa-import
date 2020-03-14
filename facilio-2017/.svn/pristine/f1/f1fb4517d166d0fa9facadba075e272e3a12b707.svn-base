<?php

/**
 * @Author: Linhnc
 * @Create: 23/01/2018
 * @Controller: B350BT
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class B350BT extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  public function index() {
    $this->loadTemplateAnph(lang('_maintenance_of_limits'), 'b350bt_view', '', 'b200', array('modules.b350bt'));
  }

  /**
   * @Input: 
   * @Output: array
   * @Diescription: DS bao tri theo han muc boi tron
   */
  public function list_b350bt() {
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabB350BT($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * @Input: 
   * @Output: array
   * @Diescription: Cap nhat so gio hd
   */
  public function update_b350b() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    if ($this->updateTabB350B($post) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * *****************************[PRIVATE]************************** */
  /*   * **************************************************************** */

  private function listOfTabB350BT($get) {
    $get['pnFN850'] = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B350_model', 'B350_MODEL');
    return $this->B350_MODEL->list_oftabb350bt($get);
  }

  private function updateTabB350B($post) {
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B350_model', 'B350_MODEL');
    return $this->B350_MODEL->update_tabb350b($post);
  }

}
