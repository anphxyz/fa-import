<?php

/**
 * @Author: hyn
 * @Create: 06/03/2018
 * @Controller: N850 
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

class N850 extends Facilio {

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
      'add' => lang('_employee_group'),
      'dropdown' => false,
      'parent-menu' => lang('_employee'),
      'child-menu' => lang('_employee_group'),
    );
    $modules = array('default', 'modules.n850');
    $this->loadTemplateAnph(lang('_employee_group'), 'n850_view_ad', 'n850-wrapper admin-page', 'hyn', $modules, $data);
  }

  // get list employee group
  public function list_n850(){
    $res = array('status'=> 'error', 'message' => lang('_error_empty'));
    $rs = $this->lstOfTabN850();
    if(count($rs)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  // add new / edit employee group
  public function insert_n850() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'), 'params' => $post);
    $result = $this->insertTabN850($post);
    if(count($result) > 0){
      $res['message'] = lang('_update_success');
      $res['status'] = 'success';
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  // remove employee group
  public function storno_n850() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'), 'params' => $post);
    $result = $this->stornoTabN850($post);
    if(count($result) > 0){
      if($result>0){
        $res['message'] = lang('_update_success');
      }
      $res['status'] = 'success';
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  

  /*   * **************************************************************** */
  /*   * *****************************[privateFunction]****************** */
  /*   * **************************************************************** */
  
  
  private function lstOfTabN850(){
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $get['pnFH200'] = $this->_FH200S;
    $this->load->model('N850_model', 'N850_MODEL');    
    return $this->N850_MODEL->list_oftabn850($get);
  }
  
  private function insertTabN850($get){
    $pnPN850 = isset($get['PN850']) ? $get['PN850'] : 0;
    $pvNV851 = isset($get['NV851']) ? $get['NV851'] : null; // Group name
    $pvNV852 = isset($get['NV852']) ? $get['NV852'] : null; // group short-name
    $pvNV853 = isset($get['NV853']) ? $get['NV853'] : null;
    $pvNV854 = (isset($get['NV854']) && filter_var($get['NV854'], FILTER_VALIDATE_BOOLEAN) ) ? 'SC' : null;
    $pvNV855 = isset($get['NV855']) ? $get['NV855'] : null;
    $this->load->model('N850_model', 'N850_MODEL');
    return $this->N850_MODEL->insert_tabn850($pnPN850, APP_MODULE, $this->_FH200S, $pvNV851, $pvNV852, $pvNV853, $pvNV854, $pvNV855, $this->_fuser['QV101']);
  }
  
  private function stornoTabN850($get){
    $pnPN850 = isset($get['PN850']) ? $get['PN850'] : 0;
    $this->load->model('N850_model', 'N850_MODEL');
    return $this->N850_MODEL->storno_tabn850($pnPN850, $this->_fuser['QV101']);
  }
  
  
  
  
  
  /* NEW CONTROLLER */
  
  
  
  // get list employee group
  public function new_list_n850(){
    $get = $this->input->get();
    $res = array('status'=> 'error', 'message' => lang('_error_empty'), 'param'=> $get);
    $result = $this->new_lstOfTabN850($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  // add new / edit employee group
  public function new_insert_n850() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'), 'params' => $post);
    $result = $this->new_insertTabN850($post);
    if(count($result) > 0){
      $res['message'] = lang('_update_success');
      $res['status'] = 'success';
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  // remove employee group
  public function new_storno_n850() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'), 'params' => $post);
    $result = $this->new_stornoTabN850($post);
    if(count($result) > 0){
      if($result>0){
        $res['message'] = lang('_update_success');
      }
      $res['status'] = 'success';
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  

  /*   * **************************************************************** */
  /*   * *****************************[privateFunction]****************** */
  /*   * **************************************************************** */
  
  
  private function new_lstOfTabN850($get){
    $get['pvLOGIN'] = isset($get['pvLOGIN']) ? $get['pvLOGIN'] : $this->_fuser['QV101'];
    $get['pnFH200'] = isset($get['pnFH200']) ? $get['pnFH200'] : $this->_FH200S;

    $this->load->model('N850_model', 'N850_MODEL');
    return $this->N850_MODEL->new_list_oftabn850($get);
  }
  
  private function new_insertTabN850($post){
    $post['pvLOGIN'] = isset($post['pvLOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101'];
    $post['pnFH200'] = isset($post['pnFH200']) ? $post['pnFH200'] : $this->_FH200S;
    $pvNV854 = (isset($post['pvNV854']) && filter_var($post['pvNV854'], FILTER_VALIDATE_BOOLEAN) ) ? 'SC' : null;
    
    $this->load->model('N850_model', 'N850_MODEL');
    return $this->N850_MODEL->new_insert_tabn850($post);
  }
  
  private function new_stornoTabN850($post){
    $post['pvLOGIN'] = isset($post['pvLOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101'];

    $this->load->model('N850_model', 'N850_MODEL');
    return $this->N850_MODEL->new_storno_tabn850($post);
  }
  
}