<?php

/**
 * @author: hyn - 02/03/2018
 * @model: s200_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class S200_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    public function list_oftabs200ht($get) {
        $rs = $this->_get('s200/list_oftabs200ht', array(
            'pnFH000' => APP_MODULE,
            'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
            'pvSV202' => isset($get['pvSV202']) ? $get['pvSV202'] : null,
            'pvSV217' => isset($get['pvSV217']) ? $get['pvSV217'] : null,
            'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
            'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 15,
            'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 1,
            'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
            'pvLOGIN' => $get['pvLOGIN'],
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabs200_p4($pnPS200, $pnFH000, $pnFH200, $pvLOGIN) {
        $rs = $this->_post('s200/insert_tabs200_p4', array(
            'pnPS200' => $pnPS200, 
            'pnFH000' => $pnFH000, 
            'pnFH200' => $pnFH200, 
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabs200_p26($pnPS200, $pnFH000, $pnFH200, $pnFH300, $pnFV200, $pnFC000, $pnFC550, $pnFC425, $pvSV201, $pvSV202, $pvSV203, $pvSV204, $pvSV205, $pvSV206, $pvSV207, $pvSV208, $pvSV209, $pvSV210, $pvSV211, $pvSV212, $pvSV213, $pvSV214, $pnSN215, $pnSN216, $pvSV217, $pvLOGIN) {
        $rs = $this->_post('s200/insert_tabs200_p26', array(
            'pnPS200' => $pnPS200,
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFH300' => $pnFH300,
            'pnFV200' => $pnFV200,
            'pnFC000' => $pnFC000,
            'pnFC550' => $pnFC550,
            'pnFC425' => $pnFC425,
            'pvSV201' => $pvSV201,
            'pvSV202' => $pvSV202,
            'pvSV203' => $pvSV203,
            'pvSV204' => $pvSV204,
            'pvSV205' => $pvSV205,
            'pvSV206' => $pvSV206,
            'pvSV207' => $pvSV207,
            'pvSV208' => $pvSV208,
            'pvSV209' => $pvSV209,
            'pvSV210' => $pvSV210,
            'pvSV211' => $pvSV211,
            'pvSV212' => $pvSV212,
            'pvSV213' => $pvSV213,
            'pvSV214' => $pvSV214,
            'pnSN215' => $pnSN215,
            'pnSN216' => $pnSN216,
            'pvSV217' => $pvSV217,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function storno_tabs200($pnPS200, $pvLOGIN) {
        $rs = $this->_post('s200/storno_tabs200', array(
            'pnPS200' => $pnPS200,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    
    /* NEW  */
    public function new_list_oftabs200ht($get) {
        $rs = $this->_get('s200/list_oftabs200ht', array(
            'pnFH000' => isset($get['pnFH000']) ? $get['pnFH000'] : 0,
            'pnFH200' => isset($get['pnFH200']) ? $get['pnFH200'] : 0,
            'pvSV202' => isset($get['pvSV202']) ? $get['pvSV202'] : '',
            'pvSV217' => isset($get['pvSV217']) ? $get['pvSV217'] : '',
            'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
            'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 15,
            'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 1,
            'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
            'pvLOGIN' => isset($get['pvLOGIN']) ? $get['pvLOGIN'] : '',
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function new_insert_tabs200_p26($post) {
        $rs = $this->_post('s200/insert_tabs200_p26', array(
            'pnPS200' => isset($post['PS200']) ? $post['PS200'] : 0,
            'pnFH000' => isset($post['FH000']) ? $post['FH000'] : 0,
            'pnFH200' => isset($post['FH200']) ? $post['FH200'] : 0,
            'pnFH300' => isset($post['FH300']) ? $post['FH300'] : 0,
            'pnFV200' => isset($post['FV200']) ? $post['FV200'] : 0,
            'pnFC000' => isset($post['FC000']) ? $post['FC000'] : 0,
            'pnFC550' => isset($post['FC550']) ? $post['FC550'] : 0,
            'pnFC425' => isset($post['FC425']) ? $post['FC425'] : 0,
            'pvSV201' => isset($post['SV201']) ? $post['SV201'] : '',
            'pvSV202' => isset($post['SV202']) ? $post['SV202'] : '',
            'pvSV203' => isset($post['SV203']) ? $post['SV203'] : '',
            'pvSV204' => isset($post['SV204']) ? $post['SV204'] : '',
            'pvSV205' => isset($post['SV205']) ? $post['SV205'] : '',
            'pvSV206' => isset($post['SV206']) ? $post['SV206'] : '',
            'pvSV207' => isset($post['SV207']) ? $post['SV207'] : '',
            'pvSV208' => isset($post['SV208']) ? $post['SV208'] : '',
            'pvSV209' => isset($post['SV209']) ? $post['SV209'] : '',
            'pvSV210' => isset($post['SV210']) ? $post['SV210'] : '',
            'pvSV211' => isset($post['SV211']) ? $post['SV211'] : '',
            'pvSV212' => isset($post['SV212']) ? $post['SV212'] : '',
            'pvSV213' => isset($post['SV213']) ? $post['SV213'] : '',
            'pvSV214' => isset($post['SV214']) ? $post['SV214'] : '',
            'pnSN215' => isset($post['SN215']) ? $post['SN215'] : 0,
            'pnSN216' => isset($post['SN216']) ? $post['SN216'] : 0,
            'pvSV217' => isset($post['SV217']) ? $post['SV217'] : '',
            'pvLOGIN' => isset($post['LOGIN']) ? $post['LOGIN'] : '',
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function new_storno_tabs200($post) {
        $rs = $this->_post('s200/storno_tabs200', array(
            'pnPS200' => isset($post['PS200']) ? $post['PS200'] : 0,
            'pvLOGIN' => isset($post['LOGIN']) ? $post['LOGIN'] : '',
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
}