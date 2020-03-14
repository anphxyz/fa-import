<?php

/**
 * @author: hyn - 02/03/2018
 * @model: b400_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class B400_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    public function lst_oftabb400bs( $pnFB050, $pvFC550, $pvLOGIN)/* : array */ {
        $rs = $this->_get('b400/lst_oftabb400bs', array(
            'pnFB050' => $pnFB050,
            'pvFC550' => $pvFC550,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function lst_oftabb400( $pnFB050, $pvBV003, $pvLOGIN)/* : array */ {
        $rs = $this->_get('b400/lst_oftabb400', array(
            'pnFB050' => $pnFB050,
            'pvBV003' => $pvBV003,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    //---------------faci-------------
    public function history_tabb400($pnFH000, $pnFH200, $pnFB050, $pnFS200, $pvFC550, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b400/history_tabb400', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFB050' => $pnFB050,
            'pnFS200' => $pnFS200,
            'pvFC550' => $pvFC550,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function update_tabb400_p18($pnFH000, $pnFH200, $pnFB050, $pnFS200, $pnFS250, $pvFC550, $pnFB100,
    $pvBV001, $pvBV003, $pvBV451, $pnBN402, $pnBN405, $pnBN406, $pvBV408, $pvBV410, $pnBN413, $pdBD415, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b400/update_tabb400_p18', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFB050' => $pnFB050,
            'pnFS200' => $pnFS200,
            'pnFS250' => $pnFS250,
            'pvFC550' => $pvFC550,
            'pnFB100' => $pnFB100,
            'pvBV001' => $pvBV001,
            'pvBV003' => $pvBV003,
            'pvBV451' => $pvBV451,
            'pnBN402' => $pnBN402,
            'pnBN405' => $pnBN405,
            'pnBN406' => $pnBN406,
            'pvBV408' => $pvBV408,
            'pvBV410' => $pvBV410,
            'pnBN413' => $pnBN413,
            'pdBD415' => $pdBD415,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function storno_tabb400($pnPB400, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b400/storno_tabb400', array(
            'pnPB400' => $pnPB400,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function update_tabb400_p3($pnFB400, $pnBN404, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b400/update_tabb400_p3', array(
            'pnFB400' => $pnFB400,
            'pnBN404' => $pnBN404,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function insert_tabb400($pnPB400, $pnFB050, $pnFS250, $pnFC450, $pvFC550, $pnBN401, $pnBN402, $pdBD403, $pnBN404, $pnBN405, $pnBN406, $pvBV407, $pvBV408, $pvBV409, $pvBV410, $pnBN411, $pnBN412, $pnBN413, $pdBD414, $pdBD415, $pdBD416, $pnFH000, $pnFH200, $pnFS200, $pnFB100, $pnFB000, $pvBV001, $pvVV501, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b400/insert_tabb400', array(
            'pnPB400' => $pnPB400,
            'pnFB050' => $pnFB050,
            'pnFS250' => $pnFS250,
            'pnFC450' => $pnFC450,
            'pvFC550' => $pvFC550,
            'pnBN401' => $pnBN401,
            'pnBN402' => $pnBN402,
            'pdBD403' => $pdBD403,
            'pnBN404' => $pnBN404,
            'pnBN405' => $pnBN405,
            'pnBN406' => $pnBN406,
            'pvBV407' => $pvBV407,
            'pvBV408' => $pvBV408,
            'pvBV409' => $pvBV409,
            'pvBV410' => $pvBV410,
            'pnBN411' => $pnBN411,
            'pnBN412' => $pnBN412,
            'pnBN413' => $pnBN413,
            'pdBD414' => $pdBD414,
            'pdBD415' => $pdBD415,
            'pdBD416' => $pdBD416,
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFS200' => $pnFS200,
            'pnFB100' => $pnFB100,
            'pnFB000' => $pnFB000,
            'pvBV001' => $pvBV001,
            'pvVV501' => $pvVV501,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    //---------------imp-------------

    public function update_tabb400pm($pnFB400, $pvBV401, $pnBN402, $pvBV408, $pnBN412, $pnBN413, $pvBV001, $pvBV003, $pvVV501, $pnFB450, 
    $pvBV451, $pnBN452, $pvBV453, $pvBV454, $pnBN458, $pvBV203, $pnFB100, $pvBV052, $pnFB050, $pnFN850, $pvSV251, $pnFS250, $pnFS200, $pnFH200, $pnFH000, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b400/update_tabb400pm', array(
            'pnFB400' => $pnFB400,
            'pvBV401' => $pvBV401,
            'pnBN402' => $pnBN402,
            'pvBV408' => $pvBV408,
            'pnBN412' => $pnBN412,
            'pnBN413' => $pnBN413,
            'pvBV001' => $pvBV001,
            'pvBV003' => $pvBV003,
            'pvVV501' => $pvVV501,
            'pnFB450' => $pnFB450,
            'pvBV451' => $pvBV451,
            'pnBN452' => $pnBN452,
            'pvBV453' => $pvBV453,
            'pvBV454' => $pvBV454,
            'pnBN458' => $pnBN458,
            'pvBV203' => $pvBV203,
            'pnFB100' => $pnFB100,
            'pvBV052' => $pvBV052,
            'pnFB050' => $pnFB050,
            'pnFN850' => $pnFN850,
            'pvSV251' => $pvSV251,
            'pnFS250' => $pnFS250,
            'pnFS200' => $pnFS200,
            'pnFH200' => $pnFH200,
            'pnFH000' => $pnFH000,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function update_tabb400bt($pnFB400, $pvBV401, $pnBN402, $pvBV408, $pnBN412, $pnBN413, $pvBV001, $pvBV003, $pvVV501, $pnFB450, $pvBV451, 
        $pnBN452, $pvBV453, $pvBV455, $pnBN458, $pvBV203, $pnFB100, $pvBV052, $pnFB050, $pnFN850, $pvSV251, $pnFS250, $pnFS200, $pnFH200, $pnFH000, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b400/update_tabb400bt', array(
            'pnFB400' => $pnFB400,
            'pvBV401' => $pvBV401,
            'pnBN402' => $pnBN402,
            'pvBV408' => $pvBV408,
            'pnBN412' => $pnBN412,   
            'pnBN413' => $pnBN413,
            'pvBV001' => $pvBV001,
            'pvBV003' => $pvBV003,
            'pvVV501' => $pvVV501,
            'pnFB450' => $pnFB450,
            'pvBV451' => $pvBV451,
            'pnBN452' => $pnBN452,
            'pvBV453' => $pvBV453,
            'pvBV455' => $pvBV455,
            'pnBN458' => $pnBN458,
            'pvBV203' => $pvBV203,
            'pnFB100' => $pnFB100,
            'pvBV052' => $pvBV052,
            'pnFB050' => $pnFB050,
            'pnFN850' => $pnFN850,
            'pvSV251' => $pvSV251,
            'pnFS250' => $pnFS250,
            'pnFS200' => $pnFS200,
            'pnFH200' => $pnFH200,
            'pnFH000' => $pnFH000,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
}