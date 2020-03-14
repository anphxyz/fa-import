<?php

/**
 * @Author: Linhnc
 * @Create: 18/12/2017
 * @Model: Comb_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class Comb_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    public function comb_tabq350($pnFH000, $pnFH200, $pvLOGIN){
        $rs = $this->_get('comb/comb_tabq350', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvLOGIN ' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_TabN850($pnFH000, $pnFH200, $pvLOGIN){
        $rs = $this->_get('comb/comb_tabn850', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvLOGIN ' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_TabN100G($pnFN850, $pvLOGIN){
        $rs = $this->_get('comb/comb_tabn100g', array(
            'pnFN850' => $pnFN850,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_TabV750($pnFH000, $pnFH200, $pvLOGIN){
        $rs = $this->_get('comb/comb_tabv750', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_organizationebs($pnORDID, $pvLOGIN){
        $rs = $this->_get('comb/comb_organizationebs', array(
            'pnORDID' => $pnORDID,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_tabv300($pnFH000, $pnFH200, $pvLOGIN) {
        $rs = $this->_get('comb/comb_tabv300', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_tabn100l_p4($pnFH000, $pnFH200, $pvLOGIN, $pnFN850) {
        $rs = $this->_get('comb/comb_tabn100l_p4', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvLOGIN' => $pvLOGIN,
            'pnFN850' => $pnFN850
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_tabc150k($pnFH200, $pvLOGIN){
        $rs = $this->_get('comb/comb_tabc150k', array(
            'pnFH200' => $pnFH200,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_tabs250b($pnFH000, $pnFB050, $pvLOGIN){
        $rs = $this->_get('comb/comb_tabs250b', array(
            'pnFH000' => $pnFH000,
            'pnFB050' => $pnFB050,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_tabb050e($pnFH000, $pnFH200, $pnFN850, $pvLOGIN){
        $rs = $this->_get('comb/comb_tabb050e', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFN850' => $pnFN850,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_tabh450($pnFH000, $pnFH200, $pnFH600, $pvLOGIN){
        $rs = $this->_get('comb/comb_tabh450', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFH600' => $pnFH600,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function select_rowoftable_p5_str($pvSCHEMA, $pvTABNAME, $pvPRIMARYKEY, $pnCONDITION, $pvLOGIN){
        $rs = $this->_get('comb/select_rowoftable_p5_num', array(
            'pvSCHEMA' => $pvSCHEMA,
            'pvTABNAME' => $pvTABNAME,
            'pvPRIMARYKEY' => $pvPRIMARYKEY,
            'pnCONDITION' => $pnCONDITION,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function comb_tabh250($get){
        $rs = $this->_get('comb/comb_tabh250', array(
            'pnFH000' => APP_MODULE,
            'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
            'pvLOGIN' => $get['pvLOGIN'],
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function comb_tabs200_p4($pnFH000, $pnFH200, $pnSEARC, $pvLOGIN)/* : array */ {
        $rs = $this->_get('comb/comb_tabs200_p4', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnSEARC' => $pnSEARC,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json, get list employees of transfer work
     */
    public function comb_tabn100c($pnFH000, $pnFH200, $pvLOGIN, $pnFN850)/* : array */ {
        $rs = $this->_get('comb/comb_tabn100c', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvLOGIN' => $pvLOGIN,
            'pnFN850' => $pnFN850
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json, get list selected employees of transfer work
     */
    public function comb_tabn100m($pnFH000, $pnFH200, $pnFB050, $pvLOGIN)/* : array */ {
        $rs = $this->_get('comb/comb_tabn100m', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFB050' => $pnFB050,
            'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

}
