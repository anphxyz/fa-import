<?php

/**
 * @author: Linhnc - 31/07/2018
 * @controller: Q200
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
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */
  /**
  * danh sach nhan vien KHONG thuoc nhom nguoi su dung Q350
  */
  public function list_oftabq200n(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ200N($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
  * danh sach nhan vien thuoc nhom nguoi su dung Q350
  */
  public function list_oftabq200(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ200($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
  * -- Them nguoi su dung vao nhom lam viec
  */
  public function create_data_q200_p3(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => -1);
    $rs = $this->createDataQ200_P3($post);
    if ($rs > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * -- Them nguoi su dung vao nhom lam viec
  */
  public function create_data_q200_p4(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => -1);
    $rs = $this->createDataQ200_P4($post);
    if ($rs > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * -- huy nguoi su dung FN100 thuoc nhom quyen Q350
  */
  public function storno_data_q200(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => -1);
    $rs = $this->stornoDataQ200($post);
    if ($rs > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }


  /*   * **************************************************************** */
  /*   * *****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */
  private function listOfTabQ200N($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $get['FH200'] = $this->_FH200S;
    $this->load->model('Q200_model', 'Q200_MODEL');
    return $this->Q200_MODEL->list_oftabq200n($get);
  }

  private function listOfTabQ200($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Q200_model', 'Q200_MODEL');
    return $this->Q200_MODEL->list_oftabq200n($get);
  }

  private function createDataQ200_P3($post){
    $post['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Adm_model', 'ADM_MODEL');
    return $this->ADM_MODEL->create_data_q200_p3($post);
  }

  private function createDataQ200_P4($post){
    $post['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Adm_model', 'ADM_MODEL');
    return $this->ADM_MODEL->create_data_q200_p4($post);
  }

  private function stornoDataQ200($post){
    $post['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Adm_model', 'ADM_MODEL');
    return $this->ADM_MODEL->storno_data_q200($post);
  }

}