<?php

/**
 * @Author: hyn
 * @Create: 06/03/2018
 * @Controller: S200
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class S200 extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[public_function]*************************** */
  /*   * **************************************************************** */

  public function index() {
    $modules = array('default', 'modules.s200', 'pagination');
    $this->loadTemplateAnph(lang('_machine_device_type'), 's200_view_ad', 's200-wrapper admin-page', 'hyn', $modules);
  }

  /**
   * @Description: Máy - Loại thiết bị
   */
  public function list_s200ht(){
    $get = $this->input->get();
    $res = array('status'=>'error', 'message'=> lang('_error_empty'), 'param' => $get);
    $rs = $this->listOfTabS200HT($get);
    if(count($rs)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $rs;
    }
    echo json_encode($res);
  }

  public function insert_s200(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status'=>'error', 'message'=> lang('_error_empty'), 'param' => $post);
    $result = $this->insertTabS200P26($post);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  public function storno_s200(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status'=>'error', 'message'=> lang('_error_empty'), 'param' => $post);
    $result = $this->stornoTabS200($post);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }
  /*   * **************************************************************** */
  /*   * *****************************[privateFunction]*************************** */
  /*   * **************************************************************** */
  private function listOfTabS200HT($get){
    $get['pvLOGIN'] = $this->_fuser['QV101'];
    $get['pnFH200'] = $this->_FH200S;
    $this->load->model('S200_model', 'S200_MODEL');
    return $this->S200_MODEL->list_oftabs200ht($get);
  }
  
  private function insertTabS200P26($post){
    $pnPS200 = isset($post['PS200'])? $post['PS200'] : 0;
    $pnFH300 = isset($post['FH300'])? $post['FH300'] : 0;
    $pnFV200 = isset($post['FV200'])? $post['FV200'] : 0;
    $pnFC000 = isset($post['FC000'])? $post['FC000'] : 0;
    $pnFC550 = isset($post['FC550'])? $post['FC550'] : 0;
    $pnFC425 = isset($post['FC425'])? $post['FC425'] : 0;
    $pvSV201 = isset($post['SV201'])? $post['SV201'] : null;
    $pvSV202 = isset($post['SV202'])? $post['SV202'] : null;
    $pvSV203 = isset($post['SV203'])? $post['SV203'] : null;
    $pvSV204 = isset($post['SV204'])? $post['SV204'] : null;
    $pvSV205 = isset($post['SV205'])? $post['SV205'] : null;
    $pvSV206 = isset($post['SV206'])? $post['SV206'] : null;
    $pvSV207 = isset($post['SV207'])? $post['SV207'] : null;
    $pvSV208 = isset($post['SV208'])? $post['SV208'] : null;
    $pvSV209 = isset($post['SV209'])? $post['SV209'] : null;
    $pvSV210 = isset($post['SV210'])? $post['SV210'] : null;
    $pvSV211 = isset($post['SV211'])? $post['SV211'] : null;
    $pvSV212 = isset($post['SV212'])? $post['SV212'] : null;
    $pvSV213 = isset($post['SV213'])? $post['SV213'] : null;
    $pvSV214 = isset($post['SV214'])? $post['SV214'] : null;
    $pnSN215 = isset($post['SN215'])? $post['SN215'] : 0;
    $pnSN216 = isset($post['SN216'])? $post['SN216'] : 0;
    $pvSV217 = isset($post['SV217'])? $post['SV217'] : null;

    $this->load->model('S200_model', 'S200_MODEL');
    return $this->S200_MODEL->insert_tabs200_p26($pnPS200, APP_MODULE, $this->_FH200S, $pnFH300, $pnFV200, $pnFC000, $pnFC550, $pnFC425, $pvSV201, $pvSV202, $pvSV203, $pvSV204, $pvSV205, $pvSV206, $pvSV207, $pvSV208, $pvSV209, $pvSV210, $pvSV211, $pvSV212, $pvSV213, $pvSV214, $pnSN215, $pnSN216, $pvSV217, $this->_fuser['QV101']);
  }

  private function stornoTabS200($post){
    $pnPS200 = isset($post['PS200']) ? $post['PS200'] : 0;
    $this->load->model('S200_model', 'S200_MODEL');
    return $this->S200_MODEL->storno_tabs200($pnPS200, $this->_fuser['QV101']);
  }

  /* NEW CONTROLLER */  
  public function new_list_s200ht(){
    $get = $this->input->get();
    $res = array('status'=>'error', 'message'=> lang('_error_empty'), 'param' => $get);
    $result = $this->new_listOfTabS200HT($get);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  public function new_insert_s200(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status'=>'error', 'message'=> lang('_error_empty'), 'param' => $post);
    $result = $this->new_insertTabS200P26($post);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  public function new_storno_s200(){
    $post = filter_input_array(INPUT_POST);
    $res = array('status'=>'error', 'message'=> lang('_error_empty'), 'param' => $post);
    $result = $this->new_stornoTabS200($post);
    if(count($result)>0){
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /* NEW MODEL */  

  private function new_listOfTabS200HT($get){
    $get['pnFH000'] = isset($get['pnFH000']) ? $get['pnFH000'] : APP_MODULE;
    $get['pnFH200'] = isset($get['pnFH200']) ? $get['pnFH200'] : $this->_FH200S;
    $get['pvLOGIN'] = isset($get['pvLOGIN']) ? $get['pvLOGIN'] : $this->_fuser['QV101'];
    $this->load->model('S200_model', 'S200_MODEL');
    return $this->S200_MODEL->new_list_oftabs200ht($get);
  }

  private function new_insertTabS200P26($post){
    $post['FH000'] = isset($post['FH000']) ? $post['FH000'] : APP_MODULE;
    $post['FH200'] = isset($post['FH200']) ? $post['FH200'] : $this->_FH200S;
    $post['LOGIN'] = isset($post['LOGIN']) ? $post['LOGIN'] : $this->_fuser['QV101'];
    $this->load->model('S200_model', 'S200_MODEL');
    return $this->S200_MODEL->new_insert_tabs200_p26($post);
  }

  private function new_stornoTabS200($post){    
    $post['LOGIN'] = isset($post['LOGIN']) ? $post['LOGIN'] : $this->_fuser['QV101'];
    $this->load->model('S200_model', 'S200_MODEL');
    return $this->S200_MODEL->storno_tabs200($post);
  }
}