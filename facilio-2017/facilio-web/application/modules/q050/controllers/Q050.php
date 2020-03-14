<?php

/**
 * @author: Linhnc - 31/07/2018
 * @controller: Q050
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

class Q050 extends Facilio {

  public function __construct() {
    parent::__construct();
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  /**
    * danh sach nhan vien moi nhung chua dduoc kich hoat (QN056 = 0)
    */
  public function list_oftabq050(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ050($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }


  /*   * **************************************************************** */
  /*   * *****************************[PRIVATE]************************** */
  /*   * **************************************************************** */
  private function listOfTabQ050($get){
    $get['FH200S'] = $this->_FH200S;
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('Q050_model', 'Q050_MODEL');
    return $this->Q050_MODEL->list_oftabq050($get);
  }

}
