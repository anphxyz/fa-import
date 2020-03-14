<?php

/**
 * @Author: Linhnc
 * @Create: 2/3/2018
 * @Model: c050_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class C050_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabc050($pnFH000, $pnFH200, $pdCD053, $pdCD054, $pvLOGIN) {
    $rs = $this->_get('c050/list_oftabc050', array(
        'pnFH000' => APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pdCD053' => isset($get['pdCD053']) ? $get['pdCD053'] : null,
        'pdCD054' => isset($get['pdCD054']) ? $get['pdCD054'] : null,
        'pvLOGIN' => $get['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function insert_tabc050($pnFH000, $pnFH200, $pnPC050, $pvCV051, $pvCV052, $pdCD053, $pdCD054, $pvLOGIN) {
    $rs = $this->_post('c050/insert_tabc050', array(
        'pnFH000' => $pnFH000,
        'pnFH200' => $pnFH200,
        'pnPC050' => $pnPC050,
        'pvCV051' => $pvCV051,
        'pvCV052' => $pvCV052,
        'pdCD053' => $pdCD053,
        'pdCD054' => $pdCD054,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function storno_tabc050($pnFH000, $pnFH200, $pnPC050, $pvLOGIN) {
    $rs = $this->_post('c050/storno_tabc050', array(
      'pnFH000' => $pnFH000,
      'pnFH200' => $pnFH200,
      'pnPC050' => $pnPC050,
      'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

/* NEW MODELS */

  public function new_list_oftabc050($get) {
    $rs = $this->_get('c050/list_oftabc050', array(
        'pnFH000' => isset($get['pnFH000']) ? $get['pnFH000'] : APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pdCD053' => isset($get['pdCD053']) ? $get['pdCD053'] : '',
        'pdCD054' => isset($get['pdCD054']) ? $get['pdCD054'] : '',
        'pvLOGIN' => isset($get['pvLOGIN']) ? $get['pvLOGIN'] : ''
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function new_insert_tabc050($post) {
    $rs = $this->_post('c050/insert_tabc050', array(
        'pnFH000' => isset($post['pnFH000']) ? $post['pnFH000'] : APP_MODULE,
        'pnFH200' => isset($post['pnFH200']) ? $post['pnFH200'] : 0,
        'pnPC050' => isset($post['pnPC050']) ? $post['pnPC050'] : 0,
        'pvCV051' => isset($post['pvCV051']) ? $post['pvCV051'] : '',
        'pvCV052' => isset($post['pvCV052']) ? $post['pvCV052'] : '',
        'pdCD053' => isset($post['pdCD053']) ? $post['pdCD053'] : '',
        'pdCD054' => isset($post['pdCD054']) ? $post['pdCD054'] : '',
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function new_storno_tabc050($post) {
    $rs = $this->_post('c050/storno_tabc050', array(
      'pnFH000' => isset($post['pnFH000']) ? $post['pnFH000'] : APP_MODULE,
      'pnFH200' => isset($post['pnFH200']) ? $post['pnFH200'] : 0,
      'pnPC050' => isset($post['pnPC050']) ? $post['pnPC050'] : 0,
      'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',        
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

}
