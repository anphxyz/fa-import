<?php

/**
 * @Author: Linhnc
 * @Create: 23/1/2018
 * @Model: b350_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class B350_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabb350bt($get) {
    $rs = $this->_get('b350/lst_oftabb350bt', array(
        'pnFN850' => isset($get['pnFN850']) ? $get['pnFN850'] : 0,
        'pnFB050' => isset($get['pnFB050']) ? $get['pnFB050'] : 0,
        'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
        'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 25,
        'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 1,
        'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
        'pvLOGIN' => $get['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabb350($get) {
    $rs = $this->_get('b350/lst_oftabb350_p7', array(
        'pnFN850' => isset($get['pnFN850']) ? $get['pnFN850'] : 0,
        'pnFB050' => isset($get['pnFB050']) ? $get['pnFB050'] : 0,
        'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
        'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 25,
        'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 1,
        'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
        'pvLOGIN' => $get['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function update_tabb350b($post) {
    $rs = $this->_post('b350/update_tabb350b', array(
        'pnFB050' => isset($post['pnFB050']) ? $post['pnFB050'] : 0,
        'pnBN351' => isset($post['pnBN351']) ? $post['pnBN351'] : 0,
        'pvLOGIN' => $post['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

}
