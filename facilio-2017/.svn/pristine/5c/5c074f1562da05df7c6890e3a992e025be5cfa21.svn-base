<?php

/**
 * @Author: Linhnc
 * @Create: 2/3/2018
 * @Model: n900_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class N900_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabn900($pvLOGIN, $pnFH000, $pnFH200, $pnFN850, $pnNN104) /* : array */ {
    $rs = $this->_get('n900/list_oftabn900', array(
        'pvLOGIN' => $pvLOGIN,
        'pnFH000' => $pnFH000,
        'pnFH200' => $pnFH200,
        'pnFN850' => $pnFN850,
        'pnNN104' => $pnNN104,
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function list_oftabn900r($pnFH000, $pnFH200, $pnFN850, $pvNV901, $pvLOGIN) /* : array */ {
    $rs = $this->_get('n900/list_oftabn900r', array(
        'pnFH000' => $pnFH000,
        'pnFH200' => $pnFH200,
        'pnFN850' => $pnFN850,
        'pvNV901' => $pvNV901,
        'pvLOGIN' => $pvLOGIN,
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function list_oftabn900l($pnFH000, $pnFH200, $pnFN850, $pvNV901, $pvLOGIN) /* : array */ {
    $rs = $this->_get('n900/list_oftabn900l', array(
        'pnFH000' => $pnFH000,
        'pnFH200' => $pnFH200,
        'pnFN850' => $pnFN850,
        'pvNV901' => $pvNV901,
        'pvLOGIN' => $pvLOGIN,
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function insert_tabn900($pnFN100, $pnFN850, $pvNV901, $pvNV902, $pvNV903, $pvNV904, $pvLOGIN) /* : array */ {
    $rs = $this->_post('n900/insert_tabn900', array(
        'pnFN100' => $pnFN100,
        'pnFN850' => $pnFN850,
        'pvNV901' => $pvNV901,
        'pvNV902' => $pvNV902,
        'pvNV903' => $pvNV903,
        'pvNV904' => $pvNV904,
        'pvLOGIN' => $pvLOGIN,
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function storno_tabn900($pnFN100, $pnFN850, $pvLOGIN) /* : array */ {
    $rs = $this->_post('n900/storno_tabn900', array(
        'pnFN100' => $pnFN100,
        'pnFN850' => $pnFN850,
        'pvLOGIN' => $pvLOGIN,
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  /* ========================================== */
  
  public function new_list_oftabn900($pvLOGIN, $pnFH000, $pnFH200, $pnFN850, $pnNN104) /* : array */ {
    $rs = $this->_get('n900/list_oftabn900', array(
        'pvLOGIN' => isset($get['pvLOGIN']) ? $get['pvLOGIN'] : '',
        'pnFH000' => isset($get['pnFH000']) ? $get['pnFH000'] : APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pnFN850' => isset($get['pnFN850']) ? $get['pnFN850'] : 0,
        'pnNN104' => isset($get['pnNN104']) ? $get['pnNN104'] : 0,
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function new_list_oftabn900r($pnFH000, $pnFH200, $pnFN850, $pvNV901, $pvLOGIN) /* : array */ {
    $rs = $this->_get('n900/list_oftabn900r', array(
        'pnFH000' => isset($get['pnFH000']) ? $get['pnFH000'] : APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pnFN850' => isset($get['pnFN850']) ? $get['pnFN850'] : 0,
        'pvNV901' => isset($get['pvNV901']) ? $get['pvNV901'] : 'N',
        'pvLOGIN' => isset($get['pvLOGIN']) ? $get['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function new_list_oftabn900l($pnFH000, $pnFH200, $pnFN850, $pvNV901, $pvLOGIN) /* : array */ {
    $rs = $this->_get('n900/list_oftabn900l', array(
        'pnFH000' => isset($get['pnFH000']) ? $get['pnFH000'] : APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pnFN850' => isset($get['pnFN850']) ? $get['pnFN850'] : 0,
        'pvNV901' => isset($get['pvNV901']) ? $get['pvNV901'] : 'N',
        'pvLOGIN' => isset($get['pvLOGIN']) ? $get['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function new_insert_tabn900($pnFN100, $pnFN850, $pvNV901, $pvNV902, $pvNV903, $pvNV904, $pvLOGIN) /* : array */ {
    $rs = $this->_post('n900/insert_tabn900', array(
        'pnFN100' => isset($post['pnFN100']) ? $post['pnFN100'] : 0,
        'pnFN850' => isset($post['pnFN850']) ? $post['pnFN850'] : 0,
        'pvNV901' => isset($post['pvNV901']) ? $post['pvNV901'] : '',
        'pvNV902' => isset($post['pvNV902']) ? $post['pvNV902'] : '',
        'pvNV903' => isset($post['pvNV903']) ? $post['pvNV903'] : '',
        'pvNV904' => isset($post['pvNV904']) ? $post['pvNV904'] : '',
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function new_storno_tabn900($pnFN100, $pnFN850, $pvLOGIN) /* : array */ {
    $rs = $this->_post('n900/storno_tabn900', array(
        'pnFN100' => isset($post['pnFN100']) ? $post['pnFN100'] : 0,
        'pnFN850' => isset($post['pnFN850']) ? $post['pnFN850'] : 0,
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }


}
