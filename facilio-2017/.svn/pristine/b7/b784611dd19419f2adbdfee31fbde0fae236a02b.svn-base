<?php

/**
 * @Author: Linhnc
 * @Create: 2/3/2018
 * @Model: n100_model
 */
if (!defined('BASEPATH')) {
  exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class N100_model extends Api_model {

  public function __construct() {
    parent::__construct();
  }

  public function list_oftabn100() /* : array */ {
    $rs = $this->_get('n100/list_oftabn100', array(
        'pnFH000' => APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pvNV103' => isset($get['pvNV103']) ? $get['pvNV103'] : null, // tên
        'pnNN104' => isset($get['pnNN104']) ? $get['pnNN104'] : 0,
        'pnNN105' => isset($get['pnNN105']) ? $get['pnNN105'] : 0, // quan ly 1,khong quan ly 0
        'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 0,
        'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 0,
        'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 0,
        'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
        'pvLOGIN' => $get['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function storno_tabn100($pnPN100, $pvLOGIN){
    $rs = $this->_post('n100/storno_tabn100', array(
        'pnPN100' => $pnPN100,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function insert_tabn100($pnPN100, $pnFN600, $pnFK100, $pnFH200, $pvNV102, $pvNV103, $pnNI104, $pnNI105, $pvNV106, $pvNV107, $pvNV108, $pvNV109, $pvNV110, $pvNV111, $pvNV112, $pvNV113, $pnNN114, $pvNV115, $pvNV116, $pnNN117, $pdND118, $pnFH000, $pvLOGIN){
    $rs = $this->_post('n100/insert_tabn100', array(
        'pnPN100' => $pnPN100,
        'pnFN600' => $pnFN600,
        'pnFK100' => $pnFK100,
        'pnFH200' => $pnFH200,
        'pvNV102' => $pvNV102,
        'pvNV103' => $pvNV103,
        'pnNI104' => $pnNI104,
        'pnNI105' => $pnNI105,
        'pvNV106' => $pvNV106,
        'pvNV107' => $pvNV107,
        'pvNV108' => $pvNV108,
        'pvNV109' => $pvNV109,
        'pvNV110' => $pvNV110,
        'pvNV111' => $pvNV111,
        'pvNV112' => $pvNV112,
        'pvNV113' => $pvNV113,
        'pnNN114' => $pnNN114,
        'pvNV115' => $pvNV115,
        'pvNV116' => $pvNV116,
        'pnNN117' => $pnNN117,
        'pdND118' => $pdND118,
        'pnFH000' => $pnFH000,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function insert_tabn100bs($pnPN100, $pvNV102, $pvNV103, $pnNI104, $pnNI105, $pvNV106, $pvNV107, $pvNV108, $pvNV109, $pvNV110, $pvNV111, $pvNV112, $pvNV113, $pnNN114, $pvNV115, $pvNV116, $pnNN117, $pdND118, $pnFN850, $pnFQ350, $pnFN600, $pnFK100, $pnFH200, $pnFH000, $pvLOGIN){
    $rs = $this->_post('n100/insert_tabn100bs', array(
        'pnPN100' => $pnPN100,
        'pvNV102' => $pvNV102,
        'pvNV103' => $pvNV103,
        'pnNI104' => $pnNI104,
        'pnNI105' => $pnNI105,
        'pvNV106' => $pvNV106,
        'pvNV107' => $pvNV107,
        'pvNV108' => $pvNV108,
        'pvNV109' => $pvNV109,
        'pvNV110' => $pvNV110,
        'pvNV111' => $pvNV111,
        'pvNV112' => $pvNV112,
        'pvNV113' => $pvNV113,
        'pnNN114' => $pnNN114,
        'pvNV115' => $pvNV115,
        'pvNV116' => $pvNV116,
        'pnNN117' => $pnNN117,
        'pdND118' => $pdND118,
        'pnFN850' => $pnFN850,
        'pnFQ350' => $pnFQ350,
        'pnFN600' => $pnFN600,
        'pnFK100' => $pnFK100,
        'pnFH200' => $pnFH200,
        'pnFH000' => $pnFH000,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
  public function check_loginexist($pvLOGIN){
    $rs = $this->_post('n100/check_loginexist', array(
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
  public function update_tabn100_p3($pnPN100, $pnNN117, $pvLOGIN){
    $rs = $this->_post('n100/update_tabn100_p3', array(
        'pnPN100' => $pnPN100,
        'pnNN117' => $pnNN117,
        'pvLOGIN' => $pvLOGIN
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
  public function update_tabn100_p6($post){
    $rs = $this->_post('n100/update_tabn100_p6', array(
        'pnFH000' => $post['pnFH000'],
        'pnFH200' => $post['pnFH200'],
        'pnFB050' => isset($post['pnFB050']) ? $post['pnFB050'] : 0,
        'pnPN100N' => isset($post['pnPN100N']) ? $post['pnPN100N'] : 0,
        'pnPN100O' => isset($post['pnPN100O']) ? $post['pnPN100O'] : 0,
        'pvLOGIN' => $post['pvLOGIN']
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  /* NEW MODEL=========================================================
  
  */

  public function new_list_oftabn100($get) /* : array */ {
    $rs = $this->_get('n100/list_oftabn100', array(
        'pnFH000' => isset($get['pnFH000']) ? $get['pnFH000'] : APP_MODULE,
        'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
        'pvNV103' => isset($get['pvNV103']) ? $get['pvNV103'] : '', //tên
        'pnNN104' => isset($get['pnNN104']) ? $get['pnNN104'] : 0,
        'pnNN105' => isset($get['pnNN105']) ? $get['pnNN105'] : 0, // quan ly 1,khong quan ly 0
        'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
        'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 15,
        'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 1,
        'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
        'pvLOGIN' => isset($get['pvLOGIN']) ? $get['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return [];
  }
  
  public function new_storno_tabn100($post){
    $rs = $this->_post('n100/storno_tabn100', array(
        'pnPN100' => isset($post['PN100']) ? $post['PN100'] : 0,
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function new_insert_tabn100($post){
    $rs = $this->_post('n100/insert_tabn100', array(
        'pnPN100' => isset($post['PN100']) ? $post['PN100'] : 0,
        'pnFN600' => isset($post['FN600']) ? $post['FN600'] : 0,
        'pnFK100' => isset($post['FK100']) ? $post['FK100'] : 0,
        'pnFH200' => isset($post['FH200']) ? $post['FH200'] : 0,
        'pvNV102' => isset($post['NV102']) ? $post['NV102'] : '',
        'pvNV103' => isset($post['NV103']) ? $post['NV103'] : '',
        'pnNI104' => isset($post['NI104']) ? $post['NI104'] : 0,
        'pnNI105' => isset($post['NI105']) ? $post['NI105'] : 0,
        'pvNV106' => isset($post['NV106']) ? $post['NV106'] : '',
        'pvNV107' => isset($post['NV107']) ? $post['NV107'] : '',
        'pvNV108' => isset($post['NV108']) ? $post['NV108'] : '',
        'pvNV109' => isset($post['NV109']) ? $post['NV109'] : '',
        'pvNV110' => isset($post['NV110']) ? $post['NV110'] : '',
        'pvNV111' => isset($post['NV111']) ? $post['NV111'] : '',
        'pvNV112' => isset($post['NV112']) ? $post['NV112'] : '',
        'pvNV113' => isset($post['NV113']) ? $post['NV113'] : '',
        'pnNN114' => isset($post['NN114']) ? $post['NN114'] : 0,
        'pvNV115' => isset($post['NV115']) ? $post['NV115'] : '',
        'pvNV116' => isset($post['NV116']) ? $post['NV116'] : '',
        'pnNN117' => isset($post['NN117']) ? $post['NN117'] : 0,
        'pdND118' => isset($post['ND118']) ? $post['ND118'] : '',
        'pnFH000' => isset($post['FH000']) ? $post['FH000'] : APP_MODULE,
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

  public function new_insert_tabn100bs($post){
    $rs = $this->_post('n100/insert_tabn100bs', array(
        'pnPN100' => isset($post['PN100']) ? $post['PN100'] : 0,
        'pvNV102' => isset($post['NV102']) ? $post['NV102'] : '',// họ 
        'pvNV103' => isset($post['NV103']) ? $post['NV103'] : '',// tên 
        'pnNI104' => isset($post['NI104']) ? $post['NI104'] : 1,
        'pnNI105' => isset($post['NI105']) ? $post['NI105'] : 0,
        'pvNV106' => isset($post['NV106']) ? $post['NV106'] : '', //username
        'pvNV107' => isset($post['NV107']) ? $post['NV107'] : '', //gender
        'pvNV108' => isset($post['NV108']) ? $post['NV108'] : 'vi', //lang
        'pvNV109' => isset($post['NV109']) ? $post['NV109'] : '', //chức vụ
        'pvNV110' => isset($post['NV110']) ? $post['NV110'] : '', //chức danh
        'pvNV111' => isset($post['NV111']) ? $post['NV111'] : '', //
        'pvNV112' => isset($post['NV112']) ? $post['NV112'] : '', //
        'pvNV113' => isset($post['NV113']) ? $post['NV113'] : '', //
        'pnNN114' => isset($post['NN114']) ? $post['NN114'] : 0, //Giờ làm việc
        'pvNV115' => isset($post['NV115']) ? $post['NV115'] : 'N100', //N100 = nhan vien cong ty; K100: nhan viec khach // hang; V350: nhan vien nha cung cap
        'pvNV116' => isset($post['NV116']) ? $post['NV116'] : '', //Mã nhân viên
        'pnNN117' => isset($post['NN117']) ? $post['NN117'] : 0, //Ngân sách
        'pdND118' => isset($post['ND118']) ? $post['ND118'] : '', //DoB
        'pnFN850' => isset($post['FN850']) ? $post['FN850'] : 0, //Nhóm quyền
        'pnFQ350' => isset($post['FQ350']) ? $post['FQ350'] : 0, //nhóm nhân viên
        'pnFN600' => isset($post['FN600']) ? $post['FN600'] : 0, //
        'pnFK100' => isset($post['FK100']) ? $post['FK100'] : 0, //
        'pnFH200' => isset($post['FH200']) ? $post['FH200'] : 0, //
        'pnFH000' => isset($post['FH000']) ? $post['FH000'] : APP_MODULE,
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
  public function new_check_loginexist($post){
    $rs = $this->_post('n100/check_loginexist', array(
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
  public function new_update_tabn100_p3($post){
    $rs = $this->_post('n100/update_tabn100_p3', array(
        'pnPN100' => isset($post['PN100']) ? $post['PN100'] : 0,
        'pnNN117' => isset($post['NN117']) ? $post['NN117'] : 0,
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }
  
  public function new_update_tabn100_p6($post){
    $rs = $this->_post('n100/update_tabn100_p6', array(
        'pnFH000' => isset($post['FH000']) ? $post['FH000'] : APP_MODULE,
        'pnFH200' => isset($post['FH200']) ? $post['FH200'] : 0,
        'pnFB050' => isset($post['FB050']) ? $post['FB050'] : 0,
        'pnPN100N' => isset($post['PN100N']) ? $post['PN100N'] : 0,
        'pnPN100O' => isset($post['PN100O']) ? $post['PN100O'] : 0,
        'pvLOGIN' => isset($post['pvLOGIN']) ? $post['pvLOGIN'] : '',
    ));
    if ($rs['status'] === 'success' && $rs['elements']) {
      return $rs['elements'];
    }
    return 0;
  }

}
