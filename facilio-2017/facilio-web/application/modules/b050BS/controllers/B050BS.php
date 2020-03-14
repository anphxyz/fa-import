<?php

/**
 * @author: Toailq - 26/03/2018
 * @module: B050BS Controller
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class B050BS extends Facilio {

    public function __construct() {
        parent::__construct();
        $this->lang->load('facilio', getCountryFromIP());
    }

    /*     * **************************************************************** */
    /*     * *****************************[PUBLIC]*************************** */
    /*     * **************************************************************** */

    public function index() {
        $modules = array('modules.b050bs');
        $this->loadTemplate('Facilio', 'b050bs_view', $modules);
    }

    public function report_oftabb050bs() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->reportOfTabB050BS($get);
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

    private function reportOfTabB050BS($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pnFH200'] = $this->_FH200S;
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('B050_model', 'B050_MODEL');
        return $this->B050_MODEL->report_oftabb050bs($get);
    }

}
