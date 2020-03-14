<?php

/**
 * @author: Toailq - 12/12/2017
 * @module: C150CM Controller
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class C150CM extends Facilio {

    public function __construct() {
        parent::__construct();
        $this->lang->load('facilio', getCountryFromIP());
    }

    /*     * **************************************************************** */
    /*     * *****************************[PUBLIC]*************************** */
    /*     * **************************************************************** */

    public function index() {
        $modules = array( 'modules.c150cm');
        $data['COMBTabN850'] = $this->comBTabN850();
        $data['ComBTabN100G'] = $this->combTabN100G($this->_fuser['GRPID']);
        $this->loadTemplate('Bảo trì định kì', 'c150cm_view', $modules, $data);
    }

    public function insert_tabm650c() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_update_failed'));
        $arrayRS = $this->insertTabM650C($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_update_success');
        }
        echo json_encode($res);
    }

    public function storno_tabm650() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_delete_failed'));
        $arrayRS = $this->stornoTabM650($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $response['message'] = lang('_delete_success');
        }
        echo json_encode($res);
    }

    public function lst_oftabm650_p11() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->lstOfTabM650p11($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        }
        echo json_encode($res);
    }

    public function update_coloftable() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->updateColOfTable($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
        }
        echo json_encode($res);
    }

    public function storno_tabc300() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_delete_failed'));
        $arrayRS = $this->stornoTabC300($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $response['message'] = lang('_delete_success');
        }
        echo json_encode($res);
    }

    public function storno_tabc150_p3() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_delete_failed'));
        $arrayRS = $this->stornoTabC150P3($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $response['message'] = lang('_delete_success');
        }
        echo json_encode($res);
    }

    public function lst_oftabv650ebs() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->lstOfTabV650EBS($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        }
        echo json_encode($res);
    }

    public function storno_tabc650() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_delete_failed'));
        $arrayRS = $this->stornoTabC650($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $response['message'] = lang('_delete_success');
        }
        echo json_encode($res);
    }

    public function insert_tabc650() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_update_failed'));
        $arrayRS = $this->insertTabC650($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_update_success');
        }
        echo json_encode($res);
    }

    public function list_oftabc650r_pv() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->listOfTabC650RPV($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function list_oftabc650l_p10() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->listOfTabC650LP10($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function insert_tabc150() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_update_failed'));
        $arrayRS = $this->insertTabC150($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_update_success');
        }
        echo json_encode($res);
    }

    public function list_oftabc300c_p5() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->listOfTabC300CP5($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function insert_tabc300() {
        $post = filter_input_array(INPUT_POST);
        $res = array('status' => 'error', 'message' => lang('_update_failed'));
        $arrayRS = $this->insertTabC300($post);
        if ($arrayRS > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_update_success');
        }
        echo json_encode($res);
    }

    public function list_oftabc150per() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->listOfTabC150PER($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function list_oftabc150c() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->listOfTabC150C($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        // $res['data'] = $this->listOfTabC150C($get);
        echo json_encode($res);
    }

    public function comb_tabc150k() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabC150K($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function comb_tabs250b() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabS250B($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        };
        echo json_encode($res);
    }

    public function comb_tabb050e() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabB050E($get);
        if (count($arrayRS) > 0) { /////count([]) = ?
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
            $res['message'] = lang('_load_list_success');
        }
        echo json_encode($res);
    }

    public function comb_tabn850() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabN850($get);
        if (count($arrayRS) > 0) {
            $res['status'] = 'success';
            $res['data'] = $arrayRS;
        };
        echo json_encode($res);
    }

    public function comb_tabn100g() {
        $get = $this->input->get();
        $res = array('status' => 'error', 'message' => lang('_error_empty'));
        $arrayRS = $this->combTabN100G($get);
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

    private function lstOfTabM650p11($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->lst_oftabm650_p11($get);
    }

    private function stornoTabM650($post)/*     * : int */ {
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->storno_tabm650($post);
    }

    private function insertTabM650C($post)/*     * : int */ {
        $post['pnFH000'] = APP_MODULE;
        $post['pnFH200'] = $this->_FH200S;
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->insert_tabm650c($post);
    }

    private function updateColOfTable($post)/*     * : int */ {
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->update_coloftable($post);
    }

    private function stornoTabC300($post)/*     * : int */ {
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->storno_tabc300($post);
    }

    private function stornoTabC150P3($post)/*     * : int */ {
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->storno_tabc150_p3($post);
    }

    private function lstOfTabV650EBS($get)/*     * : array */ {
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->lst_oftabv650ebs($get);
    }

    private function stornoTabC650($post)/*     * : int */ {
        $post['pnFH000'] = APP_MODULE;
        $post['pnFH200'] = $this->_FH200S;
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->storno_tabc650($post);
    }

    private function insertTabC650($post)/*     * : int */ {
        $post['pnFH000'] = APP_MODULE;
        $post['pnFH200'] = $this->_FH200S;
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $post['pnFN100'] = sset($post['pnFN100']) ? $post['pnFN100'] : $this->_fuser['PN100'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->insert_tabc650($post);
    }

    private function listOfTabC650RPV($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $get['pnFN100'] = isset($get['pnFN100']) ? $get['pnFN100'] : $this->_fuser['PN100'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->list_oftabc650r_pv($get);
    }

    private function listOfTabC650LP10($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pnFH200'] = $this->_FH200S;
        $get['pnFN850'] = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->list_oftabc650l_p10($get);
    }

    private function insertTabC150($post)/*     * : int */ {
        $post['pnFH000'] = APP_MODULE;
        $post['pnFH200L'] = $this->_FH200L;
        $post['pnFH200S'] = $this->_FH200S;
        $post['pvLOGIN'] = isset($post['pvLOGIN']) ? $post['pvLOGIN'] : $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->insert_tabc150($post);
    }

    private function listOfTabC300CP5($get)/*     * : array */ {
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->list_oftabc300c_p5($get);
    }

    private function insertTabC300($post)/*     * : int */ {
        $post['pnFH000'] = APP_MODULE;
        $post['pvLOGIN'] = $this->_fuser['QV101'];
        $post['pnFN100'] = $this->_fuser['PN100'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->insert_tabc300($post);
    }

    private function listOfTabC150PER($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pnFH200'] = $this->_FH200S;
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->list_oftabc150per($get);
    }

    private function listOfTabC150C($get)/*     * : array */ {
        $get['pnFH000'] = APP_MODULE;
        $get['pnFH200'] = $this->_FH200S;
        $get['pvLOGIN'] = $this->_fuser['QV101'];
        $get['pvSTATUS'] = $this->_fuser['STATUS'];
        $get['pnFN850'] = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
        $this->load->model('C150_model', 'C150_MODEL');
        return $this->C150_MODEL->list_oftabc150c($get);
    }

    private function combTabS250B($get)/*     * : array */ {
        $pnFB050 = isset($get['pnFB050']) ? $get['pnFB050'] : 0;
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_tabs250b(APP_MODULE, $pnFB050, $this->_fuser['QV101']);
    }

    private function combTabB050E($get)/*     * : array */ {
        $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_tabb050e(APP_MODULE, $this->_FH200S, $pnFN850, $this->_fuser['QV101']);
    }

    private function combTabC150K($get)/*     * : array */ {
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_tabc150k($this->_FH200S, $this->_fuser['QV101']);
    }

    private function combTabN850()/*     * : array */ {
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_TabN850(APP_MODULE, $this->_FH200S, $this->_fuser['QV101']);
    }

    private function combTabN100G($get)/*     * : array */ {
        $pnFN850 = isset($get['pnFN850']) ? $get['pnFN850'] : $this->_fuser['GRPID'];
        $this->load->model('Comb_model', 'COMB_MODEL');
        return $this->COMB_MODEL->comb_TabN100G($pnFN850, $this->_fuser['QV101']);
    }

}
