<?php
/**
 * @author: Linhnc - 21/07/2018
 * @controller: C400
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

class C400 extends Facilio{

  public function __construct() {
    parent::__construct();
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */
  /**
   * @Description: Nguyên nhân
   */
  public function list_oftabc400(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $rs = $this->listOfTabC400($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
      $res['message'] = lang('_load_list_success');
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */
  private function listOfTabC400($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $get['FH200S'] = $this->_FH200S;
    $this->load->model('C400_model', 'C400_MODEL');    
    return $this->C400_MODEL->list_oftabc400($get);
  }

}