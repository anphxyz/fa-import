<?php

/**
 * @author: Linhnc - 31/07/2018
 * @model: Q150_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class Q150_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabq150n($get){
    $rs = $this->_get('q150/lst_oftabq150n', array(
      'pnFH000' => APP_MODULE,
      'pnFQ350' => isset($get['FQ350']) ? $get['FQ350'] : 0,
      'pnFQ300' => isset($get['FQ300']) ? $get['FQ300'] : 0,
      'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabq150l($get){
    $rs = $this->_get('q150/lst_oftabq150l', array(
      'pnFH000' => APP_MODULE,
      'pnFQ350' => isset($get['FQ350']) ? $get['FQ350'] : 0,
      'pnFQ450' => isset($get['FQ450']) ? $get['FQ450'] : 0,
      'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabq150r($get){
    $rs = $this->_get('q150/lst_oftabq150r', array(
      'pnFH000' => APP_MODULE,
      'pnFQ350' => isset($get['FQ350']) ? $get['FQ350'] : 0,
      'pnFQ450' => isset($get['FQ450']) ? $get['FQ450'] : 0,
      'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

}