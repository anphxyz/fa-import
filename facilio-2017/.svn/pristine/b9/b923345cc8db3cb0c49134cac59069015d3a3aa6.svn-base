<?php

/**
 * @author: hyn - 09/03/2018
 * @module: COM
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

class Comtab extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }
  
  public function index() {    
  }

  public function com_H250(){
    $get = $this->input->get();
    $res = array('status'=>'error', 'message'=> lang('_error_empty'));
    $result = $this->comTabH250($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }    
    echo json_encode($res);
  }

  public function com_Q350($param = array()){
    $get = empty($param) ? $param : $this->input->get();
    $res = array('status'=>'error', 'message'=> lang('_error_empty'));
    $result = $this->comTabQ350($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    if(!empty($param)) return $res;
    else echo json_encode($res);
  }

  public function com_N850($param = array()){
    $get = empty($param) ? $param : $this->input->get();
    $res = array('status'=>'error', 'message'=> lang('_error_empty'));
    $result = $this->comTabN850($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    if(!empty($param)) return $res;
    else echo json_encode($res);
  }

  /**
   * @description: // for add new employee dialog (select - option)
   * @param - no need extra params
   * @return {data:{n110:[...], n850: [...], q350: [...]}}
   */
    public function list_option(){
      $res = array('status'=>'error', 'message'=> lang('_error_empty'));
      $n850 = $this->comTabN850();
      $q350 = $this->comTabQ350();
      $n110 = array(
        array('VAL' => 'NV', 'LABEL' => 'Nhân viên'),
        array('VAL' => 'QD', 'LABEL' => 'Quản đốc'),
        array('VAL' => 'PQ', 'LABEL' => 'Phó quản đốc'),
        array('VAL' => 'TT', 'LABEL' => 'Tổ trưởng')
      );
      $res['data']['n110'] = $n110;
      if(count($n850)>0){
        $res['data']['n850'] = $n850;
      };
      if(count($q350)>0){
        $res['data']['q350'] = $q350;
      };
      if(count($q350)>0 || count($n850)>0){
        $res['status'] = 'success';
        $res['message'] = lang('_load_list_success');
      };
      echo json_encode($res);
    }
  /* * **************************************************************** */
  /* * ********************[_protectedFunction]************************ */
  /* * **************************************************************** */

  private function comTabQ350 (){
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_TabN850(APP_MODULE, $this->_FH200S, $this->_fuser['QV101']);
  }
  
  private function comTabN850 (){
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_tabq350(APP_MODULE, $this->_FH200S, $this->_fuser['QV101']);
  }
  
  private function comTabH250 (){
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $get['pnFH200'] = $this->_FH200S;
    $this->load->model('Comb_model', 'COMB_MODEL');
    return $this->COMB_MODEL->comb_tabh250($get);
  }

}