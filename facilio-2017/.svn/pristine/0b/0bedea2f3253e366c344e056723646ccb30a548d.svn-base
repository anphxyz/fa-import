<?php

/**
 * @Author: Linhnc
 * @Create: 2/3/2018
 * @Model: n850_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class N850_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabn850($get) {
    $rs = $this->_get('n850/list_oftabn850', array(
        'pvLOGIN' => $get['pvLOGIN'],
        'pnFH000' => APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function insert_tabn850($pnPN850, $pnFH000, $pnFH200, $pvNV851, $pvNV852, $pvNV853, $pvNV854, $pvNV855, $pvLOGIN) {
    $rs = $this->_post('n850/insert_tabn850', array(
        'pnPN850' => $pnPN850,
        'pnFH000' => $pnFH000,
        'pnFH200' => $pnFH200,
        'pvNV851' => $pvNV851,
        'pvNV852' => $pvNV852,
        'pvNV853' => $pvNV853,
        'pvNV854' => $pvNV854,
        'pvNV855' => $pvNV855,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function storno_tabn850($pnPN850, $pvLOGIN) {
    $rs = $this->_post('n850/storno_tabn850', array(
        'pnPN850' => $pnPN850,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
  
  
  
  
  public function new_list_oftabn850($get) {
    $rs = $this->_get('n850/list_oftabn850', array(
        'pvLOGIN' => isset($get['pvLOGIN']) ? $get['pvLOGIN'] : '',
        'pnFH000' => isset($get['pnFH000']) ? $get['pnFH000'] : APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function new_insert_tabn850($post) {
    $rs = $this->_post('n850/insert_tabn850', array(
        'pnPN850' => isset($post['pnPN850']) ? $post['pnPN850'] : 0,
        'pnFH000' => isset($post['pnFH000']) ? $post['pnFH000'] : APP_MODULE,
        'pnFH200' => isset($post['pnFH200']) ? $post['pnFH200'] : 0,
        'pvNV851' => isset($post['pvNV851']) ? $post['pvNV851'] : '', // Group name
        'pvNV852' => isset($post['pvNV852']) ? $post['pvNV852'] : '', // group short-name
        'pvNV853' => isset($post['pvNV853']) ? $post['pvNV853'] : '',
        'pvNV854' => isset($post['pvNV854']) ? $post['pvNV854'] : '',
        'pvNV855' => isset($post['pvNV855']) ? $post['pvNV855'] : '',
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : ''
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function new_storno_tabn850($post) {
    $rs = $this->_post('n850/storno_tabn850', array(
        'pnPN850' => isset($post['pnPN850']) ? $post['pnPN850'] : '',
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : ''
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

}
