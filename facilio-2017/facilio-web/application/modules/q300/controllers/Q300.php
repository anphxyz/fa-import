<?php
/**
 * @author: Anph - 31/07/2018
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class Q300 extends Facilio{

  public function __construct() {
    parent::__construct();
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  /**
   * @Description: Vị trí thiết bị
   */
  public function lst_oftabb050ht(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $rs = $this->listOfTabB050HT($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
      $res['message'] = lang('_load_list_success');
    }
    echo json_encode($res);
  }

  /**
  * danh sach nhung nhom nguoi su dung
  */
  public function list_oftabq300_p2(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ300_P2($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /**
  * danh sach nhung nhom chuc nang ADMIN
  */
  public function list_oftabq300_p4(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ300_P4($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */
  
  private function listOfTabB050HT($get){
    $get['FH200'] = $this->_FH200S;
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B050_model', 'B050_MODEL');
    return $this->B050_MODEL->lst_oftabb050ht($get);
  }

  private function listOfTabQ300_P2($get){
    $this->load->model('Q300_model', 'Q300_MODEL');
    return $this->Q300_MODEL->list_oftabq300_p2($get);
  }

  private function listOfTabQ300_P4($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Q300_model', 'Q300_MODEL');
    return $this->Q300_MODEL->list_oftabq300_p4($get);
  }

}

