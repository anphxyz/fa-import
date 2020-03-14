<?php

/**
 * @author: Linhnc - 31/07/2018
 * @controller: Q400
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

class Q400 extends Facilio{

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */
  public function list_oftabq400_p1(){
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ400_P1();
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
    * danh sach nhung chuc nang su dung chua co trong nhom quyen Q350
    */
  public function list_oftabq400_p2(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ400_P2($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
    * danh sach nhung nhom nguoi su dung
    */
  public function list_oftabq400_p4(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ400_P4($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
    * -- Tao moi quyen su dung
    */
  public function create_data_q400(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => -1);
    $rs = $this->createDataQ400($post);
    if ($rs > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  public function storno_data_q400(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => -1);
    $rs = $this->stornoDataQ400($post);
    if ($rs > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }


  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */
  private function listOfTabQ400_P1(){
    $get['QV101'] = $this->_fuser['QV101'];
    $this->load->model('Q400_model', 'Q400_MODEL');
    return $this->Q400_MODEL->list_oftabq400_p1($get);
  }

  private function listOfTabQ400_P2($get){
    $this->load->model('Q400_model', 'Q400_MODEL');
    return $this->Q400_MODEL->list_oftabq400_p2($get);
  }

  private function listOfTabQ400_P4($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Q400_model', 'Q400_MODEL');
    return $this->Q400_MODEL->list_oftabq400_p2($get);
  }

  private function createDataQ400($post){
    $post['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Adm_model', 'ADM_MODEL');
    return $this->ADM_MODEL->create_data_q400($post);
  }

  private function stornoDataQ400($post){
    $this->load->model('Adm_model', 'ADM_MODEL');
    return $this->ADM_MODEL->storno_data_q400($post);
  }

}

