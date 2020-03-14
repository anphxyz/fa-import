<?php

/**
 * @Author: Linhnc
 * @Create: 12/12/2017
 * @Model: b200_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class B200_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabb200($get) /* : array */ {
    $rs = $this->_get('b200/lst_oftabb200', array(
        'pnFH000' => APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pnFS200' => isset($get['pnFS200']) ? $get['pnFS200'] : 0,
        'pnFC450' => isset($get['pnFC450']) ? $get['pnFC450'] : 0,
        'pnFC500' => isset($get['pnFC500']) ? $get['pnFC500'] : 0,
        'pvFC550' => isset($get['pvFC550']) ? $get['pvFC550'] : null,
        'pnFB050' => isset($get['pnFB050']) ? $get['pnFB050'] : 0,
        'pnREPART' => isset($get['pnREPART']) ? $get['pnREPART'] : 0,
        'pvUSER' => isset($get['pvUSER']) ? $get['pvUSER'] : "ALL",
        'pvSTATUS' => isset($get['pvSTATUS']) ? $get['pvSTATUS'] : "",
        'pnFN850' => isset($get['pnFN850']) ? $get['pnFN850'] : 0,
        'pnDAYSS' => isset($get['pnDAYSS']) ? $get['pnDAYSS'] : 0,
        'pdBD201F' => isset($get['pdBD201F']) ? $get['pdBD201F'] : null,
        'pdBD201T' => isset($get['pdBD201T']) ? $get['pdBD201T'] : null,
        'pvSEARC' => isset($get['pvSEARC']) ? $get['pvSEARC'] : null,
        'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
        'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 13,
        'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 2,
        'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
        'pvLOGIN' => $get['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabb200bt($post) /* : array */ {
    $rs = $this->_get('b200/lst_oftabb200bt', array(
        'pnFH000' => APP_MODULE,
        'pnFH200' => isset($post['pnFH200']) ? $post['pnFH200'] : 0,
        'pnFS200' => isset($post['pnFS200']) ? $post['pnFS200'] : 0,
        'pnFC450' => isset($post['pnFC450']) ? $post['pnFC450'] : 0,
        'pnFC500' => isset($post['pnFC500']) ? $post['pnFC500'] : 0,
        'pvFC550' => isset($post['pvFC550']) ? $post['pvFC550'] : null,
        'pnFB050' => isset($post['pnFB050']) ? $post['pnFB050'] : 0,
        'pnREPART' => isset($post['pnREPART']) ? $post['pnREPART'] : 0,
        'pvUSER' => isset($post['pvUSER']) ? $post['pvUSER'] : "ALL",
        'pvSTATUS' => isset($post['pvSTATUS']) ? $post['pvSTATUS'] : null,
        'pnFN850' => isset($post['pnFN850']) ? $post['pnFN850'] : 0,
        'pnDAYSS' => isset($post['pnDAYSS']) ? $post['pnDAYSS'] : 0,
        'pdBD201F' => isset($post['pdBD201F']) ? $post['pdBD201F'] : null,
        'pdBD201T' => isset($post['pdBD201T']) ? $post['pdBD201T'] : null,
        'pvSEARC' => isset($post['pvSEARC']) ? $post['pvSEARC'] : null,
        'pnOFFSET' => isset($post['pnOFFSET']) ? $post['pnOFFSET'] : 1,
        'pnLIMIT' => isset($post['pnLIMIT']) ? $post['pnLIMIT'] : 13,
        'pnSORT' => isset($post['pnSORT']) ? $post['pnSORT'] : 2,
        'pnDIRECTION' => isset($post['pnDIRECTION']) ? $post['pnDIRECTION'] : 0,
        'pvLOGIN' => $post['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabb200ty($post) /* : array */ {
    $rs = $this->_get('b200/lst_oftabb200ty', array(
        'pnFH000' => APP_MODULE,
        'pnFH200' => isset($post['pnFH200']) ? $post['pnFH200'] : 0,
        'pnFS200' => isset($post['pnFS200']) ? $post['pnFS200'] : 0,
        'pnFC450' => isset($post['pnFC450']) ? $post['pnFC450'] : 0,
        'pnFC500' => isset($post['pnFC500']) ? $post['pnFC500'] : 0,
        'pvFC550' => isset($post['pvFC550']) ? $post['pvFC550'] : null,
        'pnFB050' => isset($post['pnFB050']) ? $post['pnFB050'] : 0,
        'pnREPART' => isset($post['pnREPART']) ? $post['pnREPART'] : null,
        'pvUSER' => isset($post['pvUSER']) ? $post['pvUSER'] : "ALL",
        'pvSTATUS' => isset($post['pvSTATUS']) ? $post['pvSTATUS'] : null,
        'pnFN850' => isset($post['pnFN850']) ? $post['pnFN850'] : 0,
        'pnDAYSS' => isset($post['pnDAYSS']) ? $post['pnDAYSS'] : 0,
        'pdBD201F' => isset($post['pdBD201F']) ? $post['pdBD201F'] : null,
        'pdBD201T' => isset($post['pdBD201T']) ? $post['pdBD201T'] : null,
        'pvSEARC' => isset($post['pvSEARC']) ? $post['pvSEARC'] : null,
        'pnOFFSET' => isset($post['pnOFFSET']) ? $post['pnOFFSET'] : 1,
        'pnLIMIT' => isset($post['pnLIMIT']) ? $post['pnLIMIT'] : 13,
        'pnSORT' => isset($post['pnSORT']) ? $post['pnSORT'] : 2,
        'pnDIRECTION' => isset($post['pnDIRECTION']) ? $post['pnDIRECTION'] : 0,
        'pvLOGIN' => $post['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function storno_tabb200($post) {
    $rs = $this->_post('b200/storno_tabb200', array(
        'pvPB200' => isset($post['pvPB200']) ? $post['pvPB200'] : null,
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : null
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabc300c($post) /* : array */ {
    $rs = $this->_get('c300/list_oftabc300c_p5', array(
        'pvLOGIN' => $post['pvLOGIN'],
        'pnFC600' => isset($post['pvFB200']) ? $post['pvFB200'] : null,
        'pnFIRSTROW' => isset($post['pnFIRSTROW']) ? $post['pnFIRSTROW'] : 1,
        'pnROWCOUNT' => isset($post['pnROWCOUNT']) ? $post['pnROWCOUNT'] : 3,
        'pnSORT' => isset($post['pnSORT']) ? $post['pnSORT'] : 3
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function list_oftabb275($pvFB200) /* : array */ {
    $rs = $this->_get('b275/lst_oftabb275', array(
        'pvFB200' => isset($pvFB200) ? $pvFB200 : null
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function update_tabb400($post) /* : int */ {
    $rs = $this->_post('b400/update_tabb400_p3', array(
        'pnFB400' => isset($post['pnFB400']) ? $post['pnFB400'] : 0,
        'pnBN404' => isset($post['pnBN404']) ? $post['pnBN404'] : 0,
        'pvLOGIN' => $post['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements']; // Return number
    }
    return 0;
  }

  public function list_oftabb050e($post) /* : array */ {
    $rs = $this->_get('rb050/list_oftabb050e', array(
        'pnFB050' => isset($post['pnFB050']) ? $post['pnFB050'] : 0,
        'pnFS250' => isset($post['pnFS250']) ? $post['pnFS250'] : 0,
        'pvFC550' => isset($post['pvFC550']) ? $post['pvFC550'] : null,
        'pvBV003' => isset($post['pvBV003']) ? $post['pvBV003'] : null,
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : null
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function insert_tabb275($post)/* : int */ {
    $rs = $this->_post('b275/insert_tabb275_p3_f2', array(
        'pvFB200' => isset($post['pvFB200']) ? $post['pvFB200'] : null,
        'pvCARRAY' => isset($post['pvCARRAY']) ? $post['pvCARRAY'] : null,
        'pvLOGIN' => $post['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function insert_tabc300($post)/* : int */ {
    $rs = $this->_post('c300/insert_tabc300', array(
        'pvFC600' => isset($post['pvFC600']) ? $post['pvFC600'] : null, // pvFB200
        'pnPC300' => isset($post['pnPC300']) ? $post['pnPC300'] : 0,
        'pnFC500' => isset($post['pnFC500']) ? $post['pnFC500'] : 0,
        'pnFN100' => $post['pnFN100'],
        'pnFN550' => isset($post['pnFN550']) ? $post['pnFN550'] : 0,
        'pdCD301' => isset($post['pdCD301']) ? $post['pdCD301'] : null, // ngay bd
        'pdCD302' => isset($post['pdCD302']) ? $post['pdCD302'] : null, // ngay kt
        'pdCD303' => isset($post['pdCD303']) ? $post['pdCD303'] : null,
        'pvCV304' => isset($post['pvCV304']) ? $post['pvCV304'] : null, // ghi chu
        'pvCV305' => isset($post['pvCV305']) ? $post['pvCV305'] : null, // ghi chu
        'pvCV306' => isset($post['pvCV306']) ? $post['pvCV306'] : null, // ghi chu
        'pnCN307' => isset($post['pnCN307']) ? $post['pnCN307'] : 0,
        'pvCV308' => isset($post['pvCV308']) ? $post['pvCV308'] : "A",
        'pnCN309' => isset($post['pnCN309']) ? $post['pnCN309'] : 0,
        'pnCN310' => isset($post['pnCN310']) ? $post['pnCN310'] : 1,
        'pvCV311' => isset($post['pvCV311']) ? $post['pvCV311'] : null,
        'pvCV312' => isset($post['pvCV312']) ? $post['pvCV312'] : null,
        'pvCV313' => isset($post['pvCV313']) ? $post['pvCV313'] : null,
        'pvCV314' => isset($post['pvCV314']) ? $post['pvCV314'] : null, //pvFB200
        'pnCN315' => isset($post['pnCN315']) ? $post['pnCN315'] : 0, // % hoan thanh
        'pnCN316' => isset($post['pnCN316']) ? $post['pnCN316'] : 0,
        'plCB317' => isset($post['plCB317']) ? $post['plCB317'] : null, // mo ta
        'pnFC200' => isset($post['pnFC200']) ? $post['pnFC200'] : 0,
        'pvLOGIN' => $post['pvLOGIN'],
        'pnFH000' => APP_MODULE
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function insert_tabc300pmfast($post) {
    $rs = $this->_post('b275/insert_tabb275_p3_f2', array(
        'pnFH000' => APP_MODULE,
        'pvFC600' => isset($post['pvFC600']) ? $post['pvFC600'] : null,
        'pdCD302' => isset($post['pdCD302']) ? $post['pdCD302'] : null,
        'pnLOGIN' => $post['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function report_oftabb200fac($get)/* : array */ {
    $rs = $this->_get('rb200/report_oftabb200fac', array(
      'pnFH000' => $get['pnFH000'],
      'pnFH200' => $get['pnFH200'],
      'pnFN850' => isset($get['pnFN850']) ? $get['pnFN850'] : 0,
      'pdBD201F' => isset($get['pdBD201F']) ? $get['pdBD201F'] : null,
      'pdBD201T' => isset($get['pdBD201T']) ? $get['pdBD201T'] : null,
      'pvFC550' => isset($get['pvFC550']) ? $get['pvFC550'] : null,
      'pvLOGIN' => $get['pvLOGIN']

        // 'pnFH000' => $pnFH000,
        // 'pnFH200' => $pnFH200,
        // 'pnFN850' => $pnFN850,
        // 'pdBD201F' => $pdBD201F,
        // 'pdBD201T' => $pdBD201T,
        // 'pvFC550' => $pvFC550,
        // 'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

  public function report_oftabb200em($get)/* : array */ {
    $rs = $this->_get('rb200/report_oftabb200em', array(
        'pvFC550' => isset($get['pvFC550']) ? $get['pvFC550'] : null,
        'pdBD201F' => isset($get['pdBD201F']) ? $get['pdBD201F'] : null,
        'pdBD201T' => isset($get['pdBD201T']) ? $get['pdBD201T'] : null,
        'pnFN850' => isset($get['pnFN850']) ? $get['pnFN850'] : 0,
        'pnFH000' => $get['pnFH000'],
        'pnFH200' => $get['pnFH200'],
        'pvLOGIN' => $get['pvLOGIN']

        // 'pvFC550' => $pvFC550,
        // 'pdBD201F' => $pdBD201F,
        // 'pdBD201T' => $pdBD201T,
        // 'pnFN850' => $pnFN850,
        // 'pnFH200' => $pnFH200,
        // 'pnFH000' => $pnFH000,
        // 'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }

}
