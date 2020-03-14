<?php

/**
 * @author: Toailq - 18/01/2018
 * @module: V750 Controller
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class V750 extends Facilio {

    public function __construct() {
        parent::__construct();
        $this->lang->load('facilio', getCountryFromIP());
    }

    /*     * **************************************************************** */
    /*     * *****************************[PUBLIC]*************************** */
    /*     * **************************************************************** */

    public function index() {
        $modules = array( 'modules.v750');
        $this->loadTemplate('Vật tư thay thế', 'v750_view', $modules);
    }

    public function insert_tabv750() {
        $post = filter_input_array(INPUT_POST);
        $arrayRS = $this->insertTabV750($post);
        $res = array('status' => 'error', 'message' => lang('_update_failed'), 'data' => $arrayRS);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_update_success');
        }
        echo json_encode($res);
    }

    public function comb_tabn100l_p4() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabN100LP4($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function comb_tabv300() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabV300($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function lst_oftabv750() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->lstOfTabV750($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function lst_ofemployee() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->lstOfEmployee($get);
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

    private function insertTabV750($post)/*     * : int */ {
        $post['pnFH000'] = APP_MODULE;
        $post['pnFH200'] = $this->_FH200S;
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $post['pnFK100'] = $this->_fuser['FK100'];
        $post['pnFV050'] = $this->_fuser['EXTID'];
        $this->load->model('V750_model', 'V750_MODEL');
        return $this->V750_MODEL->insert_tabv750($post);
    }

    private function lstOfEmployee($get)/*     * : array */ {
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $get['pnEXTID'] = isset($get['pnEXTID']) ? $get['pnEXTID'] : $this->_fuser['EXTID'];
        $this->load->model('V750_model', 'V750_MODEL');
        return $this->V750_MODEL->lst_ofemployee($get);
    }

    private function lstOfTabV750($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pnFH200'] = $this->_FH200S;
        $get['pvLOGIN'] = isset($get['sltN100L']) ? $get['sltN100L'] : $this->_fuser['QV101'];
        $get['pnORGID'] = isset($get['pnORGID']) ? $get['pnORGID'] : $this->_fuser['GRPID'];
        $this->load->model('V750_model', 'V750_MODEL');
        return $this->V750_MODEL->lst_oftabv750($get);
    }

    private function combTabV300($get)/*     * : array */ {
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_tabv300(APP_MODULE, $this->_FH200S, $this->_fuser['QV101']);
    }

    private function combTabN100LP4($get)/*     * : array */ {
        $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_tabn100l_p4(APP_MODULE, $this->_FH200S, $this->_fuser['QV101'], $pnFN850);
    }

}
