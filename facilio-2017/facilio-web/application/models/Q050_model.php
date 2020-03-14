<?php

/**
 * @author: Linhnc - 31/07/2018
 * @model: Q050_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class Q050_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabq050($get) /* : array */ {
    $rs = $this->_get('q050/lst_oftabq050', array(
      'pnFH000' => APP_MODULE,
      'pnFH200L' => isset($get['FH200L']) ? $get['FH200L'] : 0,
      'pnFH200S' => isset($get['FH200S']) ? $get['FH200S'] : 0,
      'pvNV103' => isset($get['NV103']) ? $get['NV103'] : null,
      'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }


}