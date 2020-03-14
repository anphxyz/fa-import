<?php

/**
 * @author: hyn - 02/03/2018
 * @model: v500_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class V500_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    public function lst_oftabv500ebs($pnFH000, $pnFH200, $pnORGID, $pnVN508, $pvVV501, $pvLOGIN)/* : array */ {
        $rs = $this->_get('v500/lst_oftabv500ebs', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnORGID' => $pnORGID,
            'pnVN508' => $pnVN508,
            'pvVV501' => $pvVV501,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function lst_oftabv500ebs_p1($pvLOGIN)/* : array */ {
        $rs = $this->_get('v500/lst_oftabv500ebs_p1', array('pvLOGIN' => $pvLOGIN,));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function lst_oftabv500ebs_p6($pnFH000, $pnFH200, $pnORGID, $pnVN508, $pvVV501, $pvLOGIN)/* : array */ {
        $rs = $this->_get('v500/lst_oftabv500ebs_p6', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnORGID' => $pnORGID,
            'pnVN508' => $pnVN508,
            'pvVV501' => $pvVV501,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function lst_oftabv500ebs_p7($pnFH000, $pnFH200, $pnSITID, $pnORGID, $pnVN508, $pvVV501, $pvLOGIN)/* : array */ {
        $rs = $this->_get('v500/lst_oftabv500ebs_p7', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnSITID' => $pnSITID,
            'pnORGID' => $pnORGID,
            'pnVN508' => $pnVN508,
            'pvVV501' => $pvVV501,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function lst_oftabv500ein($pnFH200, $pnSITID, $pnORGID, $pnVN508, $pvVV501, $pvLOGIN)/* : array */ {
        $rs = $this->_get('v500/lst_oftabv500ein', array(
            'pnFH200' => $pnFH200,
            'pnSITID' => $pnSITID,
            'pnORGID' => $pnORGID,
            'pnVN508' => $pnVN508,
            'pvVV501' => $pvVV501,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function merge_ebstabv500it($pnFH000, $pnFH200, $pnEXTID, $pnVN509, $pvLOGIN)/* : array */ {
        $rs = $this->_post('v500/merge_ebstabv500it', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnEXTID' => $pnEXTID,
            'pnVN509' => $pnVN509,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function merge_ebstabv500($pnFH000, $pnFH200, $pnEXTID, $pvLOGIN)/* : array */ {
        $rs = $this->_post('v500/merge_ebstabv500', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnEXTID' => $pnEXTID,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
}
