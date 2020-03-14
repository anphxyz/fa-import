<?php

/**
 * @author: Anph - 07/12/2017
 * @model: Adm_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class Q175_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  function lst_oftabq175($pnFH000, $pnFQ300, $pnFQ400, $pnFN100) {
    $rs = $this->_get('q175/lst_oftabq175', array(
        'pnFH000' => $pnFH000, 'pnFQ300' => $pnFQ300,
        'pnFQ400' => $pnFQ400, 'pnFN100' => $pnFN100
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      $lstQ175 = array();
      foreach ($rs['elements'] as $q175) {
        $qv179 = $q175['QV179'];
        if (!in_array($qv179, $lstQ175))
          $lstQ175[$qv179] = $q175;
      }
      return $lstQ175;
    }
  }

}
