<?php

/**
 * @Author: Linhnc
 * @Create: 2/3/2018
 * @Model: n400_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class N400_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabn400($get) /* : array */ {
    $rs = $this->_get('n400/list_oftabn400', array(
        'pnFH000' => APP_MODULE,
        'pnFH200' => isset($get['FH200']) ? $get['FH200'] : 0,
        'pnFN850' => isset($get['FN850']) ? $get['FN850'] : 0,
        'pvLOGIN' => $get['LOGIN'],
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function storno_tabn400($pnFH000, $pnFN850, $pnFH200, $pvLOGIN)/* : int */ {
    $rs = $this->_post('n400/storno_tabn400', array(
        'pnFH000' => $pnFH000,
        'pnFN850' => $pnFN850,
        'pnFH200' => $pnFH200,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function insert_tabn400($pnFH000, $pnFN850, $pnFH200, $pvNV401, $pvNV402, $pvNV403, $pnNN404, $pnNN405, $pvLOGIN)/* : int */ {
    $rs = $this->_post('n400/insert_tabn400', array(
        'pnFH000' => $pnFH000,
        'pnFN850' => $pnFN850,
        'pnFH200' => $pnFH200,
        'pvNV401' => $pvNV401,
        'pvNV402' => $pvNV402,
        'pvNV403' => $pvNV403,
        'pnNN404' => $pnNN404,
        'pnNN405' => $pnNN405,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

}
