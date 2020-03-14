<?php

/**
 * @author: Anph - 27/02/2018
 * @model: H200_model
 */
if (!defined('BASEPATH'))
  exit('No direct script access allowed');
require_once(APPPATH . 'models/Api_model.php');

class H200_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabh200ma($get)/* : array */ {
    $rs = $this->_get('h200/list_oftabh200ma', array(
        "pnFH000" => APP_MODULE,
        "pnFH200" => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pvLOGIN' => $get['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements'])
      return $rs['elements'];
    return [];
  }

  public function list_oftabh200c($get){
    $rs = $this->_get('h200/list_oftabh200c', array(
      "pvLOGIN" => $get('pvLOGIN'),
      "pnPH200" => isset($get['pnPH200']) ? $get['pnPH200'] : 0,
      "pnFH000" => APP_MODULE,
      "pvHV451" => isset($get['pvHV451']) ? $get['pvHV451'] : null,
      "pnFK100" => isset($get['pnFK100']) ? $get['pnFK100'] : 0,
    ));
    if($rs['status'] === 'success' && $rs['elements'])
      return $rs['elements'];
    return [];
  }

}
