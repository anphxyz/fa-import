<?php

/**
 * @author: Toailq - 23/03/2018
 * @module: B050POS Controller
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class B050POS extends Facilio {

    public function __construct() {
        parent::__construct();
        $this->lang->load('facilio', getCountryFromIP());
    }

    /*     * **************************************************************** */
    /*     * *****************************[PUBLIC]*************************** */
    /*     * **************************************************************** */

    public function index() {
        $modules = array('modules.b050pos');
        $this->loadTemplate('Facilio', 'b050pos_view', $modules);
    }

    public function hist_oftabb050() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->histOfTabB050($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['message'] = lang('_load_list_success');
            $res['data'] = $arrayRS;
        };
        echo json_encode($res);
    }

    public function update_tabn100_p6() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_update_failed'));
        $arrayRS = $this->updateTabN100P6($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['message'] = lang('_update_success');
            $res['data'] = $arrayRS;
        }
        echo json_encode($res);
    }

    public function list_oftabh200ma() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->loadH200MA($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['message'] = lang('_load_list_success');
            $res['data'] = $arrayRS;
        };
        echo json_encode($res);
    }

    public function comb_tabn100m() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabnN100M($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['message'] = lang('_load_list_success');
            $res['data'] = $arrayRS;
        };
        echo json_encode($res);
    }

    public function comb_tabn100c() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabN100C($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['message'] = lang('_load_list_success');
            $res['data'] = $arrayRS;
        };
        echo json_encode($res);
    }

    public function lst_oftabb050bs() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->lstOfTabB050BS($get);
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

    private function histOfTabB050($get)/*     * : array */ {
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('B050_model', 'B050_MODEL');
        return $this->B050_MODEL->hist_oftabb050($get);
    }

    private function updateTabN100P6($post)/*     * : int */ {
        $post['pnFH000'] = APP_MODULE;
        $post['pnFH200'] = $this->_FH200S;
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('N100_model', 'N100_MODEL');
        return $this->N100_MODEL->update_tabn100_p6($post);
    }

    private function combTabnN100M($get)/*     * : array */ {
        $pnFB050 = isset($get['pnFB050']) ? $get['pnFB050'] : 0;
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_tabn100m(APP_MODULE, $this->_FH200S, $pnFB050, $this->_fuser['QV101']);
    }

    private function combTabN100C($get)/*     * : array */ {
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_tabn100c(APP_MODULE, $this->_FH200S, $this->_fuser['QV101'], $this->_fuser['GRPID']);
    }

    private function loadH200MA() {
        $this->load->model('H200_model', 'H200_MODEL');
        return $this->H200_MODEL->list_oftabh200ma(APP_MODULE, $this->_FH200L, $this->_QV101);
    }

    private function lstOfTabB050BS($get)/*     * : array */ {
        $get['pnFN850'] = $this->_fuser['GRPID'];
        $get['pnFH200'] = isset($get['pnFH200']) ? $get['pnFH200'] : $this->_FH200S;
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('B050_model', 'B050_MODEL');
        return $this->B050_MODEL->lst_oftabb050bs($get);
    }

}
