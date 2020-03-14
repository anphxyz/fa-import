<?php

/**
 * @author: Anph - 31/07/2017
 * @model: Q300_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class Q300_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabq300_p2($get) /* : array */ {
    $rs = $this->_get('q300/lst_oftabq300_p2', array(
      'pnFH000' => APP_MODULE,
      'pnFN100' => isset($get['FN100']) ? $get['FN100'] : 0
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabq300_p4($get) /* : array */ {
    $rs = $this->_get('q300/lst_oftabq300_p4', array(
      'pnFH000' => APP_MODULE,
      'pnPQ300' => isset($get['PQ300']) ? $get['PQ300'] : 0,
      'pnFQ450' => isset($get['FQ450']) ? $get['FQ450'] : 0,
      'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

}
