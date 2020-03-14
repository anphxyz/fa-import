<?php

/**
 * @author: Toailq - 19/01/2018
 * @module: B200DB Controller
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class B200DB extends Facilio {

    public function __construct() {
        parent::__construct();
        $this->lang->load('facilio', getCountryFromIP());
    }

    /*     * **************************************************************** */
    /*     * *****************************[PUBLIC]*************************** */
    /*     * **************************************************************** */

    public function index() {
        $modules = array( 'modules.b200db', 'modules.chart-dashboard');
        $this->loadTemplate('DASH', 'b200db_view', $modules);
    }

    public function report_oftabb200em() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->reportOfTabB200EM($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function report_oftabb200fac() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->reportOfTabB200FAC($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    /*     * **************************************************************** */
    /*     * ****************************[PRIVATE]*************************** */
    /*     * **************************************************************** */

    private function reportOfTabB200EM($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pnFH200'] = $this->_FH200S;
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('B200_model', 'B200_MODEL');
        return $this->B200_MODEL->report_oftabb200em($get);
    }

    private function reportOfTabB200FAC($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pnFH200'] = $this->_FH200S;
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('B200_model', 'B200_MODEL');
        return $this->B200_MODEL->report_oftabb200fac($get);
    }

}
