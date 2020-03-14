<?php

/**
 * @author: Linhnc - 31/07/2018
 * @model: Q350_model
 */

if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}
require_once(APPPATH . 'models/Api_model.php');
class Q350_model extends Api_model{

  public function __construct(){
    parent::__construct();
  }

  public function list_oftabq350($get) /* : array */ {
    $rs = $this->_get('q350/lst_oftabq350', array(
      'pnFH000' => APP_MODULE,
      'pnPQ350' => isset($get['PQ350']) ? $get['PQ350'] : 0,
      'pnFH200' => isset($get['FH200']) ? $get['FH200'] : 0
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

}