<?php

/**
 * @author: hyn - 02/03/2018
 * @model: s250_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class S250_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    public function list_oftabs250ht($pnFH000, $pnFH200, $pnFC550, $pvSV253, $pvSV254, $pnOFFSET, $pnLIMIT, $pnSORT, $pnDIRECTION, $pvLOGIN)/* : array */ {
        $rs = $this->_get('s250/list_oftabs250ht', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFC550' => $pnFC550,
            'pvSV253' => $pvSV253,
            'pvSV254' => $pvSV254,
            'pnOFFSET' => $pnOFFSET,
            'pnLIMIT' => $pnLIMIT,
            'pnSORT' => $pnSORT,
            'pnDIRECTION' => $pnDIRECTION,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function insert_tabs250($pnFH000, $pnFH200, $pnPS250, $pnFC450, $pvFC550, $pvSV251, $pvSV252, $pvSV253, $pvSV254, $pnSN255, $pnSN256, $pvLOGIN)/* : array */ {
        $rs = $this->_post('s250/insert_tabs250', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnPS250' => $pnPS250,
            'pnFC450' => $pnFC450,
            'pvFC550' => $pvFC550,
            'pvSV251' => $pvSV251,
            'pvSV252' => $pvSV252,
            'pvSV253' => $pvSV253,
            'pvSV254' => $pvSV254,
            'pnSN255' => $pnSN255,
            'pnSN256' => $pnSN256,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function storno_tabs250($pnPS250, $pvLOGIN)/* : array */ {
        $rs = $this->_post('s250/storno_tabs250', array(
            'pnPS250' => $pnPS250,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
}