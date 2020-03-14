<?php
/**
 * @author: Linhnc - 31/07/2018
 * @model: Q200_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class Q200_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabq200n($get) /* : array */ {
    $rs = $this->_get('q200/lst_oftabq200n', array(
      'pnFH000' => APP_MODULE,
      'pnFQ350' => isset($get['FQ350']) ? $get['FQ350'] : 0,
      'pnFH200' => isset($get['FH200']) ? $get['FH200'] : 0,
      'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabq200($get) /* : array */ {
    $rs = $this->_get('q200/lst_tftabq200', array(
      'pnFH000' => APP_MODULE,
      'pnFQ350' => isset($get['FQ350']) ? $get['FQ350'] : 0,
      'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

}