<?php

/**
 * @author: Toailq - 22/01/2017
 * @model: n420_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class N420_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function update_tabh450oee($post)/* : int */ {
    $rs = $this->_post('h450/update_tabh450oee', array(
        'pnFH200P'  => isset($post['pnFH200P']) ? $post['pnFH200P'] : 0,
        'pnFH200N'  => isset($post['pnFH200N']) ? $post['pnFH200N'] : 0,
        'pnHN462'   => isset($post['pnHN462']) ? $post['pnHN462'] : 0,
        'pvLOGIN'   => $post['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function insert_tabn420oee($post)/* : int */ {
    $rs = $this->_post('n420/insert_tabn420oee', array(
        'pnPN420' => isset($post['pnPN420']) ? $post['pnPN420'] : 0,
        'pdND421' => isset($post['pdND421']) ? $post['pdND421'] : null,
        'pnNN422' => isset($post['pnNN422']) ? $post['pnNN422'] : 0,
        'pnNN423' => isset($post['pnNN423']) ? $post['pnNN423'] : 0,
        'pnNN424' => isset($post['pnNN424']) ? $post['pnNN424'] : 0,
        'pnNN428' => isset($post['pnNN428']) ? $post['pnNN428'] : 0,
        'pnNN430' => isset($post['pnNN430']) ? $post['pnNN430'] : 0,
        'pnNN431' => isset($post['pnNN431']) ? $post['pnNN431'] : 0,
        'pnFH200' => isset($post['pnFH200']) ? $post['pnFH200'] : 0,
        'pvLOGIN' => $post['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function list_oftabn420oee($get)/* : array */ {
    $rs = $this->_get('n420/list_oftabn420oee', array(
        'pnFH200'   => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pnINTER'   => isset($get['pnINTER']) ? $get['pnINTER'] : 0,
        'pdND421F'  => isset($get['pdND421F']) ? $get['pdND421F'] : null,
        'pdND421T'  => isset($get['pdND421T']) ? $get['pdND421T'] : null,
        'pvLOGIN'   => $get['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements'])
      return $rs['elements'];
    return [];
  }

}
