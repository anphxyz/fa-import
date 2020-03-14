<?php

/**
 * @author: Anph - 01/03/2018
 * @module: V050
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class V050 extends Facilio {

  public function __construct() {
    parent::__construct();
    if ($this->_checkLogin()) {
      redirect('', 'refresh');
      return;
    }
  }

  /*   * **************************************************************** */
  /*   * **************************[PUBLIC]****************************** */
  /*   * **************************************************************** */

  public function index() {
    $this->loadAdminTemplate(lang('_warehouse'), 'v050_view');
  }

  public function lst_oftabv050(){
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabV050();
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * @Description: Kho
   */
  public function lst_oftabv050fac(){
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabV050FAC();
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  public function insert_tabv050(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    if ($this->insertV050($post) === 1) {
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * **************************[PRIVATE]***************************** */
  /*   * **************************************************************** */

  private function listOfTabV050() {
    $get['FH200L'] = $this->_FH200L;
    $get['FH200S'] = $this->_FH200S;
    $get['LOGIN'] = $this->_QV101;
    $this->load->model('V050_model', 'V050_MODEL');
    return $this->V050_MODEL->lst_oftabv050($get);
  }

  private function insertV050($post) {
    $post['FH200'] = $this->_FH200S;
    $post['LOGIN'] = $this->_QV101;
    $this->load->model('V050_model', 'V050_MODEL');
    return $this->V050_MODEL->insert_tabv050($post);
  }

  private function listOfTabV050FAC(){
    $get['FH200'] = $this->_FH200S;
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('V050_model', 'V050_MODEL');
    return $this->V050_MODEL->lst_oftabv050fac($get);
  }

}
