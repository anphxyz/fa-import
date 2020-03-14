<?php

/**
 * @author: Toailq - 26/03/2018
 * @module: B050S Controller
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class B050S extends Facilio {

    public function __construct() {
        parent::__construct();
        $this->lang->load('facilio', getCountryFromIP());
    }

    /*     * **************************************************************** */
    /*     * *****************************[PUBLIC]*************************** */
    /*     * **************************************************************** */

    public function index() {
        $modules = array('modules.b050s');
        $this->loadTemplate('Facilio', 'b050s_view', $modules);
    }

    public function comb_tabs200_p4() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabS200P4($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['message'] = lang('_load_list_success');
            $res['data'] = $arrayRS;
        };
        echo json_encode($res);
    }

    public function lst_oftabb050s() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->lstOfTabB050S($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['message'] = lang('_load_list_success');
            $res['data'] = $arrayRS;
        };
        echo json_encode($res);
    }

    /*     * **************************************************************** */
    /*     * ****************************[PRIVATE]*************************** */
    /*     * **************************************************************** */

    private function combTabS200P4($get)/*     * : array */ {
        $pnSEARC = isset($get['pnSEARC']) ? $get['pnSEARC'] : null;
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_tabs200_p4(APP_MODULE, $this->_FH200S, $pnSEARC, $this->_fuser['QV101']);
    }

    private function lstOfTabB050S($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pnFH200'] = $this->_FH200S;
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('B050_model', 'B050_MODEL');
        return $this->B050_MODEL->lst_oftabb050s($get);
    }

}
