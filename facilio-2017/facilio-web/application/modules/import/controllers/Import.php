<?php
/**
 * @author: Anph - 07/12/2017
 * @module: Import
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class Import extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * **************************[PUBLIC]****************************** */
  /*   * **************************************************************** */

  public function index() {
    $script = array('default', 'modules.import');
    $this->loadTemplateAnph(lang('_import_data'), 'import_view', 'import-wrapper', 'import', $script);
  }
/**
 * 
 */
  public function receive_wb() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error');
    $rs = $this->makeBigImport($post);
    if ($rs)  
      $res['status'] = 'success';
   echo json_encode($res);
  }

  public function get_listb100(){
    $post = filter_input_array(INPUT_GET);
    $res = array('status' => 'error');
    $rs = $this->listOfTabB100($post);
   if ($rs > 0) {
       $res['status'] = 'success';
       $res['elements'] = $rs;
   }
   echo json_encode($res);
  }

  /* **************************************************************** */
  /* **************************[PRIVATE]***************************** */
  /* **************************************************************** */

  private function listOfTabB100($post){
    $this->load->model('B100_model', 'B100_MODEL');
    $post['BV003'] = $this->_fuser['QV115'];
    $post['FH200'] = $this->_FH200S;
    $post['LOGIN'] = $this->_fuser['QV101'];
    return $this->B100_MODEL->listOfTabB100($post);
  }

  private function makeBigImport($post) {
    $this->load->model('B100_model', 'B100_MODEL');
    $post['JSON'] = $post['JSON'];
    $post['BV003'] = $this->_fuser['QV115'];
    $post['FH200'] = $this->_FH200S;
    $post['LOGIN'] = $this->_fuser['QV101'];
    return $this->B100_MODEL->makeBigImport($post);
  }

  private function insertTabB100PM($post) {
    $this->load->model('B100_model', 'B100_MODEL');
    $post['BV003'] = $this->_fuser('QV115');
    $post['FH200'] = $this->_FH200S;
    $post['LOGIN'] = $this->_fuser['QV101'];
    return $this->B100_MODEL->insertTabB100PM($post);
  }

  private function insertTabB100BT($post) {
    $this->load->model('B100_model', 'B100_MODEL');
    $post['BV003'] = $this->_fuser('QV115');
    $post['FH200'] = $this->_FH200S;
    $post['LOGIN'] = $this->_fuser['QV101'];
    return $this->B100_MODEL->insertTabB100BT($post);
  }

}
