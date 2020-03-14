<?php

/**
 * @Author: Linhnc
 * @Create: 16/3/2018
 * @Model: f000_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class F000_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabf000() {
    $rs = $this->_get('f000/list_oftabf000', array());
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

}
