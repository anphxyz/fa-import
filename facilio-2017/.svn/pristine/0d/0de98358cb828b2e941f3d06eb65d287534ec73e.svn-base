<?php

/**
 * @Author: Linhnc
 * @Create: 2/3/2018
 * @Model: v050_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class V050_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function lst_oftabv050($get) /* : array */ {
    $rs = $this->_get('v050/lst_oftabv050', array(
        'pnFH000' => APP_MODULE,
        'pnFH200L' => isset($get['FH200L']) ? $get['FH200L'] : 0,
        'pnFH200S' => isset($get['FH200S']) ? $get['FH200S'] : 0,
        'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function lst_oftabv050fac($get)/* : array */ {
    $rs = $this->_get('v050/lst_oftabv050fac', array(
        'pnFH000' => APP_MODULE,
        'pnFH200' => isset($get['FH200']) ? $get['FH200'] : 0,
        'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function insert_tabv050($post)/* : int */ {
    $rs = $this->_post('v050/insert_tabv050', array(
        'pnPV050' => isset($post['PV050']) ? $post['PV050'] : 0,
        'pnFH000' => APP_MODULE,
        'pnFH200' => isset($post['FH200']) ? $post['FH200'] : 0,
        'pvVV051' => isset($post['VV051']) ? $post['VV051'] : null,
        'pvVV052' => isset($post['VV052']) ? $post['VV052'] : null,
        'pvVV053' => isset($post['VV053']) ? $post['VV053'] : null,
        'pvVV054' => isset($post['VV054']) ? $post['VV054'] : null,
        'pvVV055' => isset($post['VV055']) ? $post['VV055'] : null,
        'pnEXTID' => isset($post['EXTID']) ? $post['EXTID'] : 0,
        'pvLOGIN' => $post['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
  public function merge_ebstabv050($pnFH000, $pnFH200, $pnORGID, $pvLOGIN)/* : int */ {
    $rs = $this->_post('v050/merge_ebstabv050', array(
        'pnFH000' => $pnFH000,
        'pnFH200' => $pnFH200,
        'pnORGID' => $pnORGID,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
  public function storno_tabv050($pnPV050, $pvLOGIN)/* : int */ {
    $rs = $this->_post('v050/storno_tabv050', array(
        'pnPV050' => $pnPV050,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
}