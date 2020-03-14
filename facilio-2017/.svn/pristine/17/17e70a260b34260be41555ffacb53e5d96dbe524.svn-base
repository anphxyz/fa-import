<?php

/**
 * @author: Linhnc - 23/07/2018
 * @controller: V200
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

class V200 extends Facilio{

  public function __construct() {
    parent::__construct();
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  /**
   * @Description: Đơn vị tính
   */
  public function lst_oftabv200fac(){
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabV200FAC();
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }


  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */
  private function listOfTabV200FAC(){
    $get['FH200'] = $this->_FH200S;
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('V200_model', 'V200_MODEL');
    return $this->V200_MODEL->lst_oftabv200fac($get);
  }

}