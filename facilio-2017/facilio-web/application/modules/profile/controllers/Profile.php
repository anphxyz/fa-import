<?php

/**
 * @author: Toailq - 12/12/2017
 * @module: Profile Controller
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class Profile extends Facilio {

    public function __construct() {
        parent::__construct();
    }

    /*     * **************************************************************** */
    /*     * *****************************[PUBLIC]*************************** */
    /*     * **************************************************************** */

    public function select_rowoftable_p5_str() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->sltRowofTableP5Str($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['message'] = lang('_load_list_success');
            $res['data'] = $arrayRS;
            $res['firstName'] = $this->_fuser['NV102'];
            $res['lastName'] = $this->_fuser['NV103'];
            $res['company'] = $this->_fuser['HV201'];
        }
        echo json_encode($res);
    }

    public function create_dataq100() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_update_failed'));
        $arrayRS = $this->createDataQ100($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['message'] = lang('_update_success');
            $res['data'] = $arrayRS;
        }
        echo json_encode($res);
    }

    /*     * **************************************************************** */
    /*     * ****************************[PRIVATE]*************************** */
    /*     * **************************************************************** */

    private function sltRowofTableP5Str($get)/*     * : array */ {
        $pvSCHEMA = isset($get['pvSCHEMA']) ? $get['pvSCHEMA'] : 'BNEXY';
        $pvTABNAME = isset($get['pvTABNAME']) ? $get['pvTABNAME'] : 'Q100';
        $pvPRIMARYKEY = isset($get['pvPRIMARYKEY']) ? $get['pvPRIMARYKEY'] : 'FN100';
        $pnCONDITION = isset($get['$pnCONDITION']) ? $get['$pnCONDITION'] : $this->_fuser['PN100'];
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->select_rowoftable_p5_str($pvSCHEMA, $pvTABNAME, $pvPRIMARYKEY, $pnCONDITION, $this->_fuser['QV101']);
    }

    private function createDataQ100($post)/*     * : array */ {
        $post['pnFN100'] = $this->_fuser['PN100'];
        $post['pvQV101'] = $this->_fuser['QV101'];
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('Adm_model', 'ADM_MODEL');
        return $this->ADM_MODEL->create_dataq100($post);
    }

}
