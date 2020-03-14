<?php

/**
 * @author: Anph - 27/02/2018
 * @module: H200
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class H200 extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * **************************[public_function]****************************** */
  /*   * **************************************************************** */

  public function index() {
    $modules = array('default', 'modules.h200', 'pagination');
    $fh200 = $this->_FH200S;
    $data = array('_FH200S' => $fh200);
    $this->loadTemplateAnph(lang('_management_category'), 'h200_view_ad', 'h200-wrapper tree-view admin-page', 'hyn', $modules, $data);
  }

  public function fuser(){
    $ss = $this->_fuser;
    echo json_encode($ss);
  }

  public function list_oftabh200c(){
    $get = $this->input->get();
    $res = array('status'=>'error', 'message'=> lang('_error_empty'), 'data' => array());
    $result = $this->listOfTabH200C($get);  
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /*   * **************************************************************** */
  /*   * **************************[privateFunction]******************** */
  /*   * **************************************************************** */
  private function listOfTabH200C ($get){
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $this->load->model('H200_model', 'H200_MODEL');
    return $this->H200_MODEL->list_oftabh200c($get);
  }  
 
  private function listOfTabH200MA ($get){
    $this->load->model('H200_model', 'H200_MODEL');
    $get['pnFH200'] = $this->_FH200S;
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    return $this->H200_MODEL->list_oftabh200ma($get);
  }
 
  private function listOfTabH200LO ($get){
    $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : 0;
    $this->load->model('H200_model', 'H200_MODEL');
    return $this->H200_MODEL->list_oftabh200lo($pnFN850, $this->_FH200S, APP_MODULE, $this->_fuser['QV101']);
  }
  
  private function listOfTabH200G ($get){
    $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : 0;
    $this->load->model('H200_model', 'H200_MODEL');
    return $this->H200_MODEL->list_oftabh200g(APP_MODULE, $this->_FH200S, $pnFN850, $this->_fuser['QV101']);
  }
}
