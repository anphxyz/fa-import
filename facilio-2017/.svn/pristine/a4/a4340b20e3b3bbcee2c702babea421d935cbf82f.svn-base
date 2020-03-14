<?php

/**
 * @Author: hyn
 * @Create: 06/03/2018
 * @Controller: C050
 * 
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

class C050 extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
    $this->load->helper('my_helper');
  }

  /*   * **************************************************************** */
  /*   * *****************************[public_function]*************************** */
  /*   * **************************************************************** */

  public function index() {
    $data = array(
      'add' => false,
      'dropdown' => false,
      'parent-menu' => lang('_employee'),
      'child-menu' => lang('_employee_group'),
    );
    $modules = array('default', 'modules.c050');
    $this->loadTemplateAnph(lang('_employee_group'), 'c050_view_ad', 'c050-wrapper admin-page', 'hyn', $modules, $data);
  }

  public function test(){
    $get = $this->input->get();
    $dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', $get['date']);
    $obj = new DateTime($dateTime);
    $obj->setTimezone(new DateTimeZone('Europe/Berlin'));
    // $res = $obj->format('Y-m-d\TH:i:sP');
    echo json_encode($obj);
  }


  /**
   * @Description: Lich lam viec
   */
  public function list_c050(){
    $get = $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'param'=> $get, 'uri'=> $_SERVER['REQUEST_URI']);
    $result = $this->lstOfTabC050($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }
   
  

  public function insert_c050() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'), 'params' => $post);
    $result = $this->insertTabC050($post);
    if(count($result) > 0){
      $res['message'] = lang('_update_success');
      $res['status'] = 'success';
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  public function storno_c050() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'), 'params' => $post);
    $result = $this->stornoTabC050($post);
    if(count($result) > 0){
      if($result>0){
        $res['message'] = lang('_update_success');
      }
      $res['status'] = 'success';
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  public function utc(){
    $get = $this->input->get();
    $date = $this->date($get['date']);
    $res = array('param'=> $get, 'date' =>$date);
    echo json_encode($res);
  }

  protected function date($date){
    $obj = new DateTime($date); //
    $obj->setTimezone(new DateTimeZone('UTC'));
    return  $obj->format('Y-m-d\TH:i:s\Z');
  }

  /*   * **************************************************************** */
  /*   * *****************************[privateFunction]****************** */
  /*   * **************************************************************** */
  
  
  private function lstOfTabC050($get){
    $get['pdCD053'] = isset($get['pdCD053']) ? toUTC($get['pdCD053']) : toUTC();
    $get['pdCD054'] = isset($get['pdCD054']) ? toUTC($get['pdCD054']) : toUTC();
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $get['pnFH200'] = $this->_FH200S;
    $this->load->model('C050_model', 'C050_MODEL');    
    return $this->C050_MODEL->list_oftabC050($get);
  }
  
  private function insertTabC050($post){
    $pnPC050 = isset($post['pnPC050']) ? $post['pnPC050'] : 0;
    $pvCV051 = isset($post['pvCV051']) ? $post['pvCV051'] : null;
    $pvCV052 = isset($post['pvCV052']) ? $post['pvCV052'] : null;
    $pdCD053 = isset($post['pdCD053']) ? toUTC($post['pdCD053']) : toUTC();
    $pdCD054 = isset($post['pdCD054']) ? toUTC($post['pdCD054']) : toUTC();
    $this->load->model('C050_model', 'C050_MODEL');
    return $this->C050_MODEL->insert_tabC050(APP_MODULE, $this->_FH200S, $pnPC050, $pvCV051, $pvCV052, $pdCD053, $pdCD054, $this->_fuser['QV101']);
  }
  
  private function stornoTabC050($post){
    $pnPC050 = isset($post['pnPC050'])? $post['pnPC050']: 0;
    $this->load->model('C050_model', 'C050_MODEL');
    return $this->C050_MODEL->storno_tabC050(APP_MODULE, $this->_FH200S, $pnPC050, $this->_fuser['QV101']);
  }

  /* =========================================== */
  /* =========================================== */
  /* =========================================== */
  /* NEW CONTROLLERS */

  public function new_list_c050(){
    $get = $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'param'=> $get);
    $result = $this->new_lstOfTabC050($get);
    if(count($result)>=0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }
   
  

  public function new_insert_c050() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'), 'params' => $post);
    $result = $this->new_insertTabC050($post);
    if(count($result) >= 0){
      $res['message'] = lang('_update_success');
      $res['status'] = 'success';
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  public function new_storno_c050() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'), 'params' => $post);
    $result = $this->new_stornoTabC050($post);
    if(count($result) >= 0){
      if($result>0){
        $res['message'] = lang('_update_success');
      }
      $res['status'] = 'success';
      $res['data'] = $result;
    }
    echo json_encode($res);
  }
  
  /* NEW MODELS */

  private function new_lstOfTabC050($get){
    $get['pdCD053'] = isset($get['pdCD053']) ? toUTC($get['pdCD053']) : toUTC();
    $get['pdCD054'] = isset($get['pdCD054']) ? toUTC($get['pdCD054']) : toUTC();
    $get['pnFH200'] = isset($get['FH200']) ? $get['FH200'] : $this->_FH200S;
    $get['pvLOGIN'] = isset($get['LOGIN']) ? $get['pvLOGIN'] : $this->_fuser['QV101'];
    $this->load->model('C050_model', 'C050_MODEL');    
    return $this->C050_MODEL->new_list_oftabC050($get);
  }
  
  private function new_insertTabC050($post){
    $post['pdCD053'] = isset($post['pdCD053']) ? toUTC($post['pdCD053']) : toUTC();
    $post['pdCD054'] = isset($post['pdCD054']) ? toUTC($post['pdCD054']) : toUTC();
    $post['pnFH200'] = isset($post['pnFH200']) ? $post['pnFH200'] : $this->_FH200S;
    $post['pvLOGIN'] = isset($post['LOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101'];
    $this->load->model('C050_model', 'C050_MODEL');
    return $this->C050_MODEL->new_insert_tabC050($post);
  }
  
  private function new_stornoTabC050($post){
    $post['pnFH200'] = isset($post['pnFH200']) ? $post['pnFH200'] : $this->_FH200S;
    $post['pvLOGIN'] = isset($post['pvLOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101'];
    $this->load->model('C050_model', 'C050_MODEL');
    return $this->C050_MODEL->new_storno_tabC050($post);
  }
}