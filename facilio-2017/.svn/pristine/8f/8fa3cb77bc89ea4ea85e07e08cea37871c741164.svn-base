<?php
/**
 * @author: Linhnc - 21/07/2018
 * @controller: B050
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

class B050 extends Facilio{

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

  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */
  
  private function listOfTabB050HT($get){
    $get['FH200'] = $this->_FH200S;
    $get['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B050_model', 'B050_MODEL');
    return $this->B050_MODEL->lst_oftabb050ht($get);
  }

}

