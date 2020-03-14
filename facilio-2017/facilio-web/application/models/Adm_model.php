<?php

/**
 * @author: Anph - 07/12/2017
 * @model: Adm_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class Adm_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    function check_userlogin($post)/* : array */ {
        $rs = $this->_post('adm/check_userloginht', array(
            "pvQV101" => isset($post['QV101']) ? $post['QV101'] : '',
            "pvQV102" => isset($post['QV102']) ? $post['QV102'] : '',
            'pnFH000' => APP_MODULE
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'][0];
        return [];
    }

    public function create_dataq100($post)/* : int */ {
        $rs = $this->_post('adm/create_dataq100', array(
            'pnFN100' => $post['pnFN100'],
            'pvQV101' => $post['pvQV101'],
            'pnFC4501' => isset($post['pnFC4501']) ? $post['pnFC4501'] : 0,
            'pnFC4502' => isset($post['pnFC4502']) ? $post['pnFC4502'] : 0,
            'pnFC4503' => isset($post['pnFC4503']) ? $post['pnFC4503'] : 0,
            'pnFC5001' => isset($post['pnFC5001']) ? $post['pnFC5001'] : 0,
            'pnFC5002' => isset($post['pnFC5002']) ? $post['pnFC5002'] : 0,
            'pnFC5003' => isset($post['pnFC5003']) ? $post['pnFC5003'] : 0,
            'pvFC550' => isset($post['pvFC550']) ? $post['pvFC550'] : null,
            'pvQV102' => isset($post['pvQV102']) ? $post['pvQV102'] : null,
            'pdQD103' => isset($post['pdQD103']) ? $post['pdQD103'] : null,
            'pdQD104' => isset($post['pdQD104']) ? $post['pdQD104'] : null,
            'pvQV105' => isset($post['pvQV105']) ? $post['pvQV105'] : null,
            'pvQV106' => isset($post['pvQV106']) ? $post['pvQV106'] : null,
            'pvQV107' => isset($post['pvQV107']) ? $post['pvQV107'] : null,
            'pvQV108' => isset($post['pvQV108']) ? $post['pvQV108'] : null,
            'pvQV109' => isset($post['pvQV109']) ? $post['pvQV109'] : null,
            'pnQN110' => isset($post['pnQN110']) ? $post['pnQN110'] : 0,
            'pnQN111' => isset($post['pnQN111']) ? $post['pnQN111'] : 0,
            'pnQN112' => isset($post['pnQN112']) ? $post['pnQN112'] : 0,
            'pnQN113' => isset($post['pnQN113']) ? $post['pnQN113'] : 0,
            'pvQV114' => isset($post['pvQV114']) ? $post['pvQV114'] : null,
            'pvQV115' => isset($post['pvQV115']) ? $post['pvQV115'] : null,
            'pvLOGIN' => $post['pvQV115']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }

    public function create_data_q400($post)/* : int */ {
        $rs = $this->_post('adm/create_dataq400', array(
            'pnPQ400' => isset($post['PQ400']) ? $post['PQ400'] : 0,
            'pvQV401' => isset($post['PQ400']) ? $post['PQ400'] : null,
            'pvQV402' => isset($post['PQ400']) ? $post['PQ400'] : null,
            'pnFQ300' => isset($post['PQ400']) ? $post['PQ400'] : 0,
            'pnFH000' => APP_MODULE,
            'pvLOGIN' => $post['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'];
        return 0;
    }

    public function storno_data_q400($post)/* : int */ {
        $rs = $this->_post('adm/storno_dataq400', array(
            'pnPQ400' => isset($post['PQ400']) ? $post['PQ400'] : 0
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'];
        return 0;
    }

    /**
    * -- Tao moi moi lien quan giua nhom lam viec va chuc nang cong viec
    */
    public function create_data_q150_p3($post)/* : int */ {
        $rs = $this->_post('adm/create_dataq150_p3', array(
            'pnFQ350' => isset($post['FQ350']) ? $post['FQ350'] : 0,
            'pnFQ400' => isset($post['FQ400']) ? $post['FQ400'] : 0,
            'pvLOGIN' => $post['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'];
        return 0;
    }

    /**
     * -- sua ddoi moi lien quan giua nhom lam viec va chuc nang cong viec
     */
    public function create_data_q150_p4($post)/* : int */ {
        $rs = $this->_post('adm/create_dataq150_p4', array(
            'pnFH000' => APP_MODULE,
            'pnFQ350' => isset($post['FQ350']) ? $post['FQ350'] : 0,
            'pnFQ400' => isset($post['FQ400']) ? $post['FQ400'] : 0,
            'pvLOGIN' => $post['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'];
        return 0;
    }

    public function storno_data_q150($post)/* : int */ {
        $rs = $this->_post('adm/storno_dataq150', array(
            'pnFH000' => APP_MODULE,
            'pnFQ350' => isset($post['FQ350']) ? $post['FQ350'] : 0,
            'pnFQ400' => isset($post['FQ400']) ? $post['FQ400'] : 0,
            'pvLOGIN' => $post['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'];
        return 0;
    }

    public function create_data_q050($post)/* : int */ {
        $rs = $this->_post('adm/create_dataq050', array(
            'pnFN100' => isset($post['FN100']) ? $post['FN100'] : 0,
            'pnFH000' => APP_MODULE,
            'pvLOGIN' => $post['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'];
        return 0;
    }

    public function create_data_q200_p3($post)/* : int */ {
        $rs = $this->_post('adm/create_dataq200_p3', array(
            'pnFQ350' => isset($post['FQ350']) ? $post['FQ350'] : 0,
            'pnFQ100' => isset($post['FQ100']) ? $post['FQ100'] : 0,
            'pvLOGIN' => $post['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'];
        return 0;
    }

    public function create_data_q200_p4($post)/* : int */ {
        $rs = $this->_post('adm/create_dataq200_p4', array(
            'pnFH000' => APP_MODULE,
            'pnFQ350' => isset($post['FQ350']) ? $post['FQ350'] : 0,
            'pnFQ100' => isset($post['FQ100']) ? $post['FQ100'] : 0,
            'pvLOGIN' => $post['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'];
        return 0;
    }

    public function storno_data_q200($post)/* : int */ {
        $rs = $this->_post('adm/storno_dataq200', array(
            'pnFH000' => APP_MODULE,
            'pnFQ350' => isset($post['FQ350']) ? $post['FQ350'] : 0,
            'pnFQ100' => isset($post['FQ100']) ? $post['FQ100'] : 0,
            'pvLOGIN' => $post['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements'])
            return $rs['elements'];
        return 0;
    }




}
