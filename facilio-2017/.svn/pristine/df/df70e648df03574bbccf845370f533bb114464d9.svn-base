<?php
/**
 * @author: Linhnc - 21/07/2018
 * @controller: N400
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

class N400 extends Facilio{

  public function __construct() {
    parent::__construct();
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  /**
   * @Diescription: Nhóm theo khu vực
   */
  public function list_oftabn400(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $rs = $this->listOfTabN400($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }


  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */

  private function listOfTabN400($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $get['FH200'] = $this->_FH200S;
    $this->load->model('N400_model', 'N400_MODEL');
    return $this->N400_MODEL->list_oftabn400($get);
  }

}