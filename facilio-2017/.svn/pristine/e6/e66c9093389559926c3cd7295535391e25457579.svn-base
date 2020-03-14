<?php

/**
 * @author: Linhnc - 31/07/2018
 * @controller: Q150
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

class Q150 extends Facilio {

  public function __construct() {
    parent::__construct();
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  /**
  * danh sach nhung chuc nang KHONG thuoc nhom nguoi su dung
  */
  public function list_oftabq150n(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ150N($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
  * danh sach nhung chuc nang KHONG thuoc nhom nguoi su dung
  */
  public function list_oftabq150l(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ150L($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  public function list_oftabq150r(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ150R($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
    * -- Tao moi moi lien quan giua nhom lam viec va chuc nang cong viec
  */
  public function create_data_q150_p3(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => -1);
    $rs = $this->createDataQ150_P3($post);
    if ($rs > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * -- Tao moi moi lien quan giua nhom lam viec va chuc nang cong viec
  */
  public function create_data_q150_p4(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => -1);
    $rs = $this->createDataQ150_P4($post);
    if ($rs > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
   * -- sua ddoi moi lien quan giua nhom lam viec va chuc nang cong viec
  */
  public function storno_data_q150(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'data' => -1);
    $rs = $this->stornoDataQ150($post);
    if ($rs > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * *****************************[PRIVATE]************************** */
  /*   * **************************************************************** */
  private function listOfTabQ150N($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Q150_model', 'Q150_MODEL');
    return $this->Q150_MODEL->list_oftabq150n($get);
  }

  private function listOfTabQ150L($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Q150_model', 'Q150_MODEL');
    return $this->Q150_MODEL->list_oftabq150l($get);
  }

  private function listOfTabQ150r($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Q150_model', 'Q150_MODEL');
    return $this->Q150_MODEL->list_oftabq150r($get);
  }

  private function createDataQ150_P3($post){
    $post['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Adm_model', 'ADM_MODEL');
    return $this->ADM_MODEL->create_data_q150_p3($post);
  }

  private function createDataQ150_P4($post){
    $post['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Adm_model', 'ADM_MODEL');
    return $this->ADM_MODEL->create_data_q150_p4($post);
  }
  
  private function stornoDataQ150($post){
    $post['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Adm_model', 'ADM_MODEL');
    return $this->ADM_MODEL->storno_data_q150($post);
  }

}