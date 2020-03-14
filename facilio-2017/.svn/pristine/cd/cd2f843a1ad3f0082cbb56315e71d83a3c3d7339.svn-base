<?php

/**
 * @author: Linhnc - 23/07/2018
 * @controller: B000
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

class B000 extends Facilio{

  public function __construct() {
    parent::__construct();
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  /**
   * @Description: Đơn vị bảo trì
   */
  public function lst_oftabb000(){
    $get = $this->input->get();
    $res = array('status' => 'error', 'data' => []);
    $rs = $this->listOfTabB000($get);
    if (count($rs) > 0) {
      $res['status'] = 'success';
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  public function insert_tabb000(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    if ($this->insertTabB000($post) === 1) {
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
    }
    echo json_encode($res);
  }

  public function storno_tabb000(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    if ($this->stornoTabB000($post) === 1) {
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
    }
    echo json_encode($res);
  }


  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */
  private function listOfTabB000($get){
    $get['LOGIN'] = $this->_fuser['QV101'];
    $get['FH200S'] = $this->_FH200S;
    $this->load->model('B000_model', 'B000_MODEL');
    return $this->B000_MODEL->lst_oftabb000($get);
  }

  private function insertTabB000($post){
    $post['LOGIN'] = $this->_fuser['QV101'];
    $post['FH200'] = $this->_FH200S;
    $this->load->model('B000_model', 'B000_MODEL');
    return $this->B000_MODEL->insert_tabb000($post);
  }

  private function stornoTabB000($post){
    $post['LOGIN'] = $this->_fuser['QV101'];
    $this->load->model('B000_model', 'B000_MODEL');
    return $this->B000_MODEL->storno_tabb000($post);
  }

}

