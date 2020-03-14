<?php

/**
 * @author: Anph - 09/03/2018
 * @model: b100_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class B100_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function listOfTabB100($get) {
    $rs = $this->_get('b100/lst_oftabb100', array(
        'pvSV201' => isset($get['SV201']) ? $get['SV201'] : '',
        'pnFS200' => isset($get['FS200']) ? $get['FS200'] : 0,
        'pvMTYPE' => isset($get['MTYPE']) ? $get['MTYPE'] : '',
        'pvFC550' => isset($get['FC550']) ? $get['FC550'] : '',
        'pvBV003' => $get['BV003'],
        'pnFH200' => $get['FH200'],
        'pnFH000' => APP_MODULE,
        'pvLOGIN' => $get['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function makeBigImport($post) {
    $rs = $this->_post('b100/make_big_import', array(
        'JSON' => isset($post['JSON']) ? $post['JSON'] : [],
        'pvBV003' => $post['BV003'],
        'pnFH200' => $post['FH200'],
        'pnFH000' => APP_MODULE,
        'pvLOGIN' => $post['LOGIN']
    ));
    return $rs['status'] === 'success';
  }

  public function insertTabB100PM($post) {
    $rs = $this->_post('b100/insert_tabb100pm', array(
        'pnFB100' => isset($post['FB100']) ? $post['FB100'] : 0,
        'pvBV101' => isset($post['BV101']) ? $post['BV101'] : '',
        'pnBN102' => isset($post['BN102']) ? $post['BN102'] : 0,
        'pvBV106' => isset($post['BV106']) ? $post['BV106'] : '',
        'pvBV108' => isset($post['BV108']) ? $post['BV108'] : '',
        'pnBN112' => isset($post['BN112']) ? $post['BN112'] : 0,
        'pnBN113' => isset($post['BN113']) ? $post['BN113'] : 0,
        'pvBV001' => isset($post['BV001']) ? $post['BV001'] : '',
        'pvBV003' => $post['BV003'],
        'pvVV501' => isset($post['VV501']) ? $post['VV501'] : '',
        'pnFB150' => isset($post['FB150']) ? $post['FB150'] : 0,
        'pvBV151' => isset($post['BV151']) ? $post['BV151'] : '',
        'pnBN152' => isset($post['BN152']) ? $post['BN152'] : 0,
        'pvBV154' => isset($post['BV154']) ? $post['BV154'] : '',
        'pnBN158' => isset($post['BN158']) ? $post['BN158'] : 0,
        'pvSV251' => isset($post['SV251']) ? $post['SV251'] : '',
        'pvSV201' => isset($post['SV201']) ? $post['SV201'] : '',
        'pnFS250' => isset($post['FS250']) ? $post['FS250'] : 0,
        'pnFS200' => isset($post['FS200']) ? $post['FS200'] : 0,
        'pnFH200' => $post['FH200'],
        'pnFH000' => APP_MODULE,
        'pvLOGIN' => $post['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements'])
      return $rs['elements'][0];
    return 0;
  }

  public function insertTabB100BT($post) {
    $rs = $this->_post('b100/insert_tabb100bt', array(
        'pnFB100' => isset($post['FB100']) ? $post['FB100'] : 0,
        'pvBV101' => isset($post['BV101']) ? $post['BV101'] : '',
        'pnBN102' => isset($post['BN102']) ? $post['BN102'] : 0,
        'pnBN105' => isset($post['BN105']) ? $post['BN105'] : 0,
        'pnBN106' => isset($post['BN106']) ? $post['BN106'] : 0,
        'pvBV107' => isset($post['BV107']) ? $post['BV107'] : '',
        'pvBV108' => isset($post['BV108']) ? $post['BV108'] : '',
        'pvBV109' => isset($post['BV109']) ? $post['BV109'] : '',
        'pvBV110' => isset($post['BV110']) ? $post['BV110'] : '',
        'pnBN112' => isset($post['BN112']) ? $post['BN112'] : 0,
        'pnBN113' => isset($post['BN113']) ? $post['BN113'] : 0,
        'pvBV001' => isset($post['BV001']) ? $post['BV001'] : '',
        'pvBV003' => $post['BV003'],
        'pvVV501' => isset($post['VV501']) ? $post['VV501'] : '',
        'pnFB150' => isset($post['FB150']) ? $post['FB150'] : 0,
        'pvBV151' => isset($post['BV151']) ? $post['BV151'] : '',
        'pnBN152' => isset($post['BN152']) ? $post['BN152'] : 0,
        'pvBV153' => isset($post['BV153']) ? $post['BV153'] : '',
        'pvBV155' => isset($post['BV155']) ? $post['BV155'] : '',
        'pnBN158' => isset($post['BN158']) ? $post['BN158'] : 0,
        'pvSV251' => isset($post['SV251']) ? $post['SV251'] : '',
        'pvSV201' => isset($post['SV201']) ? $post['SV201'] : '',
        'pnFS250' => isset($post['FS250']) ? $post['FS250'] : 0,
        'pnFS200' => isset($post['FS200']) ? $post['FS200'] : 0,
        'pnFH200' => $post['FH200'],
        'pnFH000' => APP_MODULE,
        'pvLOGIN' => $post['LOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements'])
      return $rs['elements'][0];
    return 0;
  }

  public function lst_oftabb050($get)/* : array */ {
    $rs = $this->_get('b050/lst_oftabb050', array(
        'pnFH200' => $get['FH200'],
        'pnFS200' => isset($get['FS200']) ? $get['FS200'] : '',
        'pvSV202' => isset($get['SV202']) ? $get['SV202'] : '',
        'pvSV204' => isset($get['SV204']) ? $get['SV204'] : '',
        'pvBV052' => isset($get['BV052']) ? $get['BV052'] : '',
        'pnFLAG' => isset($get['FLAG']) ? $get['FLAG'] : '',
        'pdUpdateTime' => isset($get['UpdateTime']) ? $get['UpdateTime'] : '',
        'pnFH000' => APP_MODULE,
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

}
