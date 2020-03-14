<?php

/**
 * @Author: Linhnc
 * @Create: 23/01/2018
 * @Controller: B350
 */
defined('BASEPATH') or exit('No direct script access allowed');
require_once APPPATH . "controllers/Facilio.php";

class B350 extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  public function index() {
    $data = $this->combTabN850();
    $this->loadTemplateAnph(lang('_maintenance_of_limits'), 'b350_view', 'b350-content', 'b200', array('modules.b350'), $data);
  }

  /**
   * @Input: 
   * @Output: array
   * @Diescription: DS bao tri theo han muc
   */
  public function list_b350() {
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabB350($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * @Input: pnFB050, pnBN351
   * @Output: 1: Thanh cong
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

  private function listOfTabB350($get) {
    $get['pnFN850'] = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B350_model', 'B350_MODEL');
    return $this->B350_MODEL->list_oftabb350($get);
  }

  private function updateTabB350B($post) {
    $post['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B350_model', 'B350_MODEL');
    return $this->B350_MODEL->update_tabb350b($post);
  }

  private function combTabN850(){
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_TabN850(APP_MODULE, $this->_FH200S, $this->_fuser['QV101']);
  }

}
