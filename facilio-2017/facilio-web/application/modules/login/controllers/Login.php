<?php

/**
 * @author: Anph - 07/12/2017
 * @module: Login
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MX_Controller {

  public function __construct() {
    parent::__construct();
    if ($this->_checkLogin()) {
      redirect('', 'refresh');
      return;
    }
  }

  /*   * **************************************************************** */
  /*   * **************************[PUBLIC]****************************** */
  /*   * **************************************************************** */

  public function index() {
    $this->lang->load('facilio', getCountryFromIP());
    $this->load->view('login_view');
  }

  public function do_login() {
    $post = filter_input_array(INPUT_POST);
    $response = array('status' => 'error', 'message' => 'Login failed!');
    if ($this->doLogin($post)) {
      $response['status'] = 'success';
      $response['message'] = 'Login success!';
    }
    echo json_encode($response);
  }

  /*   * **************************************************************** */
  /*   * **************************[PRIVATE]***************************** */
  /*   * **************************************************************** */

  private function doLogin($post) {
    $this->load->model('Adm_model', 'ADM_MODEL');
    $q100 = $this->ADM_MODEL->check_userlogin($post);
    if (isset($q100)) {
      $this->session->set_userdata(F_USER, $q100); //ss_user
      $this->session->set_userdata('lang', $q100['QV115']); //lang
      return true;
    }
    return false;
  }

  /**
   * @Input: void
   * @Output: boolean
   * @Diescription: call at any module required login, check login state from session -> true | false
   */
  private function _checkLogin() {
    $ss = $this->session->userdata(F_USER);
    return isset($ss) && !empty($ss);
  }

}
