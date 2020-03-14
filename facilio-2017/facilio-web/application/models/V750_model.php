<?php

/**
 * @author: Toailq - 18/01/2018
 * @model: v750_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class V750_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    public function insert_tabv750($post)/* : int */ {
        $rs = $this->_post('v750/insert_tabv750', array(
            'pnPV750' => isset($post['pnPV750']) ? $post['pnPV750'] : 0,
            'pnFV300' => isset($post['pnFV300']) ? $post['pnFV300'] : 0,
            'pnFH000' => $post['pnFH000'],
            'pnFH200' => $post['pnFH200'],
            'pnFK100' => $post['pnFK100'],
            'pnFV050' => $post['pnFV050'],
            'pnFN850' => isset($post['pnFN850']) ? $post['pnFN850'] : 0,
            'pnFK950B' => isset($post['pnFK950B']) ? $post['pnFK950B'] : 0,
            'pnFK950S' => isset($post['pnFK950S']) ? $post['pnFK950S'] : 0,
            'pdVD751' => isset($post['pdVD751']) ? $post['pdVD751'] : null,
            'pdVD752' => isset($post['pdVD752']) ? $post['pdVD752'] : null,
            'pnVN753' => isset($post['pnVN753']) ? $post['pnVN753'] : 0,
            'pnVN754' => isset($post['pnVN754']) ? $post['pnVN754'] : 0,
            'pnVN755' => isset($post['pnVN755']) ? $post['pnVN755'] : 0,
            'pnVN756' => isset($post['pnVN756']) ? $post['pnVN756'] : 0,
            'pvVV757' => isset($post['pvVV757']) ? $post['pvVV757'] : null,
            'pbVB758' => isset($post['pbVB758']) ? $post['pbVB758'] : null,
            'pvVV759' => isset($post['pvVV759']) ? $post['pvVV759'] : null,
            'pnVN760' => isset($post['pnVN760']) ? $post['pnVN760'] : 0,
            'pnFC475' => isset($post['pnFC475']) ? $post['pnFC475'] : 0,
            'pvVV767' => isset($post['pvVV767']) ? $post['pvVV767'] : null,
            'pnVN768' => isset($post['pnVN768']) ? $post['pnVN768'] : 0,
            'pnVN769' => isset($post['pnVN769']) ? $post['pnVN769'] : 0,
            'pvVV770' => isset($post['pvVV770']) ? $post['pvVV770'] : null,
            'pvLOGIN' => $post['pvLOGIN']

            // 'pnPV750' => $pnPV750,
            // 'pnFV300' => $pnFV300,
            // 'pnFH000' => $pnFH000,
            // 'pnFH200' => $pnFH200,
            // 'pnFK100' => $pnFK100,
            // 'pnFV050' => $pnFV050,
            // 'pnFN850' => $pnFN850,
            // 'pnFK950B' => $pnFK950B,
            // 'pnFK950S' => $pnFK950S,
            // 'pdVD751' => $pdVD751,
            // 'pdVD752' => $pdVD752,
            // 'pnVN753' => $pnVN753,
            // 'pnVN754' => $pnVN754,
            // 'pnVN755' => $pnVN755,
            // 'pnVN756' => $pnVN756,
            // 'pvVV757' => $pvVV757,
            // 'pbVB758' => $pbVB758,
            // 'pvVV759' => $pvVV759,
            // 'pnVN760' => $pnVN760,
            // 'pnFC475' => $pnFC475,
            // 'pvVV767' => $pvVV767,
            // 'pnVN768' => $pnVN768,
            // 'pnVN769' => $pnVN769,
            // 'pvVV770' => $pvVV770,
            // 'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }

    public function lst_ofemployee($get)/* : array */ {
        $rs = $this->_get('v750/lst_ofemployee', array(
            'pnEXTID' => $get['pnEXTID'],
            'pnDEPID' => isset($get['pnDEPID']) ? $get['pnDEPID'] : 0,
            'pvLOGIN' => $get['pvLOGIN']

            // 'pnEXTID' => $pnEXTID,
            // 'pnDEPID' => $pnDEPID,
            // 'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function lst_oftabv750($get)/* : array */ {
        $rs = $this->_get('v750/lst_oftabv750', array(
            'pnFH000' => $get['pnFH000'],
            'pnFH200' => $get['pnFH200'],
            'pnFV750' => isset($get['pnFV750']) ? $get['pnFV750'] : 0,
            'pnORGID' => $get['pnORGID'],
            'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
            'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 10,
            'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 1,
            'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
            'pvLOGIN' => $get['pvLOGIN']

            // 'pnFH000' => $pnFH000,
            // 'pnFH200' => $pnFH200,
            // 'pnFV750' => $pnFV750,
            // 'pnORGID' => $pnORGID,
            // 'pnOFFSET' => $pnOFFSET,
            // 'pnLIMIT' => $pnLIMIT,
            // 'pnSORT' => $pnSORT,
            // 'pnDIRECTION' => $pnDIRECTION,
            // 'pvLOGIN' => $pvLOGIN
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

}
