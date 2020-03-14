<?php

/**
 * @author: Anph - 31/07/20178
 * @model: Q400_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class Q400_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabq400_p1($get) /* : array */ {
    $rs = $this->_get('q400/lst_oftabq400_p1', array(
      'pvQV101' => isset($get['QV101']) ? $get['QV101'] : null
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabq400_p2($get) /* : array */ {
    $rs = $this->_get('q400/lst_oftabq400_p2', array(
      'pnFH000' => APP_MODULE,
      'pnFQ350' => isset($get['FQ350']) ? $get['FQ350'] : 0
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabq400_p4($get) /* : array */ {
    $rs = $this->_get('q400/lst_oftabq400_p4', array(
      'pnFH000' => APP_MODULE,
      'pnFQ400' => isset($get['FQ400']) ? $get['FQ400'] : 0,
      'pnFQ300' => isset($get['FQ300']) ? $get['FQ300'] : 0,
      'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

}
