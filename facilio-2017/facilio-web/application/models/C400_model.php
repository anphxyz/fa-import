<?php

/**
 * @author: hyn - 02/03/2018
 * @model: c400_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class C400_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabc400($get) /* : array */ {
    $rs = $this->_get('c400/list_oftabc400', array(
      'pnFH000' => APP_MODULE,
      'pnFH200L' => isset($get['FH200L']) ? $get['FH200L'] : 0,
      'pnFH200S' => isset($get['FH200S']) ? $get['FH200S'] : 0,
      'pvCV403' => isset($get['CV403']) ? $get['CV403'] : null,
      'pvLOGIN' => $get['LOGIN'],
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function insert_tabc400($pnPC400, $pnFH000, $pnFH200, $pvCV401, $pvCV402, $pvCV403, $pvLOGIN) /* : array */ {
    $rs = $this->_post('c400/insert_tabc400', array(
      'pnPC400' => $pnPC400,
      'pnFH000' => $pnFH000,
      'pnFH200' => $pnFH200,
      'pvCV401' => $pvCV401,
      'pvCV402' => $pvCV402,
      'pvCV403' => $pvCV403,
      'pvLOGIN' => $pvLOGIN,
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function storno_tabc400($pnPC400, $pvLOGIN) /* : array */ {
    $rs = $this->_post('c400/storno_tabc400', array(
      'pnPC400' => $pnPC400,
      'pvLOGIN' => $pvLOGIN,
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
}