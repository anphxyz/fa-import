<?php
/**
 * @author: Linhnc - 24/07/2018
 * @module: Reagieren
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class Reagieren extends Facilio{

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * **************************[PUBLIC]****************************** */
  /*   * **************************************************************** */
  public function index() {
    $script = array('default', 'modules.reagieren');
    $this->loadTemplateAnph(lang('_system_management'), 'reagieren_view', 'reagieren-wrapper', 'reagieren', $script);
  }

}