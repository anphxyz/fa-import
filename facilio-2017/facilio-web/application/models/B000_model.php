<?php

/**
 * @author: hyn - 02/03/2018
 * @model: b000_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class B000_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }

    public function lst_oftabb000($get)/* : array */ {
        $rs = $this->_get('b000/lst_oftabb000', array(
            'pnFH000' => APP_MODULE,
            'pnFH200L' => isset($get['FH200L']) ? $get['FH200L'] : 0,
            'pnFH200S' => isset($get['FH200S']) ? $get['FH200S'] : 0,
            'pvBV003' => isset($get['BV003']) ? $get['BV003'] : null,
            'pvLOGIN' => $get['LOGIN'],
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    
    public function insert_tabb000($post)/* : array */ {
        $rs = $this->_post('b000/insert_tabb000', array(
            'pnPB000' => isset($post['PB000']) ? $post['PB000'] : 0,
            'pnFH000' => APP_MODULE,
            'pnFH200' => isset($post['FH200']) ? $post['FH200'] : 0,
            'pvBV001' => isset($post['BV001']) ? $post['BV001'] : null,
            'pvBV002' => isset($post['BV002']) ? $post['BV002'] : null,
            'pvBV003' => isset($post['BV003']) ? $post['BV003'] : null,
            'pnFB000' => isset($post['FB000']) ? $post['FB000'] : 0,
            'pvLOGIN' => $post['LOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    
    public function storno_tabb000($post)/* : int */ {
        $rs = $this->_post('b000/storno_tabb000', array(
            'pnPB000' => isset($post['PB000']) ? $post['PB000'] : 0,
            'pvLOGIN' => $post['LOGIN'],
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    
}