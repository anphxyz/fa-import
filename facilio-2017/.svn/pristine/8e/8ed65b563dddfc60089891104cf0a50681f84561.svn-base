<?php

/**
 * @author: hyn - 09/03/2018
 * @module: N100
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

class N100 extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * **************************[public_function]********************* */
  /*   * **************************************************************** */

  public function index() {
    $modules = array('default', 'modules.n100', 'pagination');
    $data = array(
      'add' => lang('_employee'),
      'dropdown' => false,
      'parent-menu' => lang('_employee'),
      'child-menu' => lang('_employee'),
    );
    // "admin-page": use if current view is for admin
    // x000-wrapper: unique class for each view
    $this->loadTemplateAnph(lang('_employee'), 'n100_view_ad', 'n100-wrapper admin-page', 'hyn', $modules, $data);    
  }

  /**
   * current not use yet
   */
  public function update_n100_p6() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    $result = $this->updateTabN100_P6($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }  
  
  /**
   * current not use yet
   */
  public function update_n100_p3() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    $result = $this->updateTabN100_P3($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

    /**
      * @description: determine whether username exist or not
      * @param NV106 {string}  - username
      * @return {data = 0: available, data>0: existed}
      */ 
  public function check_loginexist() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $result = $this->checkLoginExist($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /**
   * @description: delete employee base on PN100
   * @param PN100 {number} - empoyee id from "list_oftabn100"
   */
  public function storno_n100() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_error_insert'));
    if(count($post)>0){
      $result = $this->stornoTabN100($post);    
      if(count($result) > 0){
        $res['status'] = 'success';
        $res['message'] = lang('_update_success');
        $res['data'] = $result;
      }
    }
    echo json_encode($res);
  }

  /**
   * @DESCRIPTION: insert/edit employee base on PN100
   */
  public function insert_n100bs() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang(isset($post['PN100']) ? '_update_failed' : '_error_insert'));
    $result = $this->insertTabN100BS($post);
    if(count($result) > 0){
      if($result>0){
        $res['status'] = 'success';
        $res['message'] = lang('_update_success');
      }
      $res['data'] = $result;
    }
    echo json_encode($res);
  }
  
  public function list_oftabn100(){
    $get = $this->input->get();
    $res = array('status'=>'error', 'message'=> lang('_error_empty'), 'param' => $get);
    $result = $this->listOfTabN100($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * **************************[privateFunction]********************* */
  /*   * **************************************************************** */

  private function listOfTabN100 ($get){
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $get['pnFH200'] = $this->_FH200S;
    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->list_oftabn100($get);
  }
  
  /**
   * description: nhóm nhân viên
   * @return {VAL: number, LABEL: string}
   */
  private function comTabQ350 (){
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_TabN850(APP_MODULE, $this->_FH200S, $this->_fuser['QV101']);
  }
  
  /**
   * description: nhóm quyền
   * @return {VAL: number, LABEL: string}
   */
  private function comTabN850 (){
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_tabq350(APP_MODULE, $this->_FH200S, $this->_fuser['QV101']);
  }
  
  /**
   * @DESCRIPTION: insert/edit employee base on PN100
   */
  private function insertTabN100BS ($post){ 
    $pnPN100 = isset($post['PN100']) ? $post['PN100'] : 0; 
    $pvNV102 = isset($post['NV102']) ? $post['NV102'] : null; // họ 
    $pvNV103 = isset($post['NV103']) ? $post['NV103'] : null; // tên 
    $pnNI104 = isset($post['NI104']) ? $post['NI104'] : 1; //
    $pnNI105 = isset($post['NI105']) ? $post['NI105'] : 0; //
    $pvNV106 = isset($post['NV106']) ? $post['NV106'] : null; // username 
    $pvNV107 = isset($post['NV107']) ? $post['NV107'] : null; // gender
    $pvNV108 = isset($post['NV108']) ? $post['NV108'] : 'vi'; // lang
    $pvNV109 = isset($post['NV109']) ? $post['NV109'] : null; // chức vụ
    $pvNV110 = isset($post['NV110']) ? $post['NV110'] : null; // chức danh
    $pvNV111 = isset($post['NV111']) ? $post['NV111'] : null; // 
    $pvNV112 = isset($post['NV112']) ? $post['NV112'] : null; // 
    $pvNV113 = isset($post['NV113']) ? $post['NV113'] : null; // 
    $pnNN114 = isset($post['NN114']) ? $post['NN114'] : 0; // Giờ làm việc
    $pvNV115 = isset($post['NV115']) ? $post['NV115'] : 'N100'; // N100 = nhan vien cong ty; K100: nhan viec khach // hang; V350: nhan vien nha cung cap
    $pvNV116 = isset($post['NV116']) ? $post['NV116'] : null; // Mã nhân viên
    $pnNN117 = isset($post['NN117']) ? $post['NN117'] : 0; // Ngân sách
    $pdND118 = isset($post['ND118']) ? $this->date($post['ND118']) : null; // DoB
    $pnFN850 = isset($post['FN850']) ? $post['FN850'] : 0; // Nhóm quyền
    $pnFQ350 = isset($post['FQ350']) ? $post['FQ350'] : 0; // nhóm nhân viên
    $pnFN600 = isset($post['FN600']) ? $post['FN600'] : 0; // 
    $pnFK100 = isset($post['FK100']) ? $post['FK100'] : 0; //
    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->insert_tabn100bs($pnPN100, $pvNV102, $pvNV103, $pnNI104, $pnNI105, $pvNV106, $pvNV107, $pvNV108, $pvNV109, $pvNV110, $pvNV111, $pvNV112, $pvNV113, $pnNN114, $pvNV115, $pvNV116, $pnNN117, $pdND118, $pnFN850, $pnFQ350, $pnFN600, $pnFK100, $this->_FH200S, APP_MODULE, $this->_fuser['QV101']);
  }

  private function stornoTabN100 ($post){
    $pnPN100 = isset($post['PN100']) ? $post['PN100'] : 0;
    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->storno_tabn100($pnPN100, $this->_fuser['QV101']); 
  }

  private function checkLoginExist ($post){
    $pnNV106 = isset($post['NV106']) ? $post['NV106'] : null;
    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->check_loginexist($pnNV106); 
  }

  private function updateTabN100_P3 ($post){
    $pnPN100 = isset($post['PN100']) ? $post['PN100'] : 0;
    $pnNN117 = isset($post['NN117']) ? $post['NN117'] : 0;
    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->update_tabn100_p3($pnPN100, $pnNN117, $this->_fuser['QV101']); 
  }

  private function updateTabN100_P6 ($post){
    $pnFB050 = isset($post['pnFB050']) ? $post['pnFB050'] : 0;
    $pnPN100N = isset($post['pnPN100N']) ? $post['pnPN100N'] : 0;
    $pnPN100O = isset($post['pnPN100O']) ?$post['pnPN100O'] : 0;
    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->update_tabn100_p6(APP_MODULE, $this->_FH200S, $pnFB050, $pnPN100N, $pnPN100O, $this->_fuser['QV101']); 
  }


  /* NEW CONTROLLER ===========================================================*/

  /**
   * current not use yet
   */
  public function new_update_n100_p6() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    $result = $this->new_updateTabN100_P6($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }  
  
  /**
   * current not use yet
   */
  public function new_update_n100_p3() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_update_failed'));
    $result = $this->new_updateTabN100_P3($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_update_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

    /**
      * @description: determine whether username exist or not
      * @param NV106 {string}  - username
      * @return {data = 0: available, data>0: existed}
      */ 
  public function new_check_loginexist() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $result = $this->new_checkLoginExist($post);
    if(count($result) > 0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /**
   * @description: delete employee base on PN100
   * @param PN100 {number} - empoyee id from "list_oftabn100"
   */
  public function new_storno_n100() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_error_insert'));
    if(count($post)>0){
      $result = $this->new_stornoTabN100($post);    
      if(count($result) > 0){
        $res['status'] = 'success';
        $res['message'] = lang('_update_success');
        $res['data'] = $result;
      }
    }
    echo json_encode($res);
  }

  /**
   * @DESCRIPTION: insert/edit employee base on PN100
   */
  public function new_insert_n100bs() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang(isset($post['PN100']) ? '_update_failed' : '_error_insert'));
    $result = $this->new_insertTabN100BS($post);
    if(count($result) > 0){
      if($result>0){
        $res['status'] = 'success';
        $res['message'] = lang('_update_success');
      }
      $res['data'] = $result;
    }
    echo json_encode($res);
  }
  
  /**
   * 
   */
  public function new_list_oftabn100(){
    $get = $this->input->get();
    $res = array('status'=>'error', 'message'=> lang('_error_empty'), 'param' => $get);
    $result = $this->new_listOfTabN100($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }


  /* NEW MODEL ===========================================================*/

  private function new_listOfTabN100 ($get){
    $get['pnFH200'] = isset($get['pnFH200']) ? $get['pnFH200'] : $this->_FH200S;
    $get['pvLOGIN'] = isset($get['pvLOGIN']) ? $get['pvLOGIN'] : $this->_fuser['QV101'];

    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->new_list_oftabn100($get);
  }
  
  /**
   * @DESCRIPTION: insert/edit employee base on PN100
   */
  private function new_insertTabN100BS ($post){ 
    $post['FH200'] = isset($post['FH200']) ? $post['FH200'] : $this->_FH200S;
    $post['ND118'] = isset($post['ND118']) ? $this->date($post['ND118']) : '';
    $post['pvLOGIN'] = isset($post['LOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101'];

    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->new_insert_tabn100bs($post);
  }

  private function new_stornoTabN100 ($post){
    $post['PN100'] = isset($post['PN100']) ? $post['PN100'] : 0;
    $post['pvLOGIN'] = isset($post['pvLOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101'];

    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->new_storno_tabn100($post); 
  }

  private function new_checkLoginExist ($post){ // use NV106 to check if username exist (1) or not (0)
    $post['pvLOGIN'] = isset($post['NV106']) ? $post['NV106'] : '';
    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->new_check_loginexist($post); 
  }

  private function new_updateTabN100_P3 ($post){
    $post['pvLOGIN'] = isset($post['pvLOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101'];

    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->new_update_tabn100_p3($post); 
  }

  private function new_updateTabN100_P6 ($post){
    $post['pnFH200'] = isset($post['FH200']) ? $post['FH200'] : $this->_FH200S;
    $post['pvLOGIN'] = isset($post['LOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101'];

    $this->load->model('N100_model', 'N100_MODEL');
    return $this->N100_MODEL->new_update_tabn100_p6($post); 
  }

  /**
   * parse client datetime to local datetime
   */
  protected function date($date){
    $obj = new DateTime($date);
    $obj->setTimezone(new DateTimeZone('UTC'));
    return  $obj->format('Y-m-d\TH:i:s\Z');
  }
}
