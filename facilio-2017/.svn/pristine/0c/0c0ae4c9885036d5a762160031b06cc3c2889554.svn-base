<?php

/**
 * @author: hyn - 02/03/2018
 * @model: s350_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class S350_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    public function list_oftabs350l($pnFH000, $pnFH200, $pnPS250, $pvSV253, $pvLOGIN)/* : array */ {
        $rs = $this->_get('s350/list_oftabs350l', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFS200' => $pnFS200,
            'pnPS250' => $pnPS250,
            'pvSV253' => $pvSV253,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function list_oftabs350r($pnFH000, $pnFH200, $pnFS200, $pvSEARC, $pvLOGIN)/* : array */ {
        $rs = $this->_get('s350/list_oftabs350r', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFS200' => $pnFS200,
            'pvSEARC' => $pvSEARC,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function list_oftabs350v($pnFH000, $pnFH200, $pnFS200, $pnPS250)/* : array */ {
        $rs = $this->_get('s350/list_oftabs350v', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFS200' => $pnFS200,
            'pvSEARC' => $pnPS250,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabs350($pnPS350, $pnFH000, $pnFH200, $pnFS200, $pnFS250, $pdSD351, $pdSD352, $pvSV353, $pnSN354, $pvSV355, $pvSV356, $pvSV357, $pvLOGIN, $pnMAINT)/* : array */ {
        $rs = $this->_post('s350/insert_tabs350', array(
          'pnPS350' => $pnPS350,
          'pnFH000' => $pnFH000,
          'pnFH200' => $pnFH200,
          'pnFS200' => $pnFS200,
          'pnFS250' => $pnFS250,
          'pdSD351' => $pdSD351,
          'pdSD352' => $pdSD352,
          'pvSV353' => $pvSV353,
          'pnSN354' => $pnSN354,
          'pvSV355' => $pvSV355,
          'pvSV356' => $pvSV356,
          'pvSV357' => $pvSV357,
          'pvLOGIN' => $pvLOGIN,
          'pnMAINT' => $pnMAINT,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }


    public function storno_tabs350($pnFS200, $pnFS250, $pdSD351, $pvLOGIN)/* : array */ {
        $rs = $this->_post('s350/storno_tabs350', array(
          'pnFS200' => $pnFS200,
          'pnFS250' => $pnFS250,
          'pdSD351' => $pdSD351,
          'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

}