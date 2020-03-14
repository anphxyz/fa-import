<?php

/**
 * @author: hyn - 02/03/2018
 * @model: v200_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class V200_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    public function lst_oftabv200fac($get)/* : array */ {
        $rs = $this->_get('v200/lst_oftabv200fac', array(
            'pnFH000' => APP_MODULE,
            'pnFH200' => isset($get['FH200']) ? $get['FH200'] : 0,
            'pvLOGIN' => $get['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function merge_ebstabv200($pnFH000, $pnFH200, $pvPV200, $pvVV201, $pvVV202, $pvLOGIN)/* : array */ {
        $rs = $this->_post('v200/merge_ebstabv200', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvPV200' => $pvPV200,
            'pvVV201' => $pvVV201,
            'pvVV202' => $pvVV202,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
}