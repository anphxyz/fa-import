<?php

/**
 * @author: Toailq - 19/01/2018
 * @module: N420OEE Controller
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class N420 extends Facilio {

    public function __construct() {
        parent::__construct();
        $this->lang->load('facilio', getCountryFromIP());
    }

    /*     * **************************************************************** */
    /*     * *****************************[PUBLIC]*************************** */
    /*     * **************************************************************** */

    public function index() {
        $modules = array( 'modules.n420oee');
        $this->loadTemplate('OEE', 'n420_view', $modules);
    }

    public function update_tabh450oee() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_update_failed'));
        $arrayRS = $this->updateTabh450OEE($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_update_success');
        }
        echo json_encode($res);
    }

    public function insert_tabn420oee() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_update_failed'));
        $arrayRS = $this->insertTabN420OEE($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_update_success');
        }
        echo json_encode($res);
    }

    public function list_oftabn420oee() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->listOfTabN420OEE($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function comb_tabh450() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabH450($get);
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

    private function updateTabh450OEE($post)/*     * : int */ {
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('N420_model', 'N420_MODEL');
        return $this->N420_MODEL->update_tabh450oee($post);
    }

    private function insertTabN420OEE($post)/*     * : int */ {
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('N420_model', 'N420_MODEL');
        return $this->N420_MODEL->insert_tabn420oee($post);
    }

    private function listOfTabN420OEE($get)/*     * : array */ {
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('N420_model', 'N420_MODEL');
        return $this->N420_MODEL->list_oftabn420oee($get);
    }

    private function combTabH450($get)/*     * : array */ {
        $pnFH600 = isset($get['pnFH600']) ? $get['pnFH600'] : 0;
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_tabh450(APP_MODULE, $this->_FH200S, $pnFH600, $this->_fuser['QV101']);
    }

}
