<?php

/**
 * @author: Linhnc - 31/07/2018
 * @controller: Q350
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

class Q350 extends Facilio{

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */
  public function list_oftabq350(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabQ350($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }


  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */
  private function listOfTabQ350($get){
    $get['FH200'] = $this->_FH200S;
    $this->load->model('Q350_model', 'Q350_MODEL');
    return $this->Q350_MODEL->list_oftabq350($get);
  }

}
