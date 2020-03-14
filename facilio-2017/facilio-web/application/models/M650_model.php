<?php

/**
 * @author: Linhnc - 14/03/2018
 * @model: m650_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class M650_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function insert_tabm650c($pnPM650, $pnFH000, $pnFH200, $pnFB050, $pnFH150, $pvFC150, $pnFC300, $pvMV651, $pvMV652, $pvMV653, $pnMN654, $pvMV655, $pvMV656, $pnMN657, $pnMN658, $pvMV659, $pvMV660, $pnFF000, $pvLOGIN)/* : int */ {
    $rs = $this->_post('m650/insert_tabm650c', array(
        'pnPM650' => $pnPM650,
        'pnFH000' => $pnFH000,
        'pnFH200' => $pnFH200,
        'pnFB050' => $pnFB050,
        'pnFH150' => $pnFH150,
        'pvFC150' => $pvFC150,
        'pnFC300' => $pnFC300,
        'pvMV651' => $pvMV651,
        'pvMV652' => $pvMV652,
        'pvMV653' => $pvMV653,
        'pnMN654' => $pnMN654,
        'pvMV655' => $pvMV655,
        'pvMV656' => $pvMV656,
        'pnMN657' => $pnMN657,
        'pnMN658' => $pnMN658,
        'pvMV659' => $pvMV659,
        'pvMV660' => $pvMV660,
        'pnFF000' => $pnFF000,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function list_of_tabm650_p11($pnFH000, $pnFH200, $pnFB050, $pvFC150, $pnFC300, $pnFF000, $pnMN654, $pvMV656, $pnMN657, $pnMN658, $pvLOGIN)/* : array */ {
    $rs = $this->_get('m650/lst_oftabm650_p11', array(
        'pnFH000' => $pnFH000,
        'pnFH200' => $pnFH200,
        'pnFB050' => $pnFB050,
        'pvFC150' => $pvFC150,
        'pnFC300' => $pnFC300,
        'pnFF000' => $pnFF000,
        'pnMN654' => $pnMN654,
        'pvMV656' => $pvMV656,
        'pnMN657' => $pnMN657,
        'pnMN658' => $pnMN658,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function storno_tabm650($pnPM650, $pvLOGIN)/* : int */ {
    $rs = $this->_post('m650/storno_tabm650', array(
        'pnPM650' => $pnPM650,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

}
