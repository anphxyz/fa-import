<?php

/**
 * @Author: hyn
 * @Create: 06/03/2018
 * @Controller: N900
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

class N900 extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[public_function]*************************** */
  /*   * **************************************************************** */

  public function index() {
    // $modules = array('default', 'modules.n900');
    // $this->loadTemplateAnph(lang('_employee_group'), 'n900_view_ad', 'n900-wrapper admin-page', 'hyn', $modules);
  }

  public function list_n900($params = array(), $return = false){
    $get = $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'data'=> array());
    $result = $this->lstOfTabN900($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    if(!!$return) return $result;
    else echo json_encode($res);
  }
  // nhân viên thuộc tổ nhóm
  public function list_n900r($params = array(), $return = false){
    $get = !empty($params) ? $params : $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'data'=> array());
    $result = $this->lstOfTabN900R($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    if($return) return $result;
    else echo json_encode($res);
  }

  // list nhân viên trực thuộc quản lý
  public function list_n900l($params = array(), $return = false){
    $get = !empty($params) ? $params : $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'data'=> array());
    $result = $this->lstOfTabN900L($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    if($return) return $result;
    else echo json_encode($res);
  }


  public function list_n900rl(){
    $get = $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'param'=> $get);    
    $lst_n900r = $this->lstOfTabN900R($get);
    $lst_n900l = $this->lstOfTabN900L($get);
    $res['data']['n900r'] = count($lst_n900r)>0 ? $lst_n900r : array();
    $res['data']['n900l'] = count($lst_n900l)>0 ? $lst_n900l : array();
    if(count($lst_n900l)>0 || count($lst_n900r)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
    }
    echo json_encode($res);
  }

  // add new / edit employee to specific group
  public function insert_n900() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    $result = $this->insertTabN900($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  // remove employee from specific group
  public function storno_n900() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    $result = $this->stornoTabN900($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  

  /*   * **************************************************************** */
  /*   * *****************************[privateFunction]****************** */
  /*   * **************************************************************** */
  
  
  private function lstOfTabN900($get){
    $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : 0;
    $pnNN104 = isset($get['pnNN104']) ? $get['pnNN104'] : 0;
    $this->load->model('N900_model', 'N900_MODEL');
    return $this->N900_MODEL->list_oftabn900( $this->_fuser['QV101'], APP_MODULE, $this->_FH200S, $pnFN850, $pnNN104);
  }
  
  private function lstOfTabN900R($get){
    $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : 0;
    $pvNV901 = isset($get['pvNV901']) ? $get['pvNV901'] : 'N';
    $this->load->model('N900_model', 'N900_MODEL');        
    return $this->N900_MODEL->list_oftabn900r( APP_MODULE, $this->_FH200S, $pnFN850, $pvNV901, $this->_fuser['QV101']);
  }
  
  private function lstOfTabN900L($get){
    $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : 0;
    $pvNV901 = isset($get['pvNV901']) ? $get['pvNV901'] : 'N';
    $this->load->model('N900_model', 'N900_MODEL');        
    return $this->N900_MODEL->list_oftabn900l( APP_MODULE, $this->_FH200S, $pnFN850, $pvNV901, $this->_fuser['QV101']);
  }
  
  private function insertTabN900($post){
    $pnFN100 = isset($post['FN100']) ? $post['FN100'] : 0;
    $pnFN850 = isset($post['FN850']) ? $post['FN850'] : 0;
    $pvNV901 = isset($post['NV901']) ? $post['NV901'] : null;
    $pvNV902 = isset($post['NV902']) ? $post['NV902'] : null;
    $pvNV903 = isset($post['NV903']) ? $post['NV903'] : null;
    $pvNV904 = isset($post['NV904']) ? $post['NV904'] : null;
    $this->load->model('N900_model', 'N900_MODEL');
    return $this->N900_MODEL->insert_tabn900($pnFN100, $pnFN850, $pvNV901, $pvNV902, $pvNV903, $pvNV904, $this->_fuser['QV101']);
  }
  
  private function stornoTabN900($get){
    $pnFN100 = isset($get['FN100']) ? $get['FN100'] : 0;
    $pnFN850 = isset($get['FN850']) ? $get['FN850'] : 0;
    $this->load->model('N900_model', 'N900_MODEL');
    return $this->N900_MODEL->storno_tabn900($pnFN100, $pnFN850, $this->_fuser['QV101']);
  }

  /* ====================================================== */
  /* ====================================================== */

  public function new_list_n900($params = array(), $return = false){
    $get = $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'data'=> array());
    $result = $this->new_lstOfTabN900($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    if(!!$return) return $result;
    else echo json_encode($res);
  }
  // nhân viên thuộc tổ nhóm
  public function new_list_n900r($params = array(), $return = false){
    $get = !empty($params) ? $params : $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'data'=> array());
    $result = $this->new_lstOfTabN900R($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    if($return) return $result;
    else echo json_encode($res);
  }

  // list nhân viên trực thuộc quản lý
  public function new_list_n900l($params = array(), $return = false){
    $get = !empty($params) ? $params : $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'data'=> array());
    $result = $this->new_lstOfTabN900L($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    if($return) return $result;
    else echo json_encode($res);
  }


  public function new_list_n900rl(){
    $get = $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'param'=> $get);    
    $lst_n900r = $this->lstOfTabN900R($get);
    $lst_n900l = $this->lstOfTabN900L($get);
    $res['data']['n900r'] = count($lst_n900r)>0 ? $lst_n900r : array();
    $res['data']['n900l'] = count($lst_n900l)>0 ? $lst_n900l : array();
    if(count($lst_n900l)>0 || count($lst_n900r)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
    }
    echo json_encode($res);
  }

  // add new / edit employee to specific group
  public function new_insert_n900() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    $result = $this->new_insertTabN900($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  // remove employee from specific group
  public function new_storno_n900() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    $result = $this->new_stornoTabN900($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  

  /*   * **************************************************************** */
  /*   * *****************************[privateFunction]****************** */
  /*   * **************************************************************** */
  
  
  private function new_lstOfTabN900($get){
    $get['pnFH200'] = isset($get['pnFH200']) ? $get['pnFH200'] : $this->_FH200S;
    $get['pvLOGIN'] = isset($get['pvLOGIN']) ? $get['pvLOGIN'] : $this->_fuser['QV101'];

    $this->load->model('N900_model', 'N900_MODEL');
    return $this->N900_MODEL->new_list_oftabn900($get);
  }
  
  private function new_lstOfTabN900R($get){
    $get['pnFH200'] = isset($get['pnFH200']) ? $get['pnFH200'] : $this->_FH200S;
    $get['pvLOGIN'] = isset($get['pvLOGIN']) ? $get['pvLOGIN'] : $this->_fuser['QV101'];    
    
    $this->load->model('N900_model', 'N900_MODEL');        
    return $this->N900_MODEL->new_list_oftabn900r($get);
  }
  
  private function new_lstOfTabN900L($get){
    $get['pnFH200'] = isset($get['pnFH200']) ? $get['pnFH200'] : $this->_FH200S;
    $get['pvLOGIN'] = isset($get['pvLOGIN']) ? $get['pvLOGIN'] : $this->_fuser['QV101']; 
    $this->load->model('N900_model', 'N900_MODEL');
    return $this->N900_MODEL->new_list_oftabn900l($get);
  }
  
  private function new_insertTabN900($post){
    $post['pvLOGIN'] = isset($post['pvLOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101']; 

    $this->load->model('N900_model', 'N900_MODEL');
    return $this->N900_MODEL->new_insert_tabn900($post);
  }
  
  private function new_stornoTabN900($post){
    $post['pvLOGIN'] = isset($post['pvLOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101']; 

    $this->load->model('N900_model', 'N900_MODEL');
    return $this->N900_MODEL->new_storno_tabn900($post);
  }
  
}